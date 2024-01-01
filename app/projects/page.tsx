import ProjectCard from "@/components/Projects/ProjectCard";

// Icon imports
import CryptoRealtimeInferenceIcon from "@/public/images/crypto_realtime_inference_icon.svg";
import AlgorithmVisualizerIcon from "@/public/images/algorithm_visualizer_icon.svg";
import DelegateIcon from "@/public/images/delegate_icon.svg";
import CKLogoLight from "@/public/images/ck_logo_light.svg";
import CKLogoDark from "@/public/images/ck_logo_dark.svg";
import UnderdogLogo from "@/public/images/underdog_devs_logo.png";
import RelativePathLogo from "@/public/images/relative_path_logo.png";
// import GitHubIcon from "@/public/images/github.svg";

export const metadata = {
  title: "Projects - Kenson Johnson",
  description: "All of the awesome projects I've built or worked on.",
};

export default function Projects() {
  const githubProjects = [
    {
      id: "crypto_realtime_inference",
      iconLight: CryptoRealtimeInferenceIcon,
      iconDark: CryptoRealtimeInferenceIcon,
      link: "https://github.com/christopherkeim/crypto-real-time-inference",
      demoLink: "https://www.christopherkeim.xyz/projects/crypto",
      title: "Crypto Real Time Inference",
      excerpt:
        "Leverages historical Bitcoin price data and cutting-edge machine learning algorithms to serve inferences about Bitcoin's future price points within a 1 hour window, in real time.",
    },
    {
      id: "algorithm_visualizer",
      iconLight: AlgorithmVisualizerIcon,
      iconDark: AlgorithmVisualizerIcon,
      link: "https://github.com/olijujuangreen/Pathfinder-React",
      demoLink: "https://olijujuangreen.github.io/Pathfinder-React/",
      title: "Algorithm Visualizer",
      excerpt:
        "I built this app to use as a teaching tool for my mentees. It visualizes the inner workings of various pathfinding algorithms, such as Breadth first search and Dijkstra's algorithm.",
    },
    {
      id: "delegate_app",
      iconLight: DelegateIcon,
      iconDark: DelegateIcon,
      link: "https://github.com/creppyfm/DeleGate",
      demoLink: "https://delegate-ai.herokuapp.com/",
      title: "Delegate App",
      excerpt:
        "An AI powered project management tool that helps managers delegate tasks to their team members.",
    },
  ];

  const clientProjects = [
    {
      id: "christopher_keim_website",
      iconLight: CKLogoLight,
      iconDark: CKLogoDark,
      link: "https://github.com/christopherkeim/christopherkeim-xyz",
      websiteLink: "https://www.christopherkeim.xyz",
      title: "Christopher Keim's Portfolio Website",
      excerpt: "Next 14, Tailwind CSS, TypeScript, and Vercel.",
    },
    {
      id: "underdog_devs_website",
      iconLight: UnderdogLogo,
      iconDark: UnderdogLogo,
      link: "https://github.com/Underdog-Devs/ud-client-v3",
      websiteLink: "https://www.underdogdevs.org",
      title: "Underdog Devs Website",
      excerpt: "Next 13, Sass, TypeScript, and AWS.",
    },
    {
      id: "relative_path_website",
      iconLight: RelativePathLogo,
      iconDark: RelativePathLogo,
      link: "https://github.com/kensonjohnson/relativepath.tech",
      websiteLink: "https://relativepath.tech",
      title: "Relative Path Website",
      excerpt: "Vite, React, TypeScript, and Cloudflare Pages.",
    },
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-32 sm:px-6 md:pb-20">
      <div className="grow">
        <div className="w-full">
          <section>
            {/* Page title */}
            <h1 className="h1 mb-12 font-aspekta">
              Nice stuff I&apos;ve built
            </h1>
            <div className="space-y-10">
              {/* Github projects cards */}
              <section>
                <h2 className="mb-6 font-aspekta text-xl font-[650]">
                  Projects
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {githubProjects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
              {/* Client Projects cards */}
              <section>
                <h2 className="mb-6 font-aspekta text-xl font-[650]">
                  Client Projects
                </h2>
                <div className="grid gap-5 md:grid-cols-2">
                  {clientProjects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
