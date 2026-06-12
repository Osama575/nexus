"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Phone,
  Zap,
  Send,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "darl@nexuslineai.com",
    href: "mailto:darl@nexuslineai.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ipswich, Suffolk, UK",
    href: null,
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    href: null,
  },
];

const auditBenefits = [
  "Identify your highest-impact automation opportunities",
  "Get a clear picture of build time and cost",
  "No obligation and no hard sell. Just an honest conversation",
  "Walk away with actionable insights even if you don't proceed",
];

export default function ContactContent() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission — replace with your API endpoint or email service
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 bg-grid-pattern">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-600/10 border border-violet-600/20 text-violet-400 text-xs font-medium mb-5">
              <Zap className="w-3 h-3" />
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
              Let&apos;s Automate{" "}
              <span className="gradient-text">Your Business</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Book a free 30-minute workflow audit or send us a message. We
              respond within 24 hours and we&apos;re always happy to talk
              through what&apos;s possible for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* ── Contact Form ── */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-slate-400 text-sm mb-7">
                  Fill in the form and we&apos;ll get back to you within 24
                  hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="card-gradient rounded-2xl p-8 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Message received!
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Thanks for getting in touch. We&apos;ll respond within 24
                      hours. In the meantime, feel free to explore our{" "}
                      <a
                        href="/services"
                        className="text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        services
                      </a>{" "}
                      or{" "}
                      <a
                        href="/case-studies"
                        className="text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        case studies
                      </a>
                      .
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Full Name{" "}
                          <span className="text-violet-400">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Email Address{" "}
                          <span className="text-violet-400">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.co.uk"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    {/* Company + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Ltd"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-300 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+44 7700 900000"
                          className="input-field w-full px-4 py-3 rounded-xl text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 mb-2"
                      >
                        What would you like to automate?{" "}
                        <span className="text-violet-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the manual processes in your business that take up the most time: invoice processing, data entry, lead follow-up, reporting, etc."
                        className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 shadow-lg shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-500">
                      We respond within 24 hours. Your details are never shared
                      with third parties.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>

            {/* ── Sidebar ── */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {/* Contact details */}
                <div className="card-gradient rounded-2xl p-6 mb-5">
                  <h3 className="font-bold text-white mb-4">
                    Contact Details
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-violet-600/12 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-4 h-4 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-slate-200 hover:text-violet-400 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-slate-200">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Calendar booking */}
                <div className="card-gradient rounded-2xl p-6 mb-5 border-violet-600/25">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/12 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="font-bold text-white text-sm">
                      Book a Free 30-Min Audit
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    Prefer to book a call directly? Use the link below to
                    choose a time that works for you, with no back-and-forth
                    needed.
                  </p>
                  {/* Replace this href with your Calendly link */}
                  <a
                    href="https://calendly.com/nexuslineai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl text-sm font-semibold bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 transition-all duration-200 hover:scale-105"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule on Calendly
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* What to expect */}
                <div className="card-gradient rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/12 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-violet-400" />
                    </div>
                    <h3 className="font-bold text-white text-sm">
                      What to Expect on the Audit Call
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {auditBenefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reassurance strip ────────────────────────────── */}
      <section className="py-12 bg-[#060a14]/60 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { icon: Clock, text: "24-hour response" },
              { icon: CheckCircle2, text: "No obligation" },
              { icon: MapPin, text: "Ipswich based" },
              { icon: Zap, text: "Live in 2–4 weeks" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center gap-2"
              >
                <item.icon className="w-5 h-5 text-violet-400" />
                <p className="text-sm text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
