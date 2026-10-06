import React from 'react'
import { Link, Outlet } from 'react-router-dom'


interface ArticleProps {
  posts: Post[];
  List: "grid" | "list";
}
export default function Articles({ posts, List }: ArticleProps) {

  return (

      <>

    
          <div
      className={
        List === "grid"
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex flex-col gap-6"
      }
    >
      {post.posts
        .filter((item) => {
          const searchText = search.toLowerCase();
    
          return (
            item.title.toLowerCase().includes(searchText) ||
            item.excerpt.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.author.name.toLowerCase().includes(searchText)
          );
        })
        .map((item) => {
          if (!item.featured) {
            return null;
          }
    
          return (
           <Link to={item.slug}>
                <section key={item.id} className="bg-[#090909] px-6 py-16">
                  <div className="w-full">
        
                    {/* Featured Article */}
                    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[#151515] shadow-2xl">
        
                      <div>
        
                        {/* Image */}
                        <div className="relative md:h-auto">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
        
                          {/* Featured Badge */}
                          <div
                            className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white"
                          >
                            <span>★</span>
                            <span>مميز</span>
                          </div>
                        </div>
        
                        {/* Content */}
                        <div className="order-2 flex flex-col justify-between p-8 md:order-1 md:p-12">
        
                          <div>
        
                            {/* Category + Reading Time */}
                            <div className="mb-6 flex items-center gap-3">
        
                              <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold text-orange-500">
                                {item.category}
                              </span>
        
                              <span className="text-sm text-gray-500">
                                ◷ {item.readTime}
                              </span>
        
                            </div>
        
                            {/* Title */}
                            <h3 className="text-2xl font-black leading-relaxed text-white md:text-3xl">
                              {item.title}
                            </h3>
        
                            {/* Description */}
                            <p className="mt-5 text-base leading-8 text-gray-400">
                              {item.excerpt}
                            </p>
        
                          </div>
        
                          {/* Bottom */}
                          <div className="mt-10 flex items-end justify-between">
        
                            {/* Read Article */}
                            <Link to={item.slug}  className="flex items-center gap-2 font-bold text-orange-500 transition hover:text-orange-400">
                              <span>اقرأ المقال</span>
                              <span>←</span>
                            </Link >
        
                            {/* Author */}
                            <div className="flex items-center gap-3">
        
                              <div className="text-right">
                                <p className="font-bold text-white">
                                  {item.author.name}
                                </p>
        
                                <p className="text-xs text-gray-500">
                                  {item.author.role}
                                </p>
                              </div>
        
                              <img
                                src={item.author.avatar}
                                alt={item.author.name}
                                className="
                                  h-12
                                  w-12
                                  rounded-full
                                  border-2
                                  border-orange-500/30
                                  object-cover
                                "
                              />
        
                            </div>
        
                          </div>
        
                        </div>
        
                      </div>
        
                    </article>
        
                    {/* Mobile Show All Button */}
                    <button className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-3 font-bold text-white transition hover:bg-orange-600 md:hidden">
                      ← عرض الكل
                    </button>
        
                  </div>
                </section>
           </Link>
          );
        })}
    </div>


      <Outlet />

    </>
  )
}
