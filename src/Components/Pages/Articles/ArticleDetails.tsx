import React from 'react'
import Articles from './Articles';
import { useParams } from "react-router-dom";
interface ArticleDtailsProps {
  posts: Post[];}

export default function ArticleDetails({post}:ArticleDtailsProps) {

const { slug } = useParams();

const article = post.posts.find(
  (item) => item.slug === slug
);

if (!article) {
  <div
        dir="rtl"
        className="flex min-h-screen items-center justify-center bg-[#090909] text-white"
      >
        <h1 className="text-2xl font-bold">
          المقال غير موجود
        </h1>
      </div>
    ;
  }

  return (
<>
        <div
          dir="rtl"
          className="min-h-screen bg-[#090909] text-white"
        >
          {/* ================= HERO ================= */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover"
              />
    
              <div className="absolute inset-0 bg-black/65" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-black/30 to-black/40" />
            </div>
    
            <div className="relative mx-auto flex min-h-[650px] max-w-6xl items-end px-6 pb-20">
              <div className="max-w-4xl">
    
                {/* Category */}
                <span className="inline-flex rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white">
                  {article.category}
                </span>
    
                {/* Title */}
                <h1 className="mt-7 text-4xl font-black leading-[1.3] md:text-6xl">
                  {article.title}
                </h1>
    
                {/* Meta */}
                <div className="mt-7 flex flex-wrap items-center gap-6 text-sm text-gray-300">
    
                  <span className="flex items-center gap-2">
                    <span>📅</span>
                    {article.date}
                  </span>
    
                  <span className="flex items-center gap-2">
                    <span>◷</span>
                    {article.readTime}
                  </span>
    
                </div>
    
                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
    
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-14 w-14 rounded-full border-2 border-orange-500 object-cover"
                  />
    
                  <div>
                    <p className="font-bold text-white">
                      {article.author.name}
                    </p>
    
                    <p className="mt-1 text-sm text-gray-400">
                      {article.author.role}
                    </p>
                  </div>
    
                </div>
    
              </div>
            </div>
          </section>
    
          {/* ================= MAIN CONTENT ================= */}
          <main className="mx-auto max-w-6xl px-6 py-16">
    
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[250px_minmax(0,1fr)]">
    
              {/* ================= SIDEBAR ================= */}
              <aside className="order-2 lg:order-1">
    
                <div className="sticky top-8 rounded-2xl border border-white/10 bg-[#151515] p-6">
    
                  <h2 className="mb-6 text-lg font-bold text-white">
                    محتويات المقال
                  </h2>
    
                  <div className="space-y-5 border-r border-white/10 pr-4">
    
                    <a
                      href="#intro"
                      className="block text-sm leading-6 text-gray-400 transition hover:text-orange-500"
                    >
                      المقدمة
                    </a>
    
                    <a
                      href="#content"
                      className="block text-sm leading-6 text-gray-400 transition hover:text-orange-500"
                    >
                      محتوى المقال
                    </a>
    
                    <a
                      href="#conclusion"
                      className="block text-sm leading-6 text-gray-400 transition hover:text-orange-500"
                    >
                      الخلاصة
                    </a>
    
                  </div>
    
                  {/* Reading info */}
                  <div className="mt-8 border-t border-white/10 pt-6">
    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500">
                        وقت القراءة
                      </p>
    
                      <p className="mt-1 font-bold text-white">
                        {article.readTime}
                      </p>
                    </div>
    
                    <div>
                      <p className="text-xs text-gray-500">
                        تاريخ النشر
                      </p>
    
                      <p className="mt-1 font-bold text-white">
                        {article.date}
                      </p>
                    </div>
    
                  </div>
    
                </div>
    
              </aside>
    
              {/* ================= ARTICLE ================= */}
              <article className="order-1 lg:order-2">
    
                {/* Intro */}
                <div
                  id="intro"
                  className="rounded-2xl border border-orange-500/20 bg-orange-500/[0.07] p-7 md:p-9"
                >
                  <p className="text-lg font-medium leading-9 text-gray-200 md:text-xl">
                    {article.excerpt}
                  </p>
                </div>
    
                {/* Content */}
                <div
                  id="content"
                  className="mt-12"
                >
                  <div className="whitespace-pre-line text-lg leading-[2.2] text-gray-300">
                    {article.content}
                  </div>
                </div>
    
                {/* Divider */}
                <div className="my-12 h-px bg-white/10" />
    
                {/* Tags */}
                <div>
                  <h2 className="mb-5 text-xl font-bold">
                    الوسوم
                  </h2>
    
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-[#151515] px-4 py-2 text-sm text-gray-400 transition hover:border-orange-500/40 hover:text-orange-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
    
                {/* ================= SHARE ================= */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-[#151515] p-6">
    
                  <p className="font-bold">
                    شارك المقال
                  </p>
    
                  <div className="flex gap-3">
    
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:text-orange-500">
                      X
                    </button>
    
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:text-orange-500">
                      f
                    </button>
    
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-orange-500 hover:text-orange-500">
                      in
                    </button>
    
                  </div>
    
                </div>
    
              </article>
    
            </div>
    
            {/* ================= AUTHOR CARD ================= */}
            <section className="mt-16">
    
              <div className="rounded-3xl border border-white/10 bg-[#151515] p-7 md:p-9">
    
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
    
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="h-24 w-24 rounded-full border-2 border-orange-500 object-cover"
                  />
    
                  <div>
                    <p className="text-sm font-semibold text-orange-500">
                      كاتب المقال
                    </p>
    
                    <h2 className="mt-2 text-2xl font-black">
                      {article.author.name}
                    </h2>
    
                    <p className="mt-2 text-gray-400">
                      {article.author.role}
                    </p>
                  </div>
    
                </div>
    
              </div>
    
            </section>
    
            {/* ================= RELATED ARTICLES ================= */}
            <section className="mt-20">
    
              <div className="mb-8 flex items-center justify-between">
    
                <h2 className="text-3xl font-black">
                  مقالات ذات صلة
                </h2>
    
                <span className="text-orange-500">
                  ←
                </span>
    
              </div>
    
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    
                {post.posts
                  .filter((item) => item.id !== article.id)
                  .slice(0, 3)
                  .map((item) => (
    
                    <article
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-[#151515] transition hover:-translate-y-1 hover:border-orange-500/30"
                    >
    
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover"
                      />
    
                      <div className="p-5">
    
                        <span className="text-sm font-bold text-orange-500">
                          {item.category}
                        </span>
    
                        <h3 className="mt-3 text-lg font-bold leading-8">
                          {item.title}
                        </h3>
    
                        <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-500">
                          {item.excerpt}
                        </p>
    
                      </div>
    
                    </article>
    
                  ))}
    
              </div>
    
            </section>
    
          </main>
        </div>
      <div dir="rtl" className="min-h-screen bg-[#090909] text-white">
    
          {/* Hero */}
          <section className="relative min-h-[600px] overflow-hidden">
    
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
    
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/60" />
    
            <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col justify-end px-6 pb-16">
    
              {/* category */}
              <div className="mb-5">
                <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold">
                  {article.category}
                </span>
              </div>
    
              {/* title */}
              <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
                {article.title}
              </h1>
    
              {/* info */}
              <div className="mt-6 flex flex-wrap items-center gap-6 text-gray-300">
                <span>
                  📅 {article.date}
                </span>
    
                <span>
                  ◷ {article.readTime}
                </span>
              </div>
    
              {/* author */}
              <div className="mt-8 flex items-center gap-4">
    
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="h-16 w-16 rounded-full border-2 border-orange-500 object-cover"
                />
    
                <div>
                  <p className="font-bold">
                    {article.author.name}
                  </p>
    
                  <p className="text-sm text-gray-400">
                    {article.author.role}
                  </p>
                </div>
    
              </div>
    
            </div>
          </section>
    
    
          {/* Content */}
          <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-[280px_1fr]">
    
            {/* Sidebar */}
            <aside className="order-2 lg:order-1">
    
              <div className="sticky top-6 rounded-2xl border border-white/10 bg-[#151515] p-6">
    
                <h2 className="mb-6 text-xl font-bold">
                  محتويات المقال
                </h2>
    
                <div className="space-y-4 text-gray-400">
                  <p>لماذا الساعة الذهبية؟</p>
                  <p>التحضير المسبق</p>
                  <p>إعدادات الكاميرا</p>
                  <p>التكوين الفني</p>
                  <p>الخلاصة</p>
                </div>
    
              </div>
    
            </aside>
    
    
            {/* Article content */}
            <article className="order-1 lg:order-2">
    
              <div className="rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6">
                <p className="text-lg leading-8 text-gray-200">
                  {article.excerpt}
                </p>
              </div>
    
              <div className="mt-10 space-y-10 text-lg leading-9 text-gray-300">
    
                <p>
                  {article.content}
                </p>
    
              </div>
    
            </article>
    
          </section>
    
    
          {/* Tags */}
          <section className="mx-auto max-w-7xl px-6 py-8">
    
            <div className="rounded-2xl border border-white/10 bg-[#151515] p-6">
    
              <h2 className="mb-5 text-xl font-bold">
                الوسوم
              </h2>
    
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#1c1c1c] px-5 py-2 text-sm text-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
    
            </div>
    
          </section>
    
    
          {/* Author */}
          <section className="mx-auto max-w-7xl px-6 py-8">
    
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#151515] p-6">
    
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-20 w-20 rounded-full border-2 border-orange-500 object-cover"
              />
    
              <div>
                <p className="text-sm text-orange-500">
                  كاتب المقال
                </p>
    
                <h2 className="mt-1 text-2xl font-bold">
                  {article.author.name}
                </h2>
    
                <p className="mt-1 text-gray-400">
                  {article.author.role}
                </p>
              </div>
    
            </div>
    
          </section>
    
        </div>
</>
  )
}
