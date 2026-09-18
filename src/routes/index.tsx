import { createFileRoute } from "@tanstack/react-router";
import { AgrocHome } from "@/components/nursery/AgrocHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agroc — Plants, Gardening & Agricultural Products" },
      { name: "description", content: "Discover plants, gardening essentials and agricultural products for homes, gardens and farms in Sri Lanka." },
      { property: "og:title", content: "Agroc — Grow Something Beautiful" },
      { property: "og:description", content: "Explore plants and gardening products, get simple guidance, and enquire directly through WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <AgrocHome />;
}
