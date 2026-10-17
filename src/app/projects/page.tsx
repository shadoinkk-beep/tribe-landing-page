import ProjectsCollectionPage from "@/components/projects/ProjectsCollectionPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tribe Group",
  description:
    "Explore Tribe Group's curated second-home communities, from gated farm living to hillside resort homes.",
  openGraph: {
    title: "Projects | Tribe Group",
    description:
      "Explore Tribe Group's curated second-home communities, from gated farm living to hillside resort homes.",
    url: "https://tribegroup.in/projects",
    images: [
      {
        url: "https://tribegroup.in/projects/ananta/main.webp",
        width: 1200,
        height: 630,
        alt: "Tribe Group Projects",
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsCollectionPage />;
}
