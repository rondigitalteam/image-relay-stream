import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Ron Digital" },
      { name: "description", content: "Who Ron Digital is, what we do, and our purpose." },
      { property: "og:title", content: "About Us | Ron Digital" },
      { property: "og:description", content: "Who Ron Digital is, what we do, and our purpose." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SitePage section="about" />,
});
