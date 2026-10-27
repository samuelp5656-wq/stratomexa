import React from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/assets";

interface LogoProps {
  className?: string;
  size?: number;
}

// Official Modern Zoho 4-Loop Connected Logo
export function ZohoLogo({ className = "", size = 20 }: LogoProps) {
  return (
    <svg
      width={size * 2.28}
      height={size}
      viewBox="0 0 1024 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho"
    >
      <g>
        <g>
          {/* Green Ring */}
          <path
            fill="#089949"
            d="M458.1,353c-7.7,0-15.5-1.6-23-4.9l0,0l-160-71.3c-28.6-12.7-41.5-46.4-28.8-75l71.3-160 c12.7-28.6,46.4-41.5,75-28.8l160,71.3c28.6,12.7,41.5,46.4,28.8,75l-71.3,160C500.6,340.5,479.8,353,458.1,353z M448.4,318.1 c12.1,5.4,26.3-0.1,31.7-12.1l71.3-160c5.4-12.1-0.1-26.3-12.1-31.7L379.2,43c-12.1-5.4-26.3,0.1-31.7,12.1l-71.3,160 c-5.4,12.1,0.1,26.3,12.1,31.7L448.4,318.1z"
          />
          {/* Yellow/Amber Ring */}
          <path
            fill="#F9B21D"
            d="M960,353.1H784.8c-31.3,0-56.8-25.5-56.8-56.8V121.1c0-31.3,25.5-56.8,56.8-56.8H960 c31.3,0,56.8,25.5,56.8,56.8v175.2C1016.8,327.6,991.3,353.1,960,353.1z M784.8,97.1c-13.2,0-24,10.8-24,24v175.2 c0,13.2,10.8,24,24,24H960c13.2,0,24-10.8,24-24V121.1c0-13.2-10.8-24-24-24H784.8z"
          />
          {/* Red Ring */}
          <path
            fill="#E42527"
            d="M303.9,153.2L280.3,206c-0.3,0.6-0.6,1.1-0.9,1.6l9.2,56.8c2.1,13.1-6.8,25.4-19.8,27.5l-173,28 c-6.3,1-12.7-0.5-17.9-4.2c-5.2-3.7-8.6-9.3-9.6-15.6l-28-173c-1-6.3,0.5-12.7,4.2-17.9c3.7-5.2,9.3-8.6,15.6-9.6l173-28 c1.3-0.2,2.6-0.3,3.8-0.3c11.5,0,21.8,8.4,23.7,20.2l9.3,57.2L294.3,94l-1.3-7.7c-5-30.9-34.2-52-65.1-47l-173,28 C40,69.6,26.8,77.7,18,90c-8.9,12.3-12.4,27.3-10,42.3l28,173c2.4,15,10.5,28.1,22.8,37C68.5,349.4,80,353,91.9,353 c3,0,6.1-0.2,9.2-0.7l173-28c30.9-5,52-34.2,47-65.1L303.9,153.2z"
          />
          {/* Blue Ring */}
          <path
            fill="#226DB4"
            d="M511.4,235.8l25.4-56.9l-7.2-52.9c-0.9-6.3,0.8-12.6,4.7-17.7c3.9-5.1,9.5-8.4,15.9-9.2l173.6-23.6 c1.1-0.1,2.2-0.2,3.3-0.2c5.2,0,10.2,1.7,14.5,4.9c0.8,0.6,1.5,1.3,2.2,1.9c7.7-8.1,17.8-13.9,29.1-16.4 c-3.2-4.4-7-8.3-11.5-11.7c-12.1-9.2-27-13.1-42-11.1L545.6,66.5c-15,2-28.4,9.8-37.5,21.9c-9.2,12.1-13.1,27-11.1,42 L511.4,235.8z"
          />
          <path
            fill="#226DB4"
            d="M806.8,265.1l-22.8-168c-12.8,0.4-23.1,11-23.1,23.9v49.3l13.5,99.2c0.9,6.3-0.8,12.6-4.7,17.7 s-9.5,8.4-15.9,9.2l-173.6,23.6c-6.3,0.9-12.6-0.8-17.7-4.7c-5.1-3.9-8.4-9.5-9.2-15.9l-8-58.9l-25.4,56.9l0.9,6.4 c2,15,9.8,28.4,21.9,37.5c10,7.6,21.9,11.6,34.3,11.6c2.6,0,5.2-0.2,7.8-0.5L758.2,329c15-2,28.4-9.8,37.5-21.9 C804.9,295,808.8,280.1,806.8,265.1z"
          />
        </g>
        {/* ZOHO Typography */}
        <g fill="currentColor">
          <path d="M317,436.2l24.8-36.6h-20.4c-1.1,0-2-0.9-2-2v-4.9c0-1.1,0.9-2,2-2h33.5c1.1,0,2,0.9,2,2v1.9c0,0.4-0.1,0.8-0.3,1.1 l-24.3,36.6h21.8c1.1,0,2,0.9,2,2v4.9c0,1.1-0.9,2-2,2h-35.4c-1.1,0-2-0.9-2-2v-1.8C316.6,436.9,316.8,436.5,317,436.2z" />
          <path d="M421.4,415.6c0-15,11-25.8,26-25.8c15.5,0,26,10.6,26,25.9c0,15.5-10.7,26.2-26.2,26.2 C431.6,441.9,421.4,431.2,421.4,415.6z M461.5,415.8c0-9.1-4.4-16.9-14.3-16.9c-10,0-13.8,8.1-13.8,17.3c0,8.7,4.7,16.7,14.3,16.7 C457.6,432.8,461.5,424.3,461.5,415.8z" />
          <path d="M544.5,390.6h7.4c1.1,0,2,0.9,2,2v18.6h21v-18.6c0-1.1,0.9-2,2-2h7.4c1.1,0,2,0.9,2,2v46.5c0,1.1-0.9,2-2,2H577 c-1.1,0-2-0.9-2-2v-18.8h-21v18.8c0,1.1-0.9,2-2,2h-7.4c-1.1,0-2-0.9-2-2v-46.5C542.5,391.5,543.4,390.6,544.5,390.6z" />
          <path d="M655.4,415.6c0-15,11-25.8,26-25.8c15.5,0,26,10.6,26,25.9c0,15.5-10.7,26.2-26.2,26.2 C665.6,441.9,655.4,431.2,655.4,415.6z M695.4,415.8c0-9.1-4.4-16.9-14.3-16.9c-10,0-13.8,8.1-13.8,17.3c0,8.7,4.7,16.7,14.3,16.7 C691.5,432.8,695.4,424.3,695.4,415.8z" />
        </g>
      </g>
    </svg>
  );
}

