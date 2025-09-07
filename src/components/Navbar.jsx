import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const Navbar = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        audio.pause();
      }
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const links = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <nav id="nav-overall" aria-label="Main navigation">
      <div id="nav-div">
        {links.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.end}
            className={({ isActive }) => `nav-a md:inline ${isActive ? "text-indigo-300 font-semibold" : ""}`}
            title={link.label}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div
        style={{ marginLeft: "auto" }}
        role="button"
        tabIndex={0}
        onClick={toggleMusic}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleMusic();
          }
        }}
        className="relative hidden md:flex items-center justify-center"
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <div
          className={`w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer transition-all duration-300 ${isPlaying ? "animate-spin-slow" : "shadow-[0_0_10px_rgba(210,181,181,0.7)]"}`}
        >
          <FaMusic
            className={`text-white text-xl ${isPlaying ? "animate-spin-slow" : ""} hover:text-indigo-300 transition duration-300 z-10`}
          />
          {isPlaying && (
            <div
              className="absolute inset-0 rounded-full border-t border-[rgba(210,181,181,0.7)] animate-[spin_4.5s_linear_infinite]"
              style={{ top: "-3px", left: "-3px", right: "-3px", bottom: "-3px" }}
            />
          )}
        </div>
      </div>

      <audio ref={audioRef} loop={false} preload="auto">
        <source src="/Pirates.mp3" type="audio/mp3" />
      </audio>
    </nav>
  );
};

export default Navbar;
