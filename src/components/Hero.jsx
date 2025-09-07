import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { cn } from "../lib/utils";
import { DrawLineText } from "./ui/draw_line_text";

const Hero = () => {
  return (
    <>
      <div className="relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black overflow-hidden px-4 py-16">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="relative z-20 text-center">
          <div className="flex justify-center items-center gap-3 flex-wrap">
            <span
              className="font-bold tracking-tight bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent
                         text-5xl sm:text-6xl md:text-6xl lg:text-[71px]"
              style={{ lineHeight: 1 }}
            >
              Hi! I'm
            </span>
            <div className="translate-y-2">
              <DrawLineText
                fontSize={{
                  base: 40,
                  sm: 50,
                  md: 60,
                  lg: 71,
                }}
                strokeWidth={1.5}
                text="Shaik Fareed Baba"
                color="url(#gradient)"
              />
            </div>
          </div>
          <svg width="0" height="0">
            <defs>
              <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#e5e5e5" offset="0%" />
                <stop stopColor="#737373" offset="100%" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-md md:text-xl lg:text-2xl text-neutral-300 mt-4">
            Building the Future with{" "}
            <span className="text-indigo-300 font-semibold typing-text">
              <Typewriter
                words={[
                  "Full-Stack Web Development",
                  "AI-Driven Innovations",
                  "Pixel-Perfect Interfaces",
                  "Scalable Backend Systems",
                  "Machine Learning Solutions",
                  "Human-Centered Leadership",
                  "Cross-Functional Teamwork",
                  "Open-Source Contributions",
                  "Technical Roadmaps & Strategy",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </span>
            <span className="sr-only">
              Building the Future with Web Development, AI-Driven Innovations, and
              Human-Centered Leadership.
            </span>
          </h2>
          <div className="flex justify-center gap-4 mt-6 text-2xl items-center">
            <a
              href="https://github.com/fareed0313"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:fareedbaba1303@gmail.com"
              className="icon-circle hover:text-pink-600 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/shaik-fareed-baba-a433222a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-blue-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/fareedbaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-yellow-500 transition"
              aria-label="LeetCode"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
