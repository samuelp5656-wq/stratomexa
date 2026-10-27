import React from "react";
import Link from "next/link";
import Image from "next/image";
import ParticleCanvas from "@/components/hero/ParticleCanvas";
import FloatingLogoBubbles from "@/components/hero/FloatingLogoBubbles";
import SoftwareMigrationShowcase from "@/components/migration/SoftwareMigrationShowcase";
import { getAssetPath } from "@/lib/assets";
import {
  ZohoLogo,
  ZohoBooksLogo,
  ZohoPayrollLogo,
  ZohoCrmLogo,
  ZohoInventoryLogo,
  ZohoBillingLogo,
  ZohoAnalyticsLogo,
  ZohoOneLogo,
} from "@/components/logos/BrandLogos";
import { servicesData } from "@/data/services";
import { zohoProducts } from "@/data/zoho-products";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  PhoneCall,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Clock,
  Mail,
  Zap,
} from "lucide-react";

export default function HomePage() {
  // Show 6 featured services on home, with clean link to all 11 on /services
  const featuredServices = servicesData.slice(0, 6);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (ZOHO & ZAPIER STYLE WITH INTERACTIVE MOUSE PARTICLES) */}
      <section className="min-h-[85vh] flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-white border-b border-slate-200">
        {/* Interactive Mouse Particle Canvas tuned for light SaaS backdrop */}
        <ParticleCanvas theme="light" />

        {/* Subtle Ambient Radial Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge (Zapier style) */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Zoho Certified Implementation Partner — Global &amp; India HQ</span>
              </div>

              {/* Headline (Zoho & Zapier style) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Simplify Your Finances. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
                  Grow Your Business.
                </span>
              </h1>

              {/* Subhead */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Official Zoho Certified Partner providing end-to-end accounting setup, Tally-to-Zoho migration, GST statutory compliance, and Virtual CFO advisory for high-growth Indian enterprises.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
                <a
                  href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20would%20like%20to%20book%20a%2015%20mins%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2.5"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Book 15 Mins Call</span>
                </a>

                <Link
                  href="/services/"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-2xs hover:border-slate-400 transition-all flex items-center gap-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </Link>
              </div>

              {/* Social Proof & Trust Metrics */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Partner ID: PI0626000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Global Remote &amp; On-Site</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Audit & GST Hygiene</span>
                </div>
              </div>
            </div>

            {/* Right Side Visual: Simple floating logo bubble animations (Zapier & Zoho style) */}
            <div className="lg:col-span-5 flex items-center justify-center pt-6 lg:pt-0">
              <FloatingLogoBubbles />
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRAIGHT FROM ZOHO HQ (OFFICIAL PARTNER PHOTO SECTION) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#f8f6f1] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="md:col-span-4 flex justify-center">
              <div className="relative w-52 h-64 sm:w-60 sm:h-72 rounded-xl overflow-hidden border-2 border-white shadow-lg shrink-0">
                <Image
                  src={getAssetPath("/images/partner-photo.jpg")}
                  alt="Anil Kumar Suvarapu with K P Narayanan, VP Global Alliances - Zoho ERP"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1ab394]/10 text-[#0e8b72] border border-[#1ab394]/20 text-xs font-bold uppercase tracking-wider">
                Straight From Zoho HQ
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0a1628] leading-snug">
                Anil Kumar Suvarapu with K P Narayanan, VP – Global Alliances, Zoho ERP
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Anil Kumar Suvarapu (Founder &amp; Finance Transformation Consultant, Stratomexa Business Consulting Services — ZOHO Books Certified Professional), connecting directly with Zoho&apos;s executive leadership — reflecting Stratomexa&apos;s close working relationship with Zoho as an official Certified Implementation Partner.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <div className="text-xs font-bold text-slate-700">Partner Verification ID: PI0626000</div>
                <span className="text-slate-300">·</span>
                <Link href="/about/" className="text-xs font-bold text-blue-600 hover:underline">
                  View Full Credentials &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SOFTWARE MIGRATION SHOWCASE (CLICK TO SEE ANIMATED FLOW TO ZOHO BOOKS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SoftwareMigrationShowcase />
      </section>

      {/* 4. SERVICES OVERVIEW (CLEAN LIGHT GRID) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6f1] border-y border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0e8b72]">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Our Professional Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From Zoho Books setup to complex regulatory compliance — we cover every financial need of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="saas-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#c9a84c]">
                      {service.orderNumber}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0a1628] hover:text-blue-600 transition-colors">
                    <Link href={`/services/${service.slug}/`}>{service.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <Link href={`/services/${service.slug}/`} className="flex items-center gap-1">
                    <span>View Service Scope</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0a1628] hover:bg-[#122040] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <span>Explore All 11 Services</span>
              <ArrowRight className="w-4 h-4 text-[#c9a84c]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (DARK NAVY SECTION AS IN ORIGINAL SITE) */}
      <section className="py-20 bg-[#0a1628] text-white px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                  Your Finances. Our Expertise. <br />
                  <span className="text-[#c9a84c] font-serif italic">Your Growth.</span>
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We don&apos;t just file returns — we build financial systems that help your business grow.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Zoho Certified Partner</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Official Zoho partner — you get expert-level implementation, not basic support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#1ab394]/20 text-[#1ab394] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Global &amp; Pan-India Reach</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Headquartered in Hyderabad, serving clients across India, UAE, US, UK &amp; globally.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">End-to-End Support</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      From bookkeeping to regulatory compliance — one partner for everything.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#1ab394]/20 text-[#1ab394] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">SME &amp; Startup Focused</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      We understand the unique challenges of growing businesses in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Zoho Implementation Partner Visual Badge */}
            <div className="lg:col-span-5">
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 space-y-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/15 text-[#c9a84c] flex items-center justify-center mx-auto text-2xl font-bold">
                  ★
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#c9a84c] font-serif">
                    Zoho Implementation Partner
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    India HQ &amp; Global Remote Consultation
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["Zoho Books", "Zoho CRM", "Zoho Inventory", "Zoho Payroll", "Zoho Analytics", "Zoho One"].map((app) => (
                    <div
                      key={app}
                      className="p-2.5 rounded-lg bg-[#1ab394]/10 border border-[#1ab394]/20 text-slate-200"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 4-STEP PROCESS (HOW WE WORK) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0e8b72]">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
            Simple 4-Step Process
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We make getting started easy and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              num: "1",
              title: "Free Consultation",
              desc: "30-minute call to understand your business needs and current challenges.",
            },
            {
              num: "2",
              title: "Assessment",
              desc: "We review your current financial setup and identify gaps and opportunities.",
            },
            {
              num: "3",
              title: "Implementation",
              desc: "We set up Zoho Books and build your complete financial system.",
            },
            {
              num: "4",
              title: "Ongoing Support",
              desc: "Monthly accounting, compliance filing, and continuous financial guidance.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="text-center p-6 rounded-xl bg-[#f8f6f1] border border-slate-200 space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a1628] text-[#c9a84c] flex items-center justify-center font-serif font-bold text-lg mx-auto">
                {item.num}
              </div>
              <h4 className="text-base font-bold text-[#0a1628]">{item.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ZOHO PARTNER PORTAL (OFFICIAL SIGNUP WITH RESELLER LINKS) */}
      <section className="py-20 bg-[#0a1628] text-white px-4 sm:px-6 lg:px-8" id="signup">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              Zoho Partner Portal
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Get Started with Zoho
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Sign up for any Zoho product through our official partner links. As a certified Zoho partner, we&apos;ll support your onboarding every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {zohoProducts.map((p) => (
              <a
                key={p.id}
                href={p.signupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#1ab394] hover:bg-white/[0.08] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-white/20 flex items-center justify-center shrink-0 p-2 shadow-xs">
                    <Image
                      src={getAssetPath(p.logoImg)}
                      alt={p.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#1ab394] transition-colors">
                      {p.name}
                    </div>
                    <div className="text-xs text-slate-400">{p.shortDesc}</div>
                  </div>
                </div>
                <span className="text-lg text-[#1ab394] group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            ))}
          </div>

          <div className="text-center pt-4 space-y-2">
            <a
              href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20need%20help%20choosing%20the%20right%20Zoho%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex"
            >
              Need Help Choosing? WhatsApp Us
            </a>
            <p className="text-xs text-slate-400">
              Partner ID: PI0626000 &bull; Zoho Certified Partner &bull; IN Data Centre
            </p>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (OFFICE DETAILS & LEAD FORM) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f8f6f1] border-t border-slate-200" id="contact">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0e8b72]">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628]">
              Book 15 Mins Call
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Talk to our certified specialists about your finances or Zoho migration — no obligation, completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a1628] text-white flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a1628]">Phone / WhatsApp</div>
                  <a href="tel:7981395907" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
                    +91 7981395907
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a1628] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a1628]">Email</div>
                  <a href="mailto:stratomexa.ofc@gmail.com" className="text-sm font-semibold text-slate-700 hover:text-blue-600">
                    stratomexa.ofc@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a1628] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a1628]">Office Address</div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#0a1628] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#1ab394]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0a1628]">Working Hours</div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mon – Sat: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20would%20like%20to%20consult%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center justify-center"
              >
                WhatsApp Us Now
              </a>
            </div>

            {/* Right: Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#0a1628]">Send us a message</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#c9a84c]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Your WhatsApp number"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#c9a84c]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Service Needed</label>
                  <select className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#c9a84c]">
                    <option>Accounting Software Migration to Zoho Books</option>
                    <option>Zoho Books Setup &amp; Training</option>
                    <option>GST, TDS &amp; Compliance</option>
                    <option>Financial Accounting &amp; Bookkeeping</option>
                    <option>Startup &amp; Growth Advisory</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your business needs..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-[#c9a84c] resize-none"
                  />
                </div>
                <Link
                  href="/contact/"
                  className="w-full py-3 rounded-lg bg-[#0a1628] hover:bg-[#c9a84c] hover:text-[#0a1628] text-white font-bold text-xs uppercase tracking-wider transition-colors inline-block text-center"
                >
                  Send Message &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
