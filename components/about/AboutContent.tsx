"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  Zap,
  Heart,
  Users,
  Shield,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Honest and Transparent",
    description:
      "We tell you exactly what we're building, how it works, and what it costs. No jargon, no hidden fees, no over-promising.",
  },
  {
    icon: Zap,
    title: "Technical Depth",
    description:
      "Our founder has an MSc in Data Science & AI and real-world experience delivering data systems at enterprise scale. We know what we're building.",
  },
  {
    icon: Heart,
    title: "Genuinely Local",
    description:
      "We're based in Ipswich and genuinely care about helping Suffolk and East Anglian businesses grow. We're not a London agency with a satellite office.",
  },
  {
    icon: Users,
    title: "Business-First Thinking",
    description:
      "We're analysts first, engineers second. Every automation is scoped to solve a real business problem, not to showcase interesting technology.",
  },
];


export default function AboutContent() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-5">
              About
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Built by a Business Analyst.{" "}
              <span className="gradient-text">Powered by AI.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              NexuslineAI was founded with a clear mission: give UK SMEs access
              to the kind of AI automation that was previously only available to
              large enterprises with dedicated tech teams. We&apos;re a local
              Ipswich business that happens to have serious technical
              capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Founder Story ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-5">
              The Founder
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Meet <span className="gradient-text">Darlington</span>
            </h2>
            <div className="space-y-5 text-slate-300 text-base leading-relaxed">
              <p>
                My background is in sales, business analysis and data science.
                I hold an MSc in Data Science &amp; AI, and I&apos;ve spent my
                career at the intersection of business operations and
                technology, understanding what problems organisations actually
                face and building systems that solve them.
              </p>
              <p>
                As a Business Analyst, I developed a deep appreciation for how
                operational inefficiencies affect organisations of all sizes.
                Every hour spent on manual, repetitive work is an hour not
                spent on what matters.
              </p>
              <p>
                I founded NexuslineAI because I saw a clear gap: UK SMEs were
                being left behind on AI automation. The capability was there,
                but most small businesses didn&apos;t have the technical
                knowledge to implement it, and the few agencies offering AI
                automation were either London-based generalists or
                enterprise-focused consultancies charging enterprise prices.
              </p>
              <p>
                NexuslineAI is the agency I wished existed: local, technical,
                transparent, and completely focused on UK SMEs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why NexuslineAI ───────────────────────────────── */}
      <section className="py-20 bg-[#060a14]/50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-4">
              Why Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="gradient-text">NexuslineAI</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              There are other automation agencies. Here&apos;s what makes us
              different.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-2xl p-6 lg:p-7"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/12 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ─────────────────────────────────────── */}
      <section className="py-16 bg-[#060a14]/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-7 lg:p-10"
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-violet-600/12 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Based in Ipswich. Serving the UK.
                </h3>
                <p className="text-violet-400 text-sm">Suffolk, England</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              We&apos;re proud to be an Ipswich-based business. Most of our
              work is done remotely, so we can serve businesses across the UK.
              but if you&apos;re in Suffolk or East Anglia and would prefer a
              face-to-face conversation, we&apos;re happy to meet in person.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Ipswich", "Colchester", "Bury St Edmunds", "Norwich", "Cambridge", "London"].map(
                (city) => (
                  <span
                    key={city}
                    className="flex items-center gap-1.5 text-sm text-slate-400"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    {city}
                  </span>
                )
              )}
            </div>
          </motion.div>
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
              Let&apos;s Automate{" "}
              <span className="gradient-text">Your Business</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Start with a free 30-minute workflow audit. We&apos;ll listen to
              what your business does, identify the highest-impact automation
              opportunities, and tell you honestly what&apos;s possible.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105"
            >
              Book a Free Workflow Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
