import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:1000/api/media/")
      .then((res) => res.json())
      .then((data) => {
        console.log("API response:", data);
        setMediaItems(data.results || []);
        setLoading(false);
      })
      .catch((err) => console.error("API error:", err));
  }, []);
  mediaItems.forEach((item) => {
    console.log("MEDIA FILE PATH:", item.file);
    console.log("FULL FILE URL:", `http://localhost:1000${item.file}`);
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">🎥 Multimedia Showcase</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(mediaItems) &&
            mediaItems.map((item) => (
              <Link
                key={item.id}
                to={`/media/${item.id}`}
                className="bg-white shadow-lg rounded p-4"
              >
                <h2 className="text-xl font-semibold mb-2">
                  {item.title.toUpperCase()}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  {item.media_type.toUpperCase()}
                </p>
                <p className="text-gray-700 line-clamp-3">
                  {item.description.toLowerCase()}
                </p>

                {item.media_type === "photo" && item.file && (
                  <img
                    src={
                      item.file.startsWith("http")
                        ? item.file
                        : `http://localhost:1000${item.file}`
                    }
                    alt={item.title}
                    className="mt-2 rounded"
                  />
                )}

                {item.media_type === "audio" && item.file && (
                  <audio controls className="mt-2 w-full">
                    <source
                      src={
                        item.file.startsWith("http")
                          ? item.file
                          : `http://localhost:1000${item.file}`
                      }
                      type="audio/mpeg"
                    />
                  </audio>
                )}

                {item.media_type === "video" && item.file && (
                  <video controls className="mt-2 w-full">
                    <source
                      src={
                        item.file.startsWith("http")
                          ? item.file
                          : `http://localhost:1000${item.file}`
                      }
                      type="video/mp4"
                    />
                  </video>
                )}

                {item.media_type === "article" && (
                  <a href="#" className="text-blue-500 mt-2 block">
                    Read more →
                  </a>
                )}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
