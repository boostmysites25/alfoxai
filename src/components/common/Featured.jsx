import React from "react";
import { Link } from "react-router-dom";
import { ceoInterviews, featuredContent, logoImg } from "../../constant";

const Featured = () => {
  return (
    <section className="pt-[4rem] pb-[5rem] bg-[#121212] text-white">
      <div className="wrapper">
        <div className="flex flex-col gap-10">
          <div data-aos="fade-up" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center max-w-4xl mx-auto">
              <h2 className="heading-2">Featured in Top Media</h2>
              <p className="desc">
                We are proud to be recognized by some of the top media outlets
                for our innovation in IT and AI developments. Here are some of
                the media platforms that have featured Alfox AI
                Solutions:
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-10 max-w-3xl mx-auto">
            {featuredContent.map((item) => (
              <div
                data-aos="fade-up"
                key={item.link}
                className="flex flex-col gap-2 p-4 rounded-2xl border-2 border-primary/30"
              >
                <Link to={item.link} target="_blank">
                  <div className="rounded-2xl bg-primary/30 overflow-hidden aspect-square">
                    {item.img ? (
                      <img src={item.img} className="h-full w-full" alt="" />
                    ) : (
                      <img
                        src={logoImg}
                        className="h-full w-full object-contain"
                        alt=""
                      />
                    )}
                  </div>
                </Link>
                <small className="text-gray-400">{item.website}</small>
                <Link
                  to={item.link}
                  className="mt-1 hover:text-white/70 transition-colors duration-300"
                  target="_blank"
                >
                  <h4 className="text-lg leading-tight">{item.headline}</h4>
                </Link>
                <Link
                  to={item.link}
                  className="primary-btn mt-3"
                  target="_blank"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            className="flex h-full flex-col gap-7 mt-[3rem]"
          >
            <div className="flex flex-col gap-7 text-center max-w-4xl mx-auto">
              <h2 className="heading-2">Our CEO Interviews</h2>
              {/* <h2 className="heading-2">Featured on YouTube</h2> */}
              <p className="desc">
                Check out some of our latest videos on YouTube. We are proud to
                be recognized by some of the top media outlets for our
                innovation in IT and AI developments.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-10 max-w-3xl mx-auto">
            {ceoInterviews.map((item) => (
              <div
                data-aos="fade-up"
                key={item.videoId}
                className="flex flex-col gap-2 p-4 rounded-2xl border-2 border-primary/30"
              >
                <Link
                  to={`https://www.youtube.com/watch?v=${item.videoId}`}
                  target="_blank"
                >
                  <YouTubeThumbnail videoId={item.videoId} />
                </Link>
                <small className="text-gray-400">{item.website}</small>
                <Link
                  to={`https://www.youtube.com/watch?v=${item.videoId}`}
                  className="mt-1 h-full hover:text-white/70 transition-colors duration-300"
                  target="_blank"
                >
                  <h4 className="text-lg leading-tight">{item.headline}</h4>
                </Link>
                <Link
                  to={`https://www.youtube.com/watch?v=${item.videoId}`}
                  className="primary-btn mt-3"
                  target="_blank"
                >
                  Watch Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;

// YouTube Thumbnail
const YouTubeThumbnail = ({
  videoId,
  title,
  quality = "maxresdefault",
  altText = "YouTube Video Thumbnail",
  className = "",
}) => {
  // Different thumbnail quality options from YouTube
  const thumbnailQualities = {
    default: `https://i.ytimg.com/vi/${videoId}/default.jpg`, // 120x90
    medium: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`, // 320x180
    high: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`, // 480x360
    standard: `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`, // 640x480
    maxresdefault: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`, // 1280x720
  };

  const thumbnailUrl =
    thumbnailQualities[quality] || thumbnailQualities.maxresdefault;

  const handleClick = () => {
    // Construct YouTube video URL
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    window.open(youtubeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={handleClick}
      role="button"
      aria-label={`Watch video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={altText || `Thumbnail for YouTube video ${videoId}`}
        className="w-full h-auto object-cover rounded-md"
        onError={(e) => {
          // Fallback to a lower quality image if max resolution fails to load
          e.target.src = thumbnailQualities.high;
        }}
      />
      {title && <p className="mt-2 text-sm text-gray-700">{title}</p>}
    </div>
  );
};
