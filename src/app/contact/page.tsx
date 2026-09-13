"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ZohoLogo } from "@/components/logos/BrandLogos";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(10, "Please enter a valid 10-digit phone number"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Please briefly describe your requirement"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Zoho Books Setup & Training",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      // Form submission
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_OR_FALLBACK",
          subject: `New Stratomexa Lead: ${data.name} (${data.service})`,
          ...data,
        }),
      });

      setSubmitted(true);
      reset();
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Schedule a Strategy Consultation
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Have questions regarding Zoho Books implementation, GST/TDS compliance, or Virtual CFO services? Connect directly with our senior practice team.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Headquarters & Contacts
                </span>
                <h2 className="text-xl font-bold text-slate-900">Direct Communication</h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Telephone / WhatsApp</div>
                    <a
                      href="tel:7981395907"
                      className="text-blue-600 hover:underline font-semibold mt-0.5 block"
                    >
                      +91 7981395907
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Practice Email</div>
                    <a
                      href="mailto:stratomexa.ofc@gmail.com"
                      className="text-slate-700 hover:text-slate-900 font-medium mt-0.5 block"
                    >
                      stratomexa.ofc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Hyderabad Office</div>
                    <div className="text-slate-600 mt-0.5 leading-relaxed text-xs">
                      Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Working Hours</div>
                    <div className="text-slate-600 mt-0.5 text-xs">
                      Monday – Saturday: 9:00 AM – 6:00 PM IST
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp link */}
              <a
                href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25d366] text-white font-bold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-xs"
              >
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="saas-card p-8 sm:p-10 space-y-6">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">Send an Inquiry</h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill out the form below. A senior practice consultant will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900">Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you. A senior Stratomexa consultant will review your message and contact you promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-600 hover:underline font-bold pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="10-digit number"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone.message}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="work@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-0.5">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Practice Area *
                    </label>
                    <select
                      {...register("service")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                    >
                      {servicesData.map((s) => (
                        <option key={s.slug} value={s.shortTitle}>
                          {s.shortTitle}
                        </option>
                      ))}
                      <option value="General Financial Advisory">
                        General Financial Advisory & Other
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      Message / Requirement Details *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your current accounting software, upcoming deadlines, or transaction volume..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-600 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Submit Consultation Request →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Office Map */}
        <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-bold text-slate-900">Hyderabad Office Location</h3>
              <p className="text-xs text-slate-600">
                Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Ramakrishna+Towers+Ameerpet+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:underline font-bold"
            >
              Open in Google Maps ↗
            </a>
          </div>

          <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="Stratomexa Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4950920499645!2d78.44465497516606!3d17.436029883459958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90ca9a81f33f%3A0xe54490f22ff37c02!2sSanjeeva%20Reddy%20Nagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
