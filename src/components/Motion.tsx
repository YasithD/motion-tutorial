import { useRef } from "react";
import { ImageProps, ParralaxContentProps, ParralaxTextProps } from "../types";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParralaxContent = ({ imgUrl, title, subtitle, children }: ParralaxContentProps) => {
    return (
        <div className="px-4">
            <div className="relative h-[150vh]">
                <Image imgUrl={imgUrl} />
                <ParralaxText title={title} subtitle={subtitle} />
            </div>
            {children}
        </div>
    );
};

const ParralaxText = ({ title, subtitle }: ParralaxTextProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            ref={targetRef}
            className="absolute top-0 left-0 h-screen w-full flex justify-center items-center flex-col gap-2"
            style={{
                y,
                opacity
            }}
        >
            <p className="text-white font-light">{subtitle}</p>
            <p className="text-white font-extrabold text-5xl">{title}</p>
        </motion.div>
    );
};

const Image = ({ imgUrl }: ImageProps) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            ref={targetRef}
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "calc(100vh - 32px)",
                scale,
                opacity,
            }}
            className="sticky z-0 overflow-hidden rounded-3xl top-4"
        >
            <motion.div
                style={{
                    opacity,
                }}
                className="absolute inset-0 bg-neutral-950/70"
            />
        </motion.div>
    );
};
