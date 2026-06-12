import type { Metadata } from "next";
import HomeContent from "@/components/home/HomeContent";

export const metadata: Metadata = {
  title: "NexuslineAI — AI Automation Agency | Ipswich, Suffolk",
  description:
    "NexuslineAI builds AI-powered automation systems that eliminate manual tasks and run your back-office 24/7. Based in Ipswich, Suffolk. Serving UK SMEs.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <HomeContent />;
}
