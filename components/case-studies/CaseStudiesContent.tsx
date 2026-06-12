"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle2,
  Zap,
  Globe,
  FileText,
  Bot,
  Phone,
} from "lucide-react";

const caseStudies = [
  {
    id: "beyond-telecoms",
    client: "Beyond Telecoms Consulting",
    industry: "Telecoms · Consulting",
    location: "UK",
    projectType: "AI Workflow Automation",
    headline: "From 5+ Hours of Manual Work to Fully Automated in 4 Weeks",
    challenge:
      "Beyond Telecoms Consulting manages complex commission structures for multiple telecoms resellers. Each month, their team was manually extracting data from PDF commission statements, cross-referencing it against sales records, generating individual invoices, and emailing them to each reseller. The whole process consumed over 5 hours monthly and was prone to errors.",
    solution:
      "We designed and built a fully automated commission processing pipeline. The system monitors an email inbox for incoming PDF statements, intelligently extracts and structures the data regardless of format variations, generates formatted invoices for each reseller, and automatically sends them via email. No human involvement required.",
    techStack: [
      { name: "Workflow Automation", description: "End-to-end automation orchestration" },
      { name: "AI Data Extraction", description: "Intelligent PDF data extraction and processing" },
      { name: "PDF Processing", description: "Automated extraction from varied PDF layouts" },
      { name: "Email Automation", description: "Automated invoice delivery to resellers" },
    ],
    results: [
      {
        metric: "5+ hours",
        label: "Saved every month",
        icon: Clock,
      },
      {
        metric: "100%",
        label: "Process accuracy",
        icon: CheckCircle2,
      },
      {
        metric: "0",
        label: "Manual steps required",
        icon: Zap,
      },
    ],
    quote:
      "The automation handles everything from PDF arrival to invoice delivery. What used to take our team a full afternoon now happens automatically overnight.",
    color: "violet",
  },
  {
    id: "heligroup",
    client: "HELIGROUP",
    industry: "Helicopter MRO · Aviation Training",
    location: "Norwich, UK (global operations)",
    projectType: "AI Chatbot + Lead Qualification",
    headline: "AI Training Assistant Qualifying Global Enquiries 24/7",
    challenge:
      "HELIGROUP operates helicopter maintenance (MRO) and professional training programmes that attract enquiries from candidates across the globe. Their team was handling every initial enquiry manually: answering the same questions about course availability, prerequisites, and pricing repeatedly, while qualifying prospects and booking follow-up calls entirely by hand. This limited how many leads they could engage simultaneously and created slow response times for international prospects in different time zones.",
    solution:
      "We are building a sophisticated AI Training Assistant chatbot that handles the complete initial enquiry journey. The assistant answers detailed questions about training programmes, uses intelligent conversation flows to qualify prospect suitability and intent, captures key information, and automatically books follow-up calls with the HELIGROUP team for qualified candidates. It operates 24/7 across all time zones.",
    techStack: [
      { name: "AI Chatbot", description: "Conversational AI for enquiry handling" },
      { name: "Lead Qualification", description: "Intelligent prospect scoring and routing" },
      { name: "Booking Automation", description: "Automated calendar integration for follow-ups" },
      { name: "CRM Integration", description: "Lead data capture and pipeline management" },
    ],
    results: [
      {
        metric: "24/7",
        label: "Enquiry handling",
        icon: Globe,
      },
      {
        metric: "Global",
        label: "Time zone coverage",
        icon: Phone,
      },
      {
        metric: "Auto",
        label: "Prospect qualification",
        icon: Bot,
      },
    ],
    status: "In Progress",
    color: "cyan",
  },
];

export default function CaseStudiesContent() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/6 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-5">
              <TrendingUp className="w-3 h-3" />
              Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
              Real Results for{" "}
              <span className="gradient-text">Real Businesses</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We don't sell hypothetical outcomes. Here are the actual
              automations we've built for UK businesses and the results they're
              delivering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.id}
              id={cs.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-gradient rounded-3xl overflow-hidden scroll-mt-24"
            >
              {/* Header bar */}
              <div
                className={`px-7 lg:px-10 py-5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                  cs.color === "violet"
                    ? "bg-violet-600/8"
                    : "bg-cyan-500/8"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-slate-500">
                      {cs.industry}
                    </span>
                    {"status" in cs && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                        {cs.status}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">
                    {cs.client}
                  </h2>
                </div>
                <span
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg self-start sm:self-auto ${
                    cs.color === "violet"
                      ? "bg-violet-600/15 text-violet-400 border border-violet-600/20"
                      : "bg-cyan-500/15 text-cyan-400 border border-cyan-500/20"
                  }`}
                >
                  {cs.projectType}
                </span>
              </div>

              <div className="px-7 lg:px-10 py-8 space-y-8">
                {/* Headline */}
                <h3 className="text-xl lg:text-2xl font-semibold text-white leading-snug">
                  {cs.headline}
                </h3>

                {/* Results bar */}
                <div className="grid grid-cols-3 gap-4">
                  {cs.results.map((result) => (
                    <div
                      key={result.label}
                      className={`rounded-xl p-4 text-center border ${
                        cs.color === "violet"
                          ? "bg-violet-600/8 border-violet-600/15"
                          : "bg-cyan-500/8 border-cyan-500/15"
                      }`}
                    >
                      <result.icon
                        className={`w-5 h-5 mx-auto mb-2 ${
                          cs.color === "violet"
                            ? "text-violet-400"
                            : "text-cyan-400"
                        }`}
                      />
                      <div
                        className={`text-xl font-bold mb-1 ${
                          cs.color === "violet"
                            ? "text-violet-300"
                            : "text-cyan-300"
                        }`}
                      >
                        {result.metric}
                      </div>
                      <div className="text-xs text-slate-500">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Challenge + Solution */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5" />
                        The Challenge
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                        <Zap className="w-3.5 h-3.5" />
                        Our Solution
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack + quote */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Technology Used
                      </h4>
                      <div className="space-y-2">
                        {cs.techStack.map((tech) => (
                          <div
                            key={tech.name}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/3 border border-white/5"
                          >
                            <CheckCircle2
                              className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                cs.color === "violet"
                                  ? "text-violet-400"
                                  : "text-cyan-400"
                              }`}
                            />
                            <div>
                              <p className="text-sm font-medium text-white">
                                {tech.name}
                              </p>
                              <p className="text-xs text-slate-500">
                                {tech.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {"quote" in cs && cs.quote && (
                      <blockquote className="relative pl-4 border-l-2 border-violet-600/40">
                        <p className="text-slate-300 text-sm italic leading-relaxed">
                          &ldquo;{cs.quote}&rdquo;
                        </p>
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/25 via-transparent to-cyan-900/15" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Business Could Be{" "}
              <span className="gradient-text">Next</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Every business has processes that can be automated. Book a free
              30-minute workflow audit and we'll show you exactly where AI
              automation can save you time and money.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105 w-full sm:w-auto justify-center"
              >
                Book Free Workflow Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
