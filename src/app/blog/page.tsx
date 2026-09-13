import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog-posts";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights, Tax Updates & Zoho Guides",
  description:
    "Expert articles on GST compliance, Tally to Zoho Books migration blueprints, Indian compliance calendars, and startup financial management.",
};

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Insights & Regulatory Updates
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Financial & Tax Intelligence
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Stay compliant with changing GST rules, MCA mandates, and cloud accounting migration best practices authored by our practicing consultants.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="saas-card p-6 flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-bold text-slate-700 px-2.5 py-0.5 rounded bg-slate-100">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
