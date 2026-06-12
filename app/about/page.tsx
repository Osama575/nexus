import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About — Built by a Business Analyst, Powered by AI",
  description:
    "NexuslineAI was founded by Darlington, an MSc Data Science & AI graduate and Business Analyst based in Ipswich, Suffolk. Learn about our story, values, and approach.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
