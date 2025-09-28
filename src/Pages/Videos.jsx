import React from "react";

const videos = [
  {
    title: "cvds",
    url: "https://youtu.be/Hnwz4zCg7CQ?si=h8bT75YZOoCLa9gH",
  },
  {
    title: "cvds",
    url: "https://youtu.be/AezAW5Q-mC4?si=D9l3OlCNmLUgU0gm",
  },
  {
    title: "cvds",
    url: "https://youtu.be/OTUzeBR1Ka4?si=NILGDJbKlig1WpLQ",
  },
  {
    title: "cvds",
    url: "https://youtu.be/OTUzeBR1Ka4?si=NILGDJbKlig1WpLQ",
  },
];

export default function VideoPage() {
  return (
    <div className="font-sans">
      {/* Featured Video */}
      <section className="bg-teal-800 text-white py-10 text-center">
        <h2 className="text-2xl font-semibold mb-6">Featured Video cvds</h2>
        <div className="max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OTUzeBR1Ka4?si=SEfdFalkVO86oWYi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="text-center">
              <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-3 text-gray-800 text-sm">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
