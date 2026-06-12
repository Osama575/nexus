"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Phone,
  Users,
  Settings,
  CheckCircle2,
  ChevronDown,
  Clock,
  TrendingUp,
  Zap,
  Star,
} from "lucide-react";

const services = [
  {
    id: "workflow",
    icon: Workflow,
    title: "AI Workflow Automation",
    tagline: "Eliminate Manual Processes. Run Smarter.",
    problem:
      "Your team is spending hours every week on repetitive tasks: copying data between systems, processing invoices manually, generating the same reports, and updating CRM fields by hand. This isn't just slow; it's expensive and error-prone.",
    solution:
      "We build intelligent automation pipelines that connect your existing tools and handle these processes automatically. Data flows between your systems without anyone touching a keyboard.",
    included: [
      "Workflow audit and process mapping",
      "Custom automation pipeline design and build",
      "Intelligent AI-powered data processing",
      "Connection to your existing tools (CRM, accounting, email, etc.)",
      "Error handling and alerting",
      "30-day post-launch support and refinement",
      "Documentation and walkthrough training",
    ],
    results: [
      "5–20 hours saved per week",
      "Near-zero manual data entry errors",
      "Processes run 24/7 without staff intervention",
      "Faster invoice-to-payment cycles",
    ],
    color: "violet",
  },
  {
    id: "voice",
    icon: Phone,
    title: "Voice Agents",
    tagline: "Your Business Answers the Phone. Even at 3am.",
    problem:
      "Missed calls mean missed revenue. Your team can't answer every enquiry, especially outside business hours. Prospects call, hear voicemail, and ring a competitor. Meanwhile, your staff spend time on basic qualification calls that don't need a human.",
    solution:
      "We build AI voice agents that answer your phone 24/7, handle initial enquiries, qualify leads against your criteria, and book appointments directly into your calendar, automatically.",
    included: [
      "AI voice agent design and configuration",
      "Custom conversation flows tailored to your business",
      "Lead qualification criteria setup",
      "Calendar integration for automated booking",
      "Call recording and transcript logging",
      "CRM integration to capture lead data",
      "Handoff protocol for complex enquiries",
    ],
    results: [
      "100% of calls answered, 24/7",
      "Qualified leads booked without staff involvement",
      "Reduced time spent on basic enquiry calls",
      "Detailed call logs and lead intelligence",
    ],
    color: "cyan",
  },
  {
    id: "lead-capture",
    icon: Users,
    title: "Lead Capture Automation",
    tagline: "Every Lead Qualified. Every Opportunity Captured.",
    problem:
      "Leads come in from multiple sources: website forms, social media, referrals, events. Someone has to manually review, qualify, and route each one. High-value prospects wait hours or days for a response. Low-quality leads waste your team's time.",
    solution:
      "We build intelligent lead capture systems that automatically qualify incoming leads using AI, score them against your ideal customer profile, and route them to the right person or trigger the right follow-up sequence. All within seconds of receiving an enquiry.",
    included: [
      "Lead capture form design and optimisation",
      "AI-powered lead qualification and scoring model",
      "Automated routing rules based on lead quality",
      "Instant notification to sales team for hot leads",
      "Automated follow-up sequences",
      "CRM integration and lead data enrichment",
      "Reporting dashboard",
    ],
    results: [
      "Response to hot leads within seconds",
      "Elimination of manual lead review time",
      "Higher conversion through faster response",
      "Clear pipeline visibility",
    ],
    color: "violet",
  },
  {
    id: "back-office",
    icon: Settings,
    title: "Back-Office Automation",
    tagline: "Automate Operations. Free Your Team.",
    problem:
      "HR onboarding checklists, expense approval workflows, contractor invoice processing, monthly reporting packs. Back-office operations consume enormous amounts of time from people who should be doing higher-value work. And they're typically full of manual steps, email chains, and spreadsheets.",
    solution:
      "We map your back-office processes and build end-to-end automations for HR, finance, and operations. Document processing, approval workflows, reporting, and internal notifications, all automated and connected to your existing systems.",
    included: [
      "Back-office process audit and prioritisation",
      "HR workflow automation (onboarding, offboarding, leave approval)",
      "Finance workflow automation (invoice processing, expense approval)",
      "Operations workflow automation (reporting, compliance checks)",
      "Document generation and filing",
      "Multi-step approval workflows",
      "Integration with your HR/finance software",
    ],
    results: [
      "10–30 hours saved per week across the team",
      "Consistent, error-free process execution",
      "Audit trail for all automated processes",
      "Staff freed to focus on client-facing work",
    ],
    color: "cyan",
  },
];

