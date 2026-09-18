import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required by `output: "export"`; harmless for the server build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/privacy" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
