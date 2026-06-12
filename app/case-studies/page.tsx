import type { Metadata } from "next";
import CaseStudiesContent from "@/components/case-studies/CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies — Real Results for Real Businesses",
  description:
    "See how NexuslineAI has helped UK businesses automate their workflows. Case studies: Beyond Telecoms Consulting (5+ hours saved monthly) and HELIGROUP (24/7 lead qualification).",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
