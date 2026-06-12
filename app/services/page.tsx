import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "AI Automation Services Built for UK SMEs",
  description:
    "AI workflow automation, voice agents, lead capture, and back-office automation for UK businesses. Based in Ipswich, Suffolk.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
