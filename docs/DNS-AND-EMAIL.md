# DNS and email

The complete `flipwiredesign.com` zone, and why each record is there. DNS is
managed at **Spaceship** (`spaceship.com`) on the nameservers
`launch1.spaceship.net` / `launch2.spaceship.net`.

## The zone

| Type  | Host     | Value                            | Purpose |
| ----- | -------- | -------------------------------- | ------- |
| A     | @        | `185.199.108.153`                | GitHub Pages (apex) |
| A     | @        | `185.199.109.153`                | " |
| A     | @        | `185.199.110.153`                | " |
| A     | @        | `185.199.111.153`                | " |
| AAAA  | @        | `2606:50c0:8000::153`            | GitHub Pages over IPv6 (optional) |
| AAAA  | @        | `2606:50c0:8001::153`            | " |
| AAAA  | @        | `2606:50c0:8002::153`            | " |
| AAAA  | @        | `2606:50c0:8003::153`            | " |
| CNAME | www      | `workarounds81.github.io.`       | The canonical hostname for the site |
| MX    | @ (10)   | `mx1.improvmx.com.`              | Inbound mail, primary |
| MX    | @ (20)   | `mx2.improvmx.com.`              | Inbound mail, failover |
| TXT   | @        | `v=spf1 include:spf.improvmx.com include:_spf.google.com ~all` | SPF |

Web and mail are independent: changing the MX/TXT records cannot affect the
website, and changing the A/CNAME records cannot affect mail.

Verify the whole lot at once:

```bash
python3 -c "import socket; print(socket.gethostbyname_ex('www.flipwiredesign.com'))"
dig flipwiredesign.com MX +short
dig flipwiredesign.com TXT +short
```

## How mail works here

**Receiving** — ImprovMX forwards `info@flipwiredesign.com` to the
`flipwiredesign@gmail.com` inbox. The two MX records point at ImprovMX; nothing
is stored there, it only relays.

**Sending** — Gmail's "Send mail as", relaying through `smtp.gmail.com` on port
587 with an App Password (which requires 2-Step Verification on the Google
account). Mail leaves with `From: info@flipwiredesign.com`.

## Why DMARC must stay at p=none

DMARC asks whether SPF or DKIM passed **for the same domain as the From
header**. That is "alignment", and it is the part that catches people out.

Sending through `smtp.gmail.com`:

- SPF passes, but for `gmail.com` — Gmail uses its own envelope sender
- DKIM passes, but signed as `gmail.com`
- The From header says `flipwiredesign.com`

So both checks pass while **neither aligns**, and DMARC evaluation fails on
every message. That is inherent to this setup, not a misconfiguration.

With no DMARC record (the current state) or `p=none`, nobody acts on the
failure and mail delivers normally. Setting `p=quarantine` would instruct
receiving servers to spam-folder the studio's own client emails; `p=reject`
would bounce them.

**Do not raise the policy above `p=none` while mail is sent this way.**

Optional, monitoring only:

| Type | Host     | Value |
| ---- | -------- | ----- |
| TXT  | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@flipwiredesign.com` |

`rua` reports arrive as daily XML attachments and are unreadable raw — point
them at a free parser (EasyDMARC, dmarcian, Postmark) or omit `rua`.

## SPF and the two envelope senders

The SPF record covers both senders on purpose:

- `include:spf.improvmx.com` — ImprovMX, for anything it relays
- `include:_spf.google.com` — Google, for mail sent via `smtp.gmail.com`

The Google include may be redundant. SPF is evaluated against the **envelope**
sender, not the From header, and Gmail's "send mail as" may use the
`flipwiredesign@gmail.com` envelope rather than the alias — in which case this
domain's record is never consulted for outbound mail and the include does
nothing. But if Gmail does use the alias as the envelope sender, then without
it every message soft-fails SPF, which hurts deliverability. The include is
cheap insurance either way, and if the alias *is* the envelope sender it also
buys SPF alignment, which would make DMARC pass.

Rather than reason about it, check a real message. Send one to a Gmail address,
open **⋮ → Show original**, and read the `SPF`, `DKIM`, `DMARC` and
`Return-Path` lines — they state which domain each check ran against.
`mail-tester.com` gives the same information as a 0–10 score with the problems
named.

## Reaching DMARC enforcement later

Enforcement needs DKIM signed as `flipwiredesign.com`, which a free Gmail
account cannot do. The upgrade path is **Google Workspace** (~US$8/user/month):
real mailboxes on the domain, DKIM keys published under `flipwiredesign.com`,
and alignment that passes. Only then does raising the policy make sense, and
even then in stages — `p=none` → `p=quarantine; pct=10` → upward, watching the
reports at each step.

Worth doing when the studio has more than one person on email, or when quotes
start bouncing. Not before.
