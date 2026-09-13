import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts";
import { ChevronRight, Clock, ArrowLeft } from "lucide-react";
import { ZohoLogo } from "@/components/logos/BrandLogos";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Stratomexa Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://stratomexa.in/blog/${post.slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog/" className="hover:text-slate-900 transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold line-clamp-1">{post.category}</span>
        </div>

        {/* Post Header */}
        <div className="space-y-4 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
              {post.category}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
            <span>·</span>
            <span>{post.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-serif italic">
            {post.excerpt}
          </p>
        </div>

        {/* Content Body */}
        <article className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Author / Partner Box */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-slate-900">
              Stratomexa Research & Compliance Advisory
            </div>
            <div className="text-xs text-slate-500 flex items-center gap-2 justify-center sm:justify-start">
              <span>Certified Zoho Implementation Partner</span>
              <span>·</span>
              <span>ID: PI0626000</span>
            </div>
          </div>

          <a
            href="https://wa.me/917981395907?text=Hi%20Stratomexa%2C%20I%20read%20your%20article%20and%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shrink-0 shadow-xs transition-colors"
          >
            Ask a Question on WhatsApp
          </a>
        </div>

        {/* Back Link */}
        <div className="pt-2">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
