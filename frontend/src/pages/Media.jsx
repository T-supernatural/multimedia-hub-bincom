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

  const getMediaPreview = (item) => {
    const src = item.file.startsWith("http")
      ? item.file
      : `http://localhost:1000${item.file}`;

    if (item.media_type === "photo") {
      return (
        <img
          src="/media/camera.jpg"
          alt={item.title}
          className="w-full h-40 object-cover rounded"
        />
      );
    }

    if (item.media_type === "audio") {
      return (
        <img
          src="/media/podcast-1.jpg"
          alt={item.title}
          className="w-full h-40 object-cover rounded"
        />
      );
    }

    if (item.media_type === "video") {
      return (
        <img
          src="/media/vide.jpg"
          alt={item.title}
          className="w-full h-40 object-cover rounded"
        />
      );
    }

    if (item.media_type === "article") {
      return (
        <img
          src="/media/article.jpg"
          alt={item.title}
          className="w-full h-40 object-cover rounded"
        />
      );
    }

    return null;
  };

  const getMediaBackground = (item) => {
    if (!item.file) return "";

    return item.file.startsWith("http")
      ? item.file
      : getMediaPreview(item).props.src;
  };


  return (
    <div className="p-6 min-h-screen text-black mt-24">
      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center">
        <input
          type="text"
          placeholder="Search media..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border outline-none rounded w-full md:w-1/3 text-black"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border outline-none rounded text-black"
        >
          <option value="">All Categories</option>
          <option value="photo">Photo</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="article">Article</option>
        </select>
      </div>

      {/* Content Grid */}
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(mediaItems) &&
            mediaItems.map((item) => (
              <Link
                key={item.id}
                to={`/media/${item.id}`}
                className="bg-white p-4 rounded shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {getMediaPreview(item)}

                <div className="mt-3">
                  <h2 className="text-xl font-semibold uppercase">
                    {item.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-1 capitalize logo">
                    {item.media_type}
                  </p>
                  <p className="inline-flex items-center py-2 text-sm font-medium text-center bg-white text-[#BF0603] hover:text-blue-600 ">
                    View Details
                  </p>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Media;
