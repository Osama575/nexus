import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, ExternalLink } from "lucide-react";

const services = [
  { label: "AI Workflow Automation", href: "/services#workflow" },
  { label: "Voice Agents", href: "/services#voice" },
  { label: "Lead Capture Automation", href: "/services#lead-capture" },
  { label: "Back-Office Automation", href: "/services#back-office" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
  { label: "Book Free Audit", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060a14] border-t border-violet-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5 group">
              <div className="bg-white rounded-xl p-1.5 shadow-md group-hover:shadow-violet-900/30 transition-shadow duration-200 inline-block">
                <Image
                  src="/logo.jpg"
                  alt="NexuslineAI"
                  width={48}
                  height={48}
                  className="block rounded-lg"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              AI-powered automation systems for UK SMEs. We eliminate manual tasks and build back-office systems that run 24/7, so you can focus on growth.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <span>Ipswich, Suffolk, UK</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <a
                  href="mailto:darl@nexuslineai.com"
                  className="hover:text-violet-400 transition-colors"
                >
                  darl@nexuslineai.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {company.map((c) => (
                <li key={c.href + c.label}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-violet-400 transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl bg-gradient-to-r from-violet-600/10 to-cyan-500/10 border border-violet-600/20 p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold mb-1">Ready to automate?</p>
            <p className="text-slate-400 text-sm">Book a free 30-minute workflow audit today.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 hover:scale-105 shadow-lg shadow-violet-900/30"
          >
            Book Free Audit
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-violet-600/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {year} NexuslineAI Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-violet-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-violet-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
