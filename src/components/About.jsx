import React from "react";
import { cn } from "../lib/utils";
import BlurImage from "./utils/BlurImage";
import { Helmet } from "react-helmet-async";
// If your image is inside public/, use src="/profile_pic.jpg"
// If it's in src/assets/, import it like this:
// import profilePic from "../assets/profile_pic.jpg";

const About = () => {
  return (
    <section className="about-container relative flex min-h-[50rem] md:min-h-screen w-full items-center justify-center bg-black text-center py-20 px-4">
      <Helmet>
        <title>About Shaik Fareed Baba | Full Stack Developer & AI Developer</title>
        <meta
          name="description"
          content="Learn more about Shaik Fareed Baba, a passionate full-stack developer with expertise in React, Node.js, AI/ML, UI/UX design, and entrepreneurial ventures. Discover my journey and goals."
        />
        <meta property="og:title" content="About Shaik Fareed Baba | Full Stack Developer" />
        <meta
          property="og:description"
          content="Get to know Shaik Fareed Baba's background, skills, projects, and entrepreneurial aspirations in full-stack development and AI/ML."
        />
      </Helmet>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-20 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-4 border-neutral-800">
          <BlurImage
            src="/Profile_pic.jpg" // or profilePic if using import
            blurhash="" // no invalid blurhash
            alt="Profile"
            className="w-full h-full"
          />
        </div>

        <div className="text-left text-neutral-300 max-w-2xl ml-8 md:ml-16">
          <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent py-8">
            About Me.
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            I'm an AI & ML Engineer with a passion for developing intelligent
            systems that solve real-world problems. Currently pursuing my B.Tech
            in Artificial Intelligence and Machine Learning at Malla Reddy
            University with a CGPA of 9.2, I specialize in machine learning,
            deep learning, and neural networks.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Computer Science student specializing in AI/ML with hands-on
            experience in building intelligent systems, chatbots, and
            data-driven applications. Proficient in Python, machine learning
            frameworks, and cloud APIs. Passionate about applying AI to solve
            real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
