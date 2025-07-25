import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Media = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const fetchMedia = () => {
    setLoading(true);
    let url = "http://localhost:1000/api/media/";

    const params = new URLSearchParams();
    if (category) params.append("media_type", category);
    if (search) params.append("search", search);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMediaItems(data.results || []);
        setLoading(false);
      })
      .catch((err) => console.error("API error:", err));
  };

  useEffect(() => {
    fetchMedia();
  }, [category, search]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          placeholder="🔍 Search media..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          <option value="photo">Photo</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="article">Article</option>
        </select>
      </div>

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

                {/* {item.media_type === "photo" && item.file && (
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
                )} */}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Media;
