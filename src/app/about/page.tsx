import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { getAssetPath } from "@/lib/assets";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  MapPin,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  Award,
} from "lucide-react";
import { ZohoLogo } from "@/components/logos/BrandLogos";

export const metadata: Metadata = {
  title: "About Us | Zoho Certified Partner & Leadership",
  description:
    "Learn about Stratomexa Business Consulting Services. Certified Zoho Implementation Partner (PI0626000) led by certified professionals Anil Kumar and Sheetal Jha in Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase">
            About Stratomexa
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Financial Architecture Engineered for Scale
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Headquartered in Hyderabad and serving clients across India, Stratomexa is an official Zoho Certified Partner firm specializing in cloud accounting, statutory compliance, and strategic financial advisory.
          </p>
        </div>

        {/* 1. Leadership Section with Photo */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-2">
              <div className="relative h-96 sm:h-[420px] rounded-xl overflow-hidden">
                <Image
                  src={getAssetPath("/images/sheetal-jha.jpeg")}
                  alt="Stratomexa Leadership - Sheetal Jha and Anil Kumar"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200">
                  <div className="text-sm font-bold text-slate-900">
                    Sheetal Jha & Anil Kumar
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5 font-medium">
                    Founders & Certified Zoho Implementation Leaders · Hyderabad HQ
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Our Operating Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Moving Beyond Retrospective Compliance to Real-Time Value
              </h2>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Traditional accounting practices focus strictly on filing tax returns long after transaction months have concluded. At Stratomexa, we believe scaling modern enterprises requires forward-looking financial discipline.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              By deploying integrated cloud platforms like Zoho Books, we empower founders and executive leadership teams with continuous visibility into operating margins, debtor days, and cash burn rate. Combining automation with deep regulatory knowledge, we give our clients complete peace of mind.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xl font-bold font-serif text-slate-900">100%</div>
                <div className="text-xs text-slate-600 font-medium">Statutory Compliance Focus</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="text-xl font-bold font-serif text-slate-900">Global Reach</div>
                <div className="text-xs text-slate-600 font-medium">India HQ &amp; Worldwide Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Official Certifications Card */}
        <section className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 space-y-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <ZohoLogo size={18} />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Certified Implementation Partner
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Official Zoho Accreditation
              </h3>
            </div>
            <div className="text-xs text-slate-600 font-medium">
              Partner Identification Number: <strong className="text-slate-900 font-mono text-sm">PI0626000</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Certificate Preview */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              <Image
                src={getAssetPath("/images/certificate.jpeg")}
                alt="Zoho Books Certified Professional Certificate - Anil Kumar"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <h4 className="text-base font-bold text-slate-900">
                Zoho Books Certified Professional (Certificate ID: 7VPY782YPH8BU)
              </h4>
              <p className="leading-relaxed text-slate-600">
                Awarded by <strong>Prashant Ganti</strong>, Head of Product Strategy & Global Alliances for the Zoho Finance Suite, certifying expert-level proficiency in system architecture, automated workflow configuration, and complex taxation setups.
              </p>
              <ul className="space-y-2 pt-1 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Authorized direct deployment and licensing partner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct channel liaison with Zoho technical engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complimentary onboarding audits for partner signups</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Core Values */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Integrity & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Core Commitments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="saas-card p-6 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs">
                01
              </div>
              <h4 className="text-base font-bold text-slate-900">Zero-Error Precision</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Multi-tier review mechanisms on every voucher, GST return, and bank reconciliation ensure books remain permanently audit-proof.
              </p>
            </div>

            <div className="saas-card p-6 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs">
                02
              </div>
              <h4 className="text-base font-bold text-slate-900">Proactive Communication</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated senior account managers accessible via direct WhatsApp and telephone, delivering weekly updates and monthly MIS packs.
              </p>
            </div>

            <div className="saas-card p-6 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono font-bold text-xs">
                03
              </div>
              <h4 className="text-base font-bold text-slate-900">Confidentiality & Security</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legally binding NDAs, role-based cloud permissions, and encrypted document storage protect client financial records.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Headquarters Callout */}
        <section className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-slate-500" />
              <span>Hyderabad Headquarters</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900">Sri Ramakrishna Towers, Ameerpet</h4>
            <p className="text-xs text-slate-600">
              Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
            </p>
          </div>

          <Link
            href="/contact/"
            className="px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs shrink-0 transition-colors"
          >
            Visit Our Office →
          </Link>
        </section>
      </div>
    </div>
  );
}
