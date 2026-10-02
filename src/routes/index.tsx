import { createFileRoute } from "@tanstack/react-router";
import { SitePage } from "@/components/SitePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ron Digital | Digital Solutions That Help Businesses Grow" },
      { name: "description", content: "Ron Digital creates practical digital solutions for businesses ready to build, connect, and grow." },
      { property: "og:title", content: "Ron Digital | Digital Solutions That Help Businesses Grow" },
      { property: "og:description", content: "Ron Digital creates practical digital solutions for businesses ready to build, connect, and grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <SitePage section="home" />,
});
