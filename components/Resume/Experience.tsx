import Image from "next/image";

import FirstStepForKidsLogo from "@/public/images/first_step_for_kids_logo.png";
import UnderdogDevsLogo from "@/public/images/underdog_devs_logo.png";

export function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Work Experience
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        {/* <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                src={UnderdogDevsLogo}
                width={24}
                height={24}
                alt="Purdue University"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-500">
                May 2020{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Present
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Senior Front-end Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Google
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a Senior Software Engineer for Google, I am
                responsible for developing and maintaining the Chrome Web
                Experience.
              </div>
            </div>
          </div>
        </li> */}
        {/* Item */}
        {/* <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12">
                <path
                  className="fill-slate-800 dark:fill-slate-100"
                  d="M5.64 0c3.116 0 5.641 2.686 5.641 6s-2.525 6-5.64 6C2.526 12 0 9.314 0 6c0-3.313 2.525-6 5.64-6Zm9.008.351c1.558 0 2.82 2.53 2.82 5.65h.001c0 3.118-1.263 5.648-2.82 5.648-1.558 0-2.82-2.53-2.82-5.649S13.09.351 14.648.351Zm4.36.589C19.556.94 20 3.205 20 6c0 2.794-.444 5.06-.992 5.06s-.992-2.265-.992-5.06c0-2.794.444-5.06.992-5.06Z"
                />
              </svg>
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-500">
                May 2017{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                Apr 2020
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Senior Front-end Engineer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Medium
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                In my role as a Senior Software Engineer for Google, I am
                responsible for developing and maintaining the Chrome Web
                Experience.
              </div>
            </div>
          </div>
        </li> */}
        {/* Item */}
        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                src={FirstStepForKidsLogo}
                width={24}
                height={24}
                alt="First Step For Kids Logo"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-500">
                June 2023{" "}
                <span className="text-slate-400 dark:text-slate-600">·</span>{" "}
                July 2023
              </div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Web Developer
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                First Step for Kids - Contract
              </div>
              <ul className="text-sm text-slate-500 dark:text-slate-400">
                <li>
                  <span className="mr-2 text-sky-500">—</span>Optimized SEO for
                  legacy WordPress website, reducing load times by over 10x
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Converted all
                  images to a modern web format, saving 3mb of bandwidth on each
                  new homepage call
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Directed website
                  transfer to new hosting provider, reducing hosting costs by
                  50%
                </li>
              </ul>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="group relative">
          <div className="flex items-start before:absolute before:left-0 before:ml-[28px] before:h-full before:w-px before:-translate-x-1/2 before:translate-y-8 before:self-start before:bg-slate-200 before:group-last-of-type:hidden before:dark:bg-slate-800">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                src={UnderdogDevsLogo}
                width={24}
                height={24}
                alt="Underdog Devs Logo"
              />
            </div>
            <div className="space-y-1 pl-20">
              <div className="text-xs uppercase text-slate-500">
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
                  <span className="mr-2 text-sky-500">—</span>Paid apprentice in
                  a eight month, full-time, intensive software engineering
                  preparatory program.
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Paired with 5
                  industry expert mentors, meeting at least 1 hour each week for
                  rigorous 1:1 pair programming.
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Collaborated on
                  team projects. (see{" "}
                  <a
                    href="https://github.com/creppyfm/DeleGate"
                    className="text-white hover:text-blue-500"
                    referrerPolicy="no-referrer"
                    target="_blank"
                  >
                    DeleGate
                  </a>
                  )
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Assisted staff as
                  a teaching assistant, leading standups and coordinating
                  projects within the cohort.
                </li>
                <li>
                  <span className="mr-2 text-sky-500">—</span>Tech lead on
                  Underdog Devs&apos;{" "}
                  <a
                    href="https://www.underdogdevs.org/"
                    className="text-white hover:text-blue-500"
                    referrerPolicy="no-referrer"
                    target="_blank"
                  >
                    official website
                  </a>{" "}
                  development.
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
