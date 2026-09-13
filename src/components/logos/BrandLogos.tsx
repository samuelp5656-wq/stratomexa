import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

// Official Zoho 4-Color Block Logo
export function ZohoLogo({ className = "", size = 28 }: LogoProps) {
  return (
    <svg
      width={size * 3.4}
      height={size}
      viewBox="0 0 120 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Zoho"
    >
      {/* Red Block - Z */}
      <rect x="0" y="2" width="28" height="28" rx="6" fill="#E42527" />
      <path
        d="M8 9H20L10 23H20"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Green Block - O */}
      <rect x="30" y="2" width="28" height="28" rx="6" fill="#009944" />
      <circle cx="44" cy="16" r="7" stroke="white" strokeWidth="3" fill="none" />

      {/* Blue Block - H */}
      <rect x="60" y="2" width="28" height="28" rx="6" fill="#0070E0" />
      <path
        d="M68 9V23M76 9V23M68 16H76"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Yellow Block - O */}
      <rect x="90" y="2" width="28" height="28" rx="6" fill="#F4B400" />
      <circle cx="104" cy="16" r="7" stroke="white" strokeWidth="3" fill="none" />
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

// Official Tally Prime Logo
export function TallyPrimeLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Tally Prime"
    >
      <rect width="36" height="36" rx="8" fill="#002D62" />
      <circle cx="18" cy="18" r="11" fill="#FF8200" />
      <path
        d="M13 13H23V17H19.5V25H16.5V17H13V13Z"
        fill="white"
      />
      <circle cx="24" cy="13" r="2.5" fill="#00A3E0" />
    </svg>
  );
}

// Official Microsoft Excel Logo
export function ExcelLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Microsoft Excel"
    >
      <rect width="36" height="36" rx="8" fill="#107C41" />
      <path
        d="M9 11L18 8V28L9 25V11Z"
        fill="#0E5C2F"
      />
      <path
        d="M18 10H27V26H18V10Z"
        fill="#33C481"
        fillOpacity="0.4"
      />
      <path
        d="M12 15L16 21M16 15L12 21"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="18" y="10" width="9" height="16" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="18" y1="15" x2="27" y2="15" stroke="white" strokeWidth="1" />
      <line x1="18" y1="21" x2="27" y2="21" stroke="white" strokeWidth="1" />
      <line x1="22.5" y1="10" x2="22.5" y2="26" stroke="white" strokeWidth="1" />
    </svg>
  );
}

// Official QuickBooks Logo
export function QuickBooksLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Intuit QuickBooks"
    >
      <rect width="36" height="36" rx="8" fill="#2CA01C" />
      <circle cx="18" cy="18" r="11" fill="white" />
      <path
        d="M13 14V22C13 23.6569 14.3431 25 16 25C17.6569 25 19 23.6569 19 22V19H17V22C17 22.5523 16.5523 23 16 23C15.4477 23 15 22.5523 15 22V14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14V17H19V14C19 12.3431 17.6569 11 16 11C14.3431 11 13 12.3431 13 14Z"
        fill="#2CA01C"
      />
      <path
        d="M23 22V14C23 12.3431 21.6569 11 20 11C18.3431 11 17 12.3431 17 14V17H19V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V22C21 22.5523 20.5523 23 20 23C19.4477 23 19 22.5523 19 22V19H17V22C17 23.6569 18.3431 25 20 25C21.6569 25 23 23.6569 23 22Z"
        fill="#2CA01C"
      />
    </svg>
  );
}

// Official SAP / Legacy ERP Logo
export function SapLogo({ className = "", size = 32 }: LogoProps) {
  return (
    <svg
      width={size * 1.5}
      height={size}
      viewBox="0 0 54 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SAP ERP"
    >
      <rect width="54" height="36" rx="8" fill="#008FD3" />
      <text
        x="27"
        y="23"
        fontFamily="sans-serif"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        letterSpacing="1"
      >
        SAP
      </text>
    </svg>
  );
}
