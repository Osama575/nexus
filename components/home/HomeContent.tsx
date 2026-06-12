"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Bot,
  Phone,
  Users,
  Settings,
  Clock,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Zap,
  Workflow,
} from "lucide-react";

const fadeUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

const itemTransition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const };

const stats = [
  {
    icon: Clock,
    value: "5+",
    label: "Hours Saved Monthly",
    sub: "Per automation deployed",
  },
  {
    icon: Bot,
    value: "24/7",
    label: "Automated Operations",
    sub: "Your business never stops",
  },
  {
    icon: Calendar,
    value: "2–4",
    label: "Week Build Time",
    sub: "Audit to live system",
  },
  {
    icon: MapPin,
    value: "Local",
    label: "Ipswich, Suffolk",
    sub: "Serving UK businesses",
  },
];

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Eliminate invoice processing, data entry, CRM updates, and reporting with intelligent AI-powered pipelines.",
    href: "/services#workflow",
    accent: "violet",
  },
  {
    icon: Phone,
    title: "Voice Agents",
    description:
      "AI phone agents that handle inbound calls, qualify leads, and book appointments 24/7, without any human involvement.",
    href: "/services#voice",
    accent: "cyan",
  },
  {
    icon: Users,
    title: "Lead Capture Automation",
    description:
      "Intelligent systems that qualify, score, and route leads automatically. No more manual triage.",
    href: "/services#lead-capture",
    accent: "violet",
  },
  {
    icon: Settings,
    title: "Back-Office Automation",
    description:
      "Automate HR, finance, and operations workflows so your team can focus on high-value work.",
    href: "/services#back-office",
    accent: "cyan",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Workflow Audit",
    description:
      "We spend 30 minutes understanding your processes and identifying the highest-impact automation opportunities, with no obligation.",
  },
  {
    number: "02",
    title: "We Build It",
    description:
      "Our team designs and builds your custom automation system and delivers it in 2–4 weeks.",
  },
  {
    number: "03",
    title: "Runs Automatically",
    description:
      "Your system goes live and runs 24/7. We monitor, maintain, and iterate as your business grows.",
  },
];

const caseStudies = [
  {
    client: "Beyond Telecoms Consulting",
    industry: "Telecoms · Consulting",
    result: "5+ hours saved monthly",
    description:
      "Automated commission statement processing: PDF extraction, invoice generation, and email distribution. No manual steps.",
    tags: ["PDF Processing", "Invoice Automation", "Email Automation"],
    href: "/case-studies#beyond-telecoms",
  },
  {
    client: "HELIGROUP",
    industry: "Helicopter MRO · Training",
    result: "24/7 lead qualification",
    description:
      "AI Training Assistant chatbot handling global training enquiries, qualifying prospects, and booking follow-up calls automatically.",
    tags: ["AI Chatbot", "Lead Qualification", "Booking Automation"],
    href: "/case-studies#heligroup",
  },
];

export default function HomeContent() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-grid-pattern">
        {/* Background glows */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-violet-600/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            {/* Location badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-300 text-sm font-medium mb-8">
                <MapPin className="w-3.5 h-3.5" />
                AI Automation Agency · Ipswich, Suffolk
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              Automate Your Workflows.{" "}
              <span className="gradient-text block sm:inline">
                Scale Without Limits.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              NexuslineAI builds AI-powered automation systems that eliminate
              manual tasks and run your back-office 24/7, so you can focus on
              growing your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105 text-base w-full sm:w-auto justify-center"
              >
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 text-base w-full sm:w-auto justify-center"
              >
                See Our Work
                <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Trust points */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-500"
            >
              {[
                "No long-term contracts required",
                "Free 30-min workflow audit",
                "Live within 2–4 weeks",
              ].map((point) => (
                <span key={point} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-[#060a14]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-violet-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-300 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              AI Automation That{" "}
              <span className="gradient-text">Actually Works</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Four core services designed to eliminate your most time-consuming
              manual processes, so you can focus on what matters most.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={service.href} className="block group h-full">
                  <div className="card-gradient rounded-2xl p-6 lg:p-8 h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                        service.accent === "violet"
                          ? "bg-violet-600/15 text-violet-400"
                          : "bg-cyan-500/15 text-cyan-400"
                      }`}
                    >
                      <service.icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-end mt-auto">
                      <span className="flex items-center gap-1 text-xs text-slate-500 group-hover:text-violet-400 transition-colors">
                        Learn more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#060a14]/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-4">
              The Process
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              From First Call to{" "}
              <span className="gradient-text">Full Automation</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base">
              A straightforward 3-step process built around your business, not
              the other way round.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-[28px] left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] h-px bg-gradient-to-r from-violet-600/30 via-cyan-500/30 to-violet-600/30" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-base mb-6 shadow-lg glow-purple">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105"
            >
              Start With a Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Case Studies Preview ─────────────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
              <TrendingUp className="w-3 h-3" />
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Results We&apos;ve{" "}
              <span className="gradient-text">Delivered</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Real automations built for real UK businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={cs.href} className="block group h-full">
                  <div className="card-gradient rounded-2xl p-6 lg:p-8 h-full flex flex-col group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-slate-400 text-xs mb-4 self-start">
                      {cs.industry}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {cs.client}
                    </h3>

                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-green-400 font-semibold text-sm">
                        {cs.result}
                      </span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                      {cs.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-violet-600/10 text-violet-400 border border-violet-600/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="flex items-center gap-1.5 text-sm text-slate-500 group-hover:text-violet-400 transition-colors mt-auto">
                      Read case study{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors"
            >
              View detailed case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-[#0a0f1e] to-cyan-900/20" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/12 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to Automate{" "}
              <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute workflow audit. We'll identify your biggest
              automation opportunities and show you exactly what's possible.
              No obligation, no hard sell.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105 text-base w-full sm:w-auto justify-center"
              >
                Book Free Workflow Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 text-base w-full sm:w-auto justify-center"
              >
                Explore Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              No obligation. No commitment. Just a conversation about your
              business.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