// Official Zoho Books Logo (Red Accounting Icon)
export function ZohoBooksLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho Books"
    >
      <rect width="36" height="36" rx="8" fill="#E42527" />
      <path
        d="M9 10C9 8.89543 9.89543 8 11 8H25C26.1046 8 27 8.89543 27 10V26C27 27.1046 26.1046 28 25 28H11C9.89543 28 9 27.1046 9 26V10Z"
        fill="white"
        fillOpacity="0.15"
      />
      <path
        d="M10 11H24C25.1046 11 26 11.8954 26 13V25C26 26.1046 25.1046 27 24 27H10C8.89543 27 8 26.1046 8 25V13C8 11.8954 8.89543 11 10 11Z"
        stroke="white"
        strokeWidth="2.2"
        fill="none"
      />
      <line x1="12" y1="16" x2="22" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="20" x2="20" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 9V27" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// Official Zoho Payroll Logo (Teal / Blue HR Icon)
export function ZohoPayrollLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho Payroll"
    >
      <rect width="36" height="36" rx="8" fill="#00A389" />
      <circle cx="18" cy="13" r="4.5" fill="white" />
      <path
        d="M9 25C9 21.6863 12.134 19 16 19H20C23.866 19 27 21.6863 27 25V26H9V25Z"
        fill="white"
        fillOpacity="0.3"
      />
      <path
        d="M10 26C10 22.5 13 20 18 20C23 20 26 22.5 26 26"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="25" cy="11" r="3.5" fill="#F4B400" stroke="#00A389" strokeWidth="1.5" />
      <path d="M25 9.5V12.5M23.5 11H26.5" stroke="#065F46" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// Official Zoho CRM Logo (Blue Sales Icon)
