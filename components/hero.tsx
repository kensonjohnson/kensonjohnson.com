import Image from "next/image";
import HeroImage from "@/public/images/profile_square_hi_res.jpg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[800px]">
        <div className="pb-10 pt-8">
          <Image
            className="mb-5 rounded-full"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
          />
          <h1 className="h1 mb-5 font-aspekta">
            I write about{" "}
            <span className="relative inline-flex text-sky-500 before:absolute before:inset-0 before:-z-10 before:translate-y-1/4 before:-rotate-2 before:bg-sky-200 before:opacity-30 dark:before:bg-sky-500">
              code
            </span>
            .
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Developer, Writer and Co-Founder of{" "}
            <a
              href="https://paperbullx.com"
              className="text-white hover:text-blue-500"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              Paper Bull Trading
            </a>
            . I write about coding, startups, and my journey as a full-time
            maker.
          </p>
        </div>
      </div>
    </section>
  );
}
