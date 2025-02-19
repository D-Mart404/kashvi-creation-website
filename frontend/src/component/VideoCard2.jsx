import React, { useRef, useState, useEffect } from "react";
import "./VideoCard.css"; // New CSS file
import sampleVideo1 from "../assets/videos/vid1.mp4"; // Import videos
import sampleVideo2 from "../assets/videos/vid2.mp4"; // Import videos
import sampleVideo3 from "../assets/videos/vid3.mp4"; // Import videos
import sampleVideo4 from "../assets/videos/01.mp4";
import sampleVideo5 from "../assets/videos/02.mp4";

const VideoCard = ({ videoSrc, text }) => {
  return (
    <div className="video-card">
      <video src={videoSrc} autoPlay loop muted></video>
      <div className="video-card-text">{text}</div>
    </div>
  );
};

const VideoCard2 = () => {
  const sliderRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsScrollable(window.innerWidth <= 768);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -220, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 220, behavior: "smooth" });
  };

  const videoCards = [
    { id: 1, videoSrc: sampleVideo1, text: "Summer Wear" },
    { id: 2, videoSrc: sampleVideo2, text: "Winter Wear" },
    { id: 3, videoSrc: sampleVideo3, text: "Part Wear" },
    { id: 4, videoSrc: sampleVideo4, text: "Wedding Wear" },
    { id: 5, videoSrc: sampleVideo5, text: "Office Wear" },
  ];

  return (
    <div className="video-card-container">
      {isScrollable && (
        <button className="scroll-btn left-btn" onClick={scrollLeft}>‹</button>
      )}

      <div className="video-card-slider" ref={sliderRef}>
        {videoCards.map((card) => (
          <VideoCard key={card.id} videoSrc={card.videoSrc} text={card.text} />
        ))}
      </div>

      {isScrollable && (
        <button className="scroll-btn right-btn" onClick={scrollRight}>›</button>
      )}
    </div>
  );
};

export default VideoCard2;