export function ZohoCrmLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho CRM"
    >
      <rect width="36" height="36" rx="8" fill="#0070E0" />
      <path
        d="M18 9L27 15V24L18 30L9 24V15L18 9Z"
        stroke="white"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="white"
        fillOpacity="0.2"
      />
      <circle cx="18" cy="19.5" r="4" fill="white" />
    </svg>
  );
}

// Official Zoho Inventory Logo (Purple Logistics & Stock Icon)
export function ZohoInventoryLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho Inventory"
    >
      <rect width="36" height="36" rx="8" fill="#6B46C1" />
      <path
        d="M18 8L28 13.5V23.5L18 29L8 23.5V13.5L18 8Z"
        stroke="white"
        strokeWidth="2"
        fill="white"
        fillOpacity="0.2"
      />
      <path d="M18 8V29M8 13.5L28 23.5M28 13.5L8 23.5" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

// Official Zoho Billing Logo (Indigo Subscription & Invoicing Icon)
export function ZohoBillingLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho Billing"
    >
      <rect width="36" height="36" rx="8" fill="#3B82F6" />
      <rect x="8" y="10" width="20" height="16" rx="3" stroke="white" strokeWidth="2.2" fill="none" />
      <line x1="8" y1="15" x2="28" y2="15" stroke="white" strokeWidth="2.2" />
      <circle cx="13" cy="20" r="1.5" fill="white" />
      <path d="M18 20H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Official Zoho Analytics Logo (Yellow / Orange Chart Icon)
export function ZohoAnalyticsLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho Analytics"
    >
      <rect width="36" height="36" rx="8" fill="#F59E0B" />
      <rect x="9" y="19" width="4" height="9" rx="1" fill="white" />
      <rect x="16" y="13" width="4" height="15" rx="1" fill="white" />
      <rect x="23" y="8" width="4" height="20" rx="1" fill="white" />
      <path
        d="M10 15L17 9L24 6"
        stroke="#1E293B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Official Zoho One Emblem
export function ZohoOneLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho One"
    >
      <rect width="36" height="36" rx="8" fill="#0F172A" />
      <circle cx="18" cy="18" r="12" stroke="#E42527" strokeWidth="2.5" />
      <path
        d="M16 12H19V24H16M19 12L15 15"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="10" r="3" fill="#009944" />
      <circle cx="8" cy="26" r="3" fill="#0070E0" />
      <circle cx="28" cy="26" r="3" fill="#F4B400" />
    </svg>
  );
}

// Official Modern TallyPrime 3-Block Icon (Pure symbol without names)
export function TallyPrimeLogo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-xl overflow-hidden shrink-0 shadow-2xs ${className}`}
      aria-label="Tally Prime Icon"
    >
      <defs>
        <clipPath id="tally-box-clip">
          <rect width="100" height="100" rx="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#tally-box-clip)">
        {/* Top half: Dark Navy Blue */}
        <rect x="0" y="0" width="100" height="50" fill="#004D8C" />
        {/* Bottom-left: Amber/Golden Yellow */}
        <rect x="0" y="50" width="50" height="50" fill="#ECA214" />
        {/* Bottom-right: Medium Cyan/Teal Blue */}
        <rect x="50" y="50" width="50" height="50" fill="#2980B9" />
      </g>
    </svg>
  );
}

// Official Microsoft Excel Icon (Pure symbol without names)
export function ExcelLogo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-xl overflow-hidden shrink-0 shadow-2xs ${className}`}
      aria-label="Microsoft Excel Icon"
    >
      <rect width="36" height="36" rx="8" fill="#107C41" />
      <path d="M7 10L18 7V29L7 26V10Z" fill="#0E5C2F" />
      <path d="M18 9H29V27H18V9Z" fill="#33C481" fillOpacity="0.45" />
      <path
        d="M10.5 15L15 21M15 15L10.5 21"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="18" y="9" width="11" height="18" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="15" x2="29" y2="15" stroke="white" strokeWidth="1.2" />
      <line x1="18" y1="21" x2="29" y2="21" stroke="white" strokeWidth="1.2" />
      <line x1="23.5" y1="9" x2="23.5" y2="27" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