const faqs = [
  {
    q: "How long does it take to build an automation?",
    a: "Most projects take 2–4 weeks from the initial audit to going live. Simpler single-process automations can be ready in 1–2 weeks; complex multi-system integrations typically take 4–6 weeks. We'll give you a clear timeline after the free audit.",
  },
  {
    q: "Do I need technical knowledge to use or manage the automation?",
    a: "No. We build automations that run in the background without you needing to touch them. We provide documentation and a walkthrough so you understand what's happening, and we handle all technical maintenance as part of the monthly retainer.",
  },
  {
    q: "What tools do you integrate with?",
    a: "We work with the tools your business already uses, including HubSpot, Salesforce, Xero, QuickBooks, Google Workspace, Microsoft 365, Slack, and hundreds more. If there's an API or Zapier integration, we can almost certainly connect it.",
  },
  {
    q: "What does the monthly retainer cover?",
    a: "The retainer covers monitoring, maintenance, bug fixes, and minor optimisations. As your business grows and changes, we keep your automations running correctly. We also provide regular performance reports showing what the automation is doing.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "The retainer is month-to-month with no long-term lock-in. The only commitment is the upfront setup fee for the build. We're confident in our work. You stay because the automation is delivering value, not because you're contractually obliged.",
  },
];

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="card-gradient rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left group"
          >
            <span className="font-medium text-white text-sm sm:text-base pr-4">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-180 text-violet-400" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function ServicesContent() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-5">
              <Zap className="w-3 h-3" />
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
              AI Automation Services{" "}
              <span className="gradient-text block sm:inline">
                Built for UK SMEs
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Four core services that eliminate your most time-consuming manual
              processes, designed specifically for UK recruitment agencies,
              consulting firms, and professional services businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Service Sections ─────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-gradient rounded-3xl p-7 lg:p-10 scroll-mt-24"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    service.color === "violet"
                      ? "bg-violet-600/15 text-violet-400"
                      : "bg-cyan-500/15 text-cyan-400"
                  }`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-1">
                    {service.title}
                  </h2>
                  <p
                    className={`text-sm font-medium ${
                      service.color === "violet"
                        ? "text-violet-400"
                        : "text-cyan-400"
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left column */}
                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      The Problem
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Our Solution
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {service.solution}
                    </p>
                  </div>

                </div>

                {/* Right column */}
                <div className="space-y-6">
                  {/* What's included */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-2">
                      {service.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical results */}
                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                      Typical Results
                    </h3>
                    <ul className="space-y-2">
                      {service.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:scale-105 shadow-lg ${
                      service.color === "violet"
                        ? "bg-violet-600 hover:bg-violet-500 shadow-violet-900/30 hover:shadow-violet-900/50"
                        : "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/30 hover:shadow-cyan-900/50"
                    }`}
                  >
                    Get a Quote for {service.title}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-24 bg-[#060a14]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-4">
              <Star className="w-3 h-3" />
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Common <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-slate-400">
              Everything you need to know before getting started.
            </p>
          </motion.div>

          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Book a free 30-minute workflow audit. We'll look at your current
              processes and recommend the highest-impact automation, with no
              obligation and no pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105"
            >
              Book Free Workflow Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
