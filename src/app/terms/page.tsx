import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Stratomexa Business Consulting",
  description: "Terms and conditions governing consulting and implementation services by Stratomexa Business Consulting Services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
        <h1 className="text-3xl font-extrabold text-slate-900">Terms of Service</h1>
        <div className="text-xs text-slate-500 font-medium">Last Updated: March 2026</div>

        <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
          <p>
            Welcome to Stratomexa Business Consulting Services (&ldquo;Stratomexa&rdquo;). By accessing our website or engaging our professional services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">1. Scope of Professional Services</h2>
          <p>
            Stratomexa provides business consulting, accounting, cloud software implementation (including Zoho Books), tax compliance (GST, TDS, MCA), and Virtual CFO advisory. The specific scope, fees, and timelines for each engagement are governed by a mutually executed Service Agreement or Engagement Letter.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">2. Client Responsibilities</h2>
          <p>
            Accurate accounting and statutory compliance require timely client collaboration. Clients are responsible for providing authentic, complete, and timely source vouchers, invoices, bank statements, and necessary statutory portal credentials. Stratomexa is not liable for statutory penalties resulting from client delays or inaccurate source records.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">3. Zoho Partner Role</h2>
          <p>
            Stratomexa is an authorized independent Zoho Certified Implementation Partner. We facilitate licensing, implementation, configuration, and user training. Subscription billing and software uptime for Zoho software products are subject to Zoho Corporation&apos;s master terms of service.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">4. Limitation of Liability</h2>
          <p>
            In no event shall Stratomexa, its partners, or employees be liable for indirect, incidental, or consequential damages resulting from the use or inability to use third-party software, delayed government portal servers (e.g. GSTN, MCA V3, Income Tax), or statutory revisions by legislative authorities.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">5. Governing Law & Jurisdiction</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms or our services shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana.
          </p>

          <h2 className="text-base font-bold text-slate-900 pt-2">6. Contact Information</h2>
          <p>
            For any contractual inquiries: <br />
            <strong>Email:</strong> stratomexa.ofc@gmail.com <br />
            <strong>Office:</strong> Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet, Hyderabad, Telangana – 500073
          </p>
        </div>
      </div>
    </div>
  );
}
