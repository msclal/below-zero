import React from "react";

const Video = () => {
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/NGcbJGqEQEM?si=G-sxzIK7wvJWaLXT"
        title="YouTube video player"
        role="presentation"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
