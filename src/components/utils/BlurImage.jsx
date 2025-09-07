import React, { useState } from "react";
import { Blurhash } from "react-blurhash";

export default function BlurImage({ src, blurhash = "", alt = "", className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const wrapperStyle = { position: "relative", overflow: "hidden" };
  const blurStyle = { display: "block", width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 };
  const imgStyle = { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 350ms ease", opacity: loaded && !error ? 1 : 0.0001, borderRadius: "9999px" };
  const fallbackStyle = { width: "100%", height: "100%", backgroundColor: "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 12, borderRadius: "9999px" };

  return (
    <div className={`${className}`} style={wrapperStyle}>
      {!loaded && blurhash && !error && (
        <Blurhash hash={blurhash} width="100%" height="100%" resolutionX={32} resolutionY={32} punch={1} style={blurStyle} />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        style={imgStyle}
        loading="lazy"
      />
      {loaded && error && (
        <div style={{ ...fallbackStyle, position: "absolute", inset: 0 }}>
          Image not found
        </div>
      )}
    </div>
  );
}
