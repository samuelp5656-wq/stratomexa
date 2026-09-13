import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0a1628] text-[#c9a84c] flex items-center justify-center font-serif text-2xl font-bold">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#0a1628]">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0a1628] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#122040] transition-colors"
          >
            <Home className="w-4 h-4 text-[#c9a84c]" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:border-[#c9a84c] transition-colors"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
