import Image from "next/image";
import Link from "next/link";
import AboutImg from "@/public/images/profile_square_hi_res.jpg";
import Experience from "@/components/experience";

export const metadata = {
  title: "About - Kenson Johnson",
  description: "About Kenson Johnson",
};

export default function About() {
  return (
    <div className="grow space-y-8 pb-16 pt-12 md:flex md:space-x-8 md:space-y-0 md:pb-20 md:pt-16">
      {/* Middle area */}
      <div className="grow">
        <div className="max-w-[900px]">
          <section>
            {/* Page title */}
            <h1 className="h1 mb-5 text-center font-aspekta">
              Hi. I&apos;m Kenson Johnson 👋
            </h1>
            <Image
              className="mx-auto rounded-sm"
              src={AboutImg}
              width={400}
              height={400}
              alt="About"
            />
            {/* Page content */}
            <div className="space-y-8 text-slate-500 dark:text-slate-400">
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Short Bio
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">
                  Career
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    Dolore Magna Aliqua
                  </a>
                  .
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non{" "}
                  <a
                    className="font-medium text-sky-500 hover:underline"
                    href="#0"
                  >
                    proident,
                  </a>{" "}
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet,{" "}
                  <strong className="font-medium text-slate-800 dark:text-slate-100">
                    consectetur adipiscing elit sed do
                  </strong>{" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>

              <Experience />

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-sky-500 hover:underline">
                  <Link href="/contact">Let&apos;s Connect!</Link>
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Right sidebar */}
      {/* <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
        </div>
      </aside> */}
    </div>
  );
}
