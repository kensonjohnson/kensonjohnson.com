import Image from "next/image";

import EducationIcon01 from "@/public/images/underdog_devs_logo.png";
import EducationIcon02 from "@/public/images/education-icon-02.svg";

export function Education() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Education
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <Image
                src={EducationIcon01}
                width={24}
                height={24}
                alt="Purdue University"
              />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">
                November 2022{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                June 2023
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Software Engineer Apprentice
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Underdog Devs - Project Underdog
              </div>
              <ul className="text-sm text-slate-500 dark:text-slate-400">
                <li>
                  Paid apprentice in a eight month, full-time, intensive
                  software engineering preparatory program.
                </li>
                <li>
                  Paired with 5 industry expert mentors, meeting at least 1 hour
                  each week for rigorous 1:1 pair programming.
                </li>
                <li>Collaborated on team projects. (see DeleGate)</li>
                <li>
                  Assisted staff as a teaching assistant, leading standups and
                  coordinating projects within the cohort.
                </li>
                <li>
                  Tech lead on Underdog Devs&apos; official website development.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
