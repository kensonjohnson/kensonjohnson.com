import Image from "next/image";

import MarkProfilePic from "@/public/images/mark_dalrymple_profile_pic.jpeg";
import ChristopherProfilePic from "@/public/images/christopher_keim_profile_pic.jpeg";

export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
        Recommendations
      </h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="group relative">
          <div className="flex items-start">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                className="rounded-full"
                src={MarkProfilePic}
                width={56}
                height={56}
                alt="Testimonial 03"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/kensonjohnson/details/recommendations/"
              className="space-y-1 pl-20"
            >
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Mark Dalrymple
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Senior iOS Engineer at Zillow
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                &ldquo; Kenson is a force of nature and force of will. I&apos;ve
                been working with him for the last couple of months, checking in
                weekly, and every week I&apos;m impressed with what he&apos;s
                been able to accomplish - learning web tech stacks, exploring
                different languages and platforms, applying LLM AI beyond the
                typical &quot;hey let me ask ChatGPT about something
                trivial&quot; that you see. <br />
                <br />I asked Kenson to write a browser extension for me to do a
                weirdly specific task, and he knocked it out of the park:
                learned how to write browser extensions, building the UI and
                workflow, delivering and demonstrating the tool, and iterating
                fixing a couple of things caused by poor requirements on my
                part. I&apos;ve since applied this tool hundreds of times.{" "}
                <br />
                <br /> Kenson is also a proactive mentor and community supporter
                - he&apos;s been running an algorithm and data structures study
                group, helping his peers exercise their interview coding problem
                skills. They meet regularly and work through leetcode problems.
                Kenson posts his solution, and helps his peers solve problems
                with their code. He&apos;s a pillar of the Underdog Devs
                community - at a recent cohort show and tell, Kenson got a
                shout-out from just about everybody for the help he&apos;s given
                to them over the past several months. <br />
                <br /> Plus he&apos;s a nice guy and really easy to talk to. If
                you want someone self-motivated, intelligent, supportive, and
                fun to work with on your team, Kenson would be an amazing
                choice. &rdquo;
              </p>
            </a>
          </div>
        </li>
        {/* Item */}
        <li className="group relative">
          <div className="flex items-start">
            <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full bg-white dark:border-slate-800 dark:bg-slate-900 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30">
              <Image
                className="rounded-full"
                src={ChristopherProfilePic}
                width={56}
                height={56}
                alt="Testimonial 04"
              />
            </div>
            <a
              href="https://www.linkedin.com/in/kensonjohnson/details/recommendations/"
              className="space-y-1 pl-20"
            >
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">
                Christopher Keim
              </div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                Machine Learning Engineer at Underdog Devs
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                &ldquo; Kenson is not only a brilliant engineer, he is a deeply
                empathetic teacher and lucid communicator. Whether it&apos;s
                delivering full stack software products or diving into
                infrastructure and DevOps, Kenson takes an incredibly
                detail-oriented approach to solving problems. He&apos;s an
                absolute asset to have on a team. &rdquo;
              </p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
