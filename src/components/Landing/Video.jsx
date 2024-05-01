import React from "react";

const Video = () => {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/w4WiXKGCJhg?si=U03lYF9GtVD4J3-x"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
