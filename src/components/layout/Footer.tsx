import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ZohoLogo } from "@/components/logos/BrandLogos";
import { servicesData } from "@/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1 & 2: Brand, Credential Box */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="text-slate-900 font-extrabold text-base tracking-tight">
                STRATOMEXA
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Official Zoho Certified Implementation Partner firm based in Hyderabad. Providing cloud accounting, GST/TDS compliance, and Virtual CFO advisory for fast-growing companies across India.
            </p>

            {/* Official Partner Badge Box */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs max-w-sm space-y-2">
              <div className="flex items-center justify-between">
                <ZohoLogo size={18} />
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Certified Partner
                </span>
              </div>
              <div className="text-xs text-slate-600 flex items-center justify-between pt-1">
                <span>Partner ID: <strong className="text-slate-900 font-mono">PI0626000</strong></span>
                <span className="text-slate-500">IN Data Centre</span>
              </div>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-slate-600 hover:text-slate-900 transition-colors line-clamp-1"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services/"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  View All 11 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Company */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Company & Zoho
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About Leadership & Team
                </Link>
              </li>
              <li>
                <Link href="/process/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  How We Work (4-Step)
                </Link>
              </li>
              <li>
                <Link href="/zoho-products/" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">
                  Zoho Partner Portal
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="text-emerald-700 hover:text-emerald-800 transition-colors font-bold flex items-center gap-1.5">
                  <span>Zoho Books Pricing &amp; Plans</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 uppercase">
                    Compare
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Tax & Zoho Insights
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Office & Contact */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-4">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:7981395907" className="hover:text-slate-900 transition-colors font-semibold">
                  +91 7981395907
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:stratomexa.ofc@gmail.com" className="hover:text-slate-900 transition-colors">
                  stratomexa.ofc@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Stratomexa Business Consulting Services. All rights reserved.
          </div>
          <div className="text-slate-500 font-medium">
            Financial systems engineered for sustainable enterprise growth.
          </div>
        </div>
      </div>
    </footer>
  );
}
