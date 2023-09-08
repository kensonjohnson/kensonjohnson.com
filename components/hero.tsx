import Image from "next/image";
import HeroImage from "@/public/images/profile_square_hi_res.jpg";

export default function Hero() {
  return (
    <section>
      <div className="max-w-[800px]">
        <div className="pt-8 pb-10">
          <Image
            className="rounded-full mb-5"
            src={HeroImage}
            width={56}
            height={56}
            priority
            alt="Me"
          />
          <h1 className="h1 font-aspekta mb-5">
            I write about{" "}
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">
              code
            </span>
            .
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Developer, Writer and Co-Founder of{" "}
            <a href="https://paperbullx.com" className="text-blue-500">
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
