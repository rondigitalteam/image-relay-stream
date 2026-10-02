import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Ron Digital" },
      { name: "description", content: "Client results and proof of work from Ron Digital projects." },
      { property: "og:title", content: "Portfolio | Ron Digital" },
      { property: "og:description", content: "Client results and proof of work from Ron Digital projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SitePage section="portfolio" />,
});
