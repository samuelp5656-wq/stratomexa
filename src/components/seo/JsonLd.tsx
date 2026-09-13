import React from "react";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Stratomexa Business Consulting Services",
    "alternateName": "Stratomexa",
    "url": "https://stratomexa.in",
    "logo": "https://stratomexa.in/images/certificate.jpeg",
    "image": "https://stratomexa.in/images/sheetal-jha.jpeg",
    "description": "Official Zoho Implementation Partner and finance consulting firm providing Zoho Books setup, GST compliance, bookkeeping, and Virtual CFO advisory across India.",
    "telephone": "+91-7981395907",
    "email": "stratomexa.ofc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flat No.107, Ground Floor, Sri Ramakrishna Towers, Ameerpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500073",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4448",
      "longitude": "78.4446"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://wa.me/917981395907"
    ],
    "areaServed": "IN",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
