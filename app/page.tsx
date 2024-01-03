import { allPosts } from "contentlayer/generated";
import Hero from "@/components/hero";
import PostItem from "./post-item";
import WidgetPosts from "@/components/widget-posts";

export const metadata = {
  title: "Home - Kenson Johnson",
  description: "Website and blog of Kenson Johnson, a software engineer.",
};

export default async function Home() {
  // Sort posts by date
  allPosts.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <>
      <Hero />
      {/* Content */}
      <div className="grow space-y-8 pb-16 md:flex md:space-x-8 md:space-y-0 md:pb-20">
        {/* Middle area */}
        <div className="grow">
          <div className="space-y-10">
            <section>
              <h2 className="mb-3 font-aspekta text-xl font-[650]">
                Latest Articles
              </h2>

              {/* Filters */}
              <ul className="flex flex-wrap border-b border-slate-100 text-sm dark:border-slate-800">
                {/* TODO: Add functionality for switching based on category */}
                {/* <li className="px-3 -mb-px">
                  <a
                    className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500"
                    href="#0"
                  >
                    Coding
                  </a>
                </li>
                <li className="px-3 -mb-px">
                  <a
                    className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    href="#0"
                  >
                    Startups
                  </a>
                </li>
                <li className="px-3 -mb-px">
                  <a
                    className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    href="#0"
                  >
                    Tutorials
                  </a>
                </li>
                <li className="px-3 -mb-px">
                  <a
                    className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                    href="#0"
                  >
                    Indie Hacking
                  </a>
                </li> */}
              </ul>

              {/* Articles list */}
              <div>
                {allPosts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right sidebar */}
        <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
          <div className="space-y-6">
            {/* <WidgetSponsor /> */}
            <WidgetPosts />
          </div>
        </aside>
      </div>
    </>
  );
}
