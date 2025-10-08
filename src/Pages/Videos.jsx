import React from "react";

const videos = [
  {
    title: "Nepal Startup Meet",
    embedUrl: "https://www.youtube.com/embed/5dKqpqdZuCs",
  },
  {
    title: "Nepal Startup Meet 2019: Sriyog.com",
    embedUrl: "https://www.youtube.com/embed/AezAW5Q-mC4",
  },
  {
    title: "SRIYOG Nepal Startup Meet",
    embedUrl: "https://www.youtube.com/embed/OTUzeBR1Ka4",
  },
];

function VideoPage() {
  const featuredVideo = "https://www.youtube.com/embed/N071A7j5TVI";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Featured Video Section */}
      <section className="max-w-6xl mx-auto bg-[#1F2B6C] rounded-md mt-12 shadow-lg">
        <div className="text-center py-10">
          <h2 className="text-white text-3xl font-semibold mb-8">
            Featured CVDS Nepal Video
          </h2>

          <div className="flex justify-center">
            <iframe
              src={featuredVideo}
              title="Featured CVDS NEpal Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-2xl w-full max-w-4xl aspect-video"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="max-w-7xl mx-auto py-14 px-6">
        <h2 className="text-[#1F2B6C] text-2xl font-semibold text-center mb-10">
          CVDS Nepal  Videos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {videos.map((video, index) => (
            <div key={index} className="text-center">
              <iframe
                className="w-full aspect-video rounded-md shadow-md"
                src={video.embedUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p className="text-gray-700 text-sm mt-3 font-medium">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default VideoPage;
