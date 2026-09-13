import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Stratomexa Business Consulting",
  description: "Privacy policy and client data confidentiality terms of Stratomexa Business Consulting Services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <div className="text-xs text-slate-500 font-medium">Last Updated: March 2026</div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            Stratomexa Business Consulting Services (&ldquo;Stratomexa&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to respecting the privacy and confidentiality of the personal and financial data shared by our clients, website visitors, and partners.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">1. Information We Collect</h2>
          <p>
            When you interact with our website or engage our consulting services, we may collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: Name, business email, phone/WhatsApp number, and corporate entity name.</li>
            <li>Financial & Tax records: Books of accounts, GSTIN, PAN, bank statements, and invoices necessary for accounting, compliance, and Zoho implementation.</li>
            <li>Technical data: IP address, browser type, and navigation paths via standard web logs.</li>
          </ul>

          <h2 className="text-base font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
          <p>
            Information collected is strictly utilized to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deliver accounting, bookkeeping, and statutory tax filing services.</li>
            <li>Configure, migrate, and support Zoho Books and integrated cloud software.</li>
            <li>Communicate critical tax deadlines, compliance notices, and management reports.</li>
            <li>Fulfill statutory mandates under Indian regulatory authorities (GST, MCA, ITD).</li>
          </ul>

          <h2 className="text-base font-bold text-slate-900 pt-2">3. Non-Disclosure & Confidentiality</h2>
          <p>
            We adhere to strict confidentiality protocols. We do not sell, rent, or trade client financial data to third parties. Access to client financial databases is restricted to authorized personnel who have signed legally binding Non-Disclosure Agreements (NDAs).
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">4. Third-Party Platforms (Zoho Ecosystem)</h2>
          <p>
            As an official Zoho Certified Partner, client accounts created through our partner links are hosted on Zoho Corporation&apos;s enterprise cloud servers (anchored to Indian data centers). Data stored in Zoho applications is governed by Zoho Corporation&apos;s independent Privacy & Security policies.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy, contact us at: <br />
            <strong>Email:</strong> stratomexa.ofc@gmail.com <br />
            <strong>Office:</strong> Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
          </p>
        </div>
      </div>
    </div>
  );
}
