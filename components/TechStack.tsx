import { cn } from "../utils/cn";
import Marquee from "./Marquee";
import styles from "./TechStack.module.css";
import techData from "../assets/technologies.json"; // assuming the JSON file is located in 'assets' folder

const TechStackCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          style={{ width: "24px", height: "24px", fill: "white" }}
          alt=""
          src={img}
        />
        {name}
      </div>
    </div>
  );
};

export const TechStack = () => {
  const firstRow = techData.slice(0, techData.length / 2);
  const secondRow = techData.slice(techData.length / 2);

  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>Tech Stack</h3>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((tech) => (
            <TechStackCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((tech) => (
            <TechStackCard key={tech.name} {...tech} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
      </div>
    </div>
  );
};
