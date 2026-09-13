"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0e1e36] text-white border border-[#25d366]/40 text-xs px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
          <span>Chat with our Zoho Experts</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href="https://wa.me/917981395907?text=Hi%20Stratomexa%20Team%2C%20I%20would%20like%20to%20consult%20regarding%20your%20financial%20consulting%20and%20Zoho%20Books%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)]"
        aria-label="Chat on WhatsApp with Stratomexa"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25d366]/20 animate-pulse pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
}
