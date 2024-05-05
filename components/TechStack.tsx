import { cn } from "../utils/cn";
import Marquee from "./Marquee";
import styles from "./TechStack.module.css"

const technologies = [
    {
        name: "Python",
        img: "logos/python.svg",
    },
    {
        name: "Rust",
        img: "logos/rust.svg",
    },
    {
        name: "Golang",
        img: "logos/go.svg",
    },
    {
        name: "Kotlin",
        img: "logos/kotlin.svg",
    },
    {
        name: "Linux",
        img: "logos/archlinux.svg",
    },
    {
        name: "Docker",
        img: "logos/docker.svg",
    },
    {
        name: "Pandas",
        img: "logos/pandas.svg",
    },
    {
        name: "Android",
        img: "logos/android.svg",
    },
    {
        name: "Javascript",
        img: "logos/javascript.svg",
    },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

const TechStackCard = ({
    img,
    name,
}: {
    img: string;
    name: string;
}) => {
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
    return (
        <div className={styles.root}>
            <h3 className={styles.h3}>Tech Stack</h3>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <TechStackCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <TechStackCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>

            </div>
        </div>
    );
};

