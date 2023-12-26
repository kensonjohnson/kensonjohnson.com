import { Experience } from "@/components/Resume/Experience";
import Recommendations from "@/components/recommendations";
import WidgetSkills from "@/components/widget-skills";
import WidgetReferences from "@/components/widget-references";

export const metadata = {
  title: "Resume - DevSpace",
  description: "Page description",
};

export default function Resume() {
  return (
    <div className="grow space-y-8 pb-16 pt-12 md:flex md:space-x-8 md:space-y-0 md:pb-20 md:pt-16">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[800px]">
          <section>
            {/* Page title */}
            <h1 className="h1 mb-12 font-aspekta">My Resume</h1>
            {/* Page content */}
            <div className="space-y-12 text-slate-500 dark:text-slate-400">
              <Experience />
              <Recommendations />
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="shrink-0 md:w-[240px] lg:w-[300px]">
        <div className="space-y-6">
          <WidgetSkills />
          <WidgetReferences />
        </div>
      </aside>
    </div>
  );
}
