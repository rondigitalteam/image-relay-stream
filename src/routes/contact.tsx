import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Ron Digital" },
      { name: "description", content: "Get in touch with Ron Digital to discuss your project." },
      { property: "og:title", content: "Contact Us | Ron Digital" },
      { property: "og:description", content: "Get in touch with Ron Digital to discuss your project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SitePage section="contact" />,
});
