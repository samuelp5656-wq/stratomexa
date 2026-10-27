"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  CheckCircle2,
  BookOpen,
  Receipt,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";
import { ZohoLogo } from "@/components/logos/BrandLogos";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [zohoDropdown, setZohoDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
    setZohoDropdown(false);
  }, [pathname]);

  const serviceCategories = [
    {
      title: "Zoho Implementation",
      href: "/services/zoho-books-setup-training/",
      desc: "Setup, Tally migration & custom integration",
      icon: BookOpen,
      tag: "Certified",
    },
    {
      title: "Financial Accounting",
      href: "/services/financial-accounting-bookkeeping/",
      desc: "Daily bookkeeping, AP/AR & monthly closing",
      icon: Receipt,
      tag: "Core",
    },
    {
      title: "GST & Statutory Compliance",
      href: "/services/gst-tds-statutory-compliance/",
      desc: "GSTR-1, 3B, 2B ITC recovery & TDS returns",
      icon: ShieldCheck,
      tag: "Statutory",
    },
    {
      title: "Virtual CFO & Advisory",
      href: "/services/financial-advisory-consulting/",
      desc: "Cash flow modeling, due diligence & FP&A",
      icon: TrendingUp,
      tag: "Advisory",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-white border-b border-slate-200/80 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Zoho Partner Badge */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-base tracking-wider shadow-xs group-hover:bg-slate-800 transition-colors">
              <span>S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-extrabold text-sm sm:text-base tracking-tight leading-tight">
                STRATOMEXA
              </span>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  Partner with
                </span>
                <ZohoLogo size={16} className="text-slate-900" />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services/"
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {servicesDropdown && (
                <div className="absolute top-full left-0 w-84 pt-2 z-50">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-2.5 space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2.5 py-1">
                      Practice Areas
                    </div>
                    {serviceCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <Link
                          key={cat.title}
                          href={cat.href}
                          className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                              <span>{cat.title}</span>
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              {cat.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    <div className="pt-2 border-t border-slate-100 mt-1 px-2.5">
                      <Link
                        href="/services/"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center justify-between"
                      >
                        <span>View All 11 Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Zoho Ecosystem Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setZohoDropdown(true)}
              onMouseLeave={() => setZohoDropdown(false)}
            >
              <Link
                href="/zoho-products/"
                className={`flex items-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  pathname.startsWith("/zoho-products")
                    ? "text-slate-900 bg-slate-100"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <span>Zoho Suite</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {zohoDropdown && (
                <div className="absolute top-full left-0 w-84 pt-2 z-50">
                  <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3 space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                      Official Partner Suite
                    </div>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/80 border border-emerald-100 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/zoho-books.png")}
                          alt="Zoho Books"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Zoho Books
                        </div>
                        <div className="text-[11px] text-slate-500">
                          GST e-Invoicing &amp; Cloud Accounting
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50/80 border border-emerald-100 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/zoho-payroll.png")}
                          alt="Zoho Payroll"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Zoho Payroll
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Automated TDS &amp; Compliant Payroll
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/zoho-billing.png")}
                          alt="Zoho Billing"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                          Zoho Billing
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Recurring Subscriptions &amp; Retainers
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-orange-50/80 border border-orange-100 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/zoho-inventory.png")}
                          alt="Zoho Inventory"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                          Zoho Inventory
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Stock, Barcode &amp; Multi-Warehouse
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-50/80 border border-rose-100 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/zoho-expense.png")}
                          alt="Zoho Expense"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                          Zoho Expense
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Receipt AutoScan &amp; Mileage Claims
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/zoho-products/"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center p-1 shrink-0">
                        <Image
                          src={getAssetPath("/images/logos/all-zoho-products.png")}
                          alt="Zoho One"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                          Zoho One
                        </div>
                        <div className="text-[11px] text-slate-500">
                          All 45+ Integrated Business Apps
                        </div>
                      </div>
                    </Link>

                    <div className="pt-2 border-t border-slate-100 mt-1">
                      <Link
                        href="/pricing/"
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold transition-colors"
                      >
                        <span>Compare All Plans &amp; Editions</span>
                        <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pricing & Comparison Link */}
            <Link
              href="/pricing/"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                pathname.startsWith("/pricing")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span>Pricing</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-extrabold uppercase">
                New
              </span>
            </Link>

            {/* Direct Links */}
            <Link
              href="/process/"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                pathname.startsWith("/process")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              How We Work
            </Link>

            <Link
              href="/case-studies/"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                pathname.startsWith("/case-studies")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/about/"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                pathname.startsWith("/about")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              href="/blog/"
              className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                pathname.startsWith("/blog")
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              Insights
            </Link>
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7981395907"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>+91 7981395907</span>
            </a>

            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact/"
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold"
            >
              Consult
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1.5 max-h-[85vh] overflow-y-auto shadow-xl">
          <Link
            href="/services/"
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            All Services (11 Practice Areas)
          </Link>
          <Link
            href="/zoho-products/"
            className="block px-3 py-2 rounded-lg text-sm font-bold text-slate-900 hover:bg-slate-50"
          >
            Zoho Partner Hub &amp; Reseller Links
          </Link>
          <Link
            href="/pricing/"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100"
          >
            <span>Zoho Books Pricing &amp; Comparison</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-600 text-white font-extrabold uppercase">
              New
            </span>
          </Link>
          <Link
            href="/process/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            How We Work (4-Step Process)
          </Link>
          <Link
            href="/case-studies/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Case Studies
          </Link>
          <Link
            href="/about/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            About & Certifications
          </Link>
          <Link
            href="/blog/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Tax & Compliance Insights
          </Link>
          <Link
            href="/contact/"
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Contact & Office Location
          </Link>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href="tel:7981395907"
              className="flex items-center gap-2 text-xs font-bold text-slate-800 px-3 py-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Direct: +91 7981395907</span>
            </a>
            <a
              href="https://wa.me/917981395907"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2.5 rounded-lg bg-[#25d366] text-white font-bold text-xs shadow-xs"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
