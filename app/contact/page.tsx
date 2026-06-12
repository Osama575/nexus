import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact — Book a Free Workflow Audit",
  description:
    "Get in touch with NexuslineAI. Book a free 30-minute workflow audit or send us a message. We respond within 24 hours. Based in Ipswich, Suffolk.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
