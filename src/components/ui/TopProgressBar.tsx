"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);

  // Track route changes
  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Track page scroll
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Route Change Loading Flash Indicator */}
      {isNavigating && (
        <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent overflow-hidden pointer-events-none">
          <div className="h-full bg-gradient-to-r from-[#1ab394] via-[#c9a84c] to-[#e42527] animate-pulse w-full" />
        </div>
      )}

      {/* Page Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 z-50 h-[3px] bg-gradient-to-r from-[#c9a84c] to-[#1ab394] transition-all duration-150 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
    </>
  );
}