// Official Intuit QuickBooks 'qb' Icon (Pure symbol without names)
export function QuickBooksLogo({ className = "", size = 48 }: LogoProps) {
  return (
    <div
      className={`relative rounded-full overflow-hidden shrink-0 shadow-2xs ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={getAssetPath("/images/logos/qb-uploaded.png")}
        alt="QuickBooks Icon"
        fill
        className="object-contain"
      />
    </div>
  );
}

// Official SAP Icon (Prismatic Trapezoid & Symbol)
export function SapLogo({ className = "", size = 48 }: LogoProps) {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 412.38 204"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-lg overflow-hidden shrink-0 shadow-2xs ${className}`}
      aria-label="SAP Icon"
    >
      <defs>
        <linearGradient id="sap-pure-grad" x1="206.19" y1="0" x2="206.19" y2="204" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#00b1eb" />
          <stop offset="0.212" stopColor="#009ad9" />
          <stop offset="0.519" stopColor="#007fc4" />
          <stop offset="0.792" stopColor="#006eb8" />
          <stop offset="1" stopColor="#0069b4" />
        </linearGradient>
      </defs>
      <polyline points="0 204 208.413 204 412.38 0 0 0 0 204" fill="url(#sap-pure-grad)" />
      <path
        fill="#FFFFFF"
        d="m244.727,38.359l-40.593-.025v96.518l-35.46-96.518h-35.16l-30.277,80.716c-3.224-20.352-24.277-27.38-40.84-32.649-10.937-3.512-22.541-8.678-22.434-14.387.091-4.687,6.225-9.04,18.377-8.385,8.17.433,15.373,1.092,29.71,8.006l14.102-24.557c-13.088-6.658-31.169-10.867-45.985-10.883h-.086c-17.277,0-31.677,5.598-40.602,14.824-6.221,6.443-9.572,14.626-9.712,23.679-.227,12.454,4.341,21.292,13.938,28.338,8.104,5.944,18.468,9.794,27.603,12.626,11.27,3.492,20.467,6.526,20.36,13.002-.083,2.355-.977,4.552-2.671,6.337-2.807,2.897-7.124,3.986-13.084,4.098-11.497.243-20.026-1.559-33.61-9.585l-12.536,24.903c13.546,7.705,29.586,12.223,45.952,12.223l2.106-.024c14.247-.256,25.745-4.316,34.929-11.712.527-.416,1.001-.845,1.488-1.277l-4.073,10.874h36.875l6.189-18.822c6.477,2.214,13.847,3.437,21.676,3.437,7.618,0,14.795-1.17,21.156-3.252l5.965,18.637h60.137v-38.969h13.113c31.706,0,50.456-16.147,50.456-43.202,0-30.139-18.219-43.969-57.011-43.969Zm-93.816,82.587c-4.737,0-9.177-.828-13.006-2.275l12.866-40.593h.244l12.643,40.708c-3.801,1.349-8.138,2.16-12.746,2.16Zm96.199-23.324h-8.941v-32.711h8.941c11.927,0,21.437,3.961,21.437,16.139,0,12.602-9.51,16.572-21.437,16.572"
      />
    </svg>
  );
}


