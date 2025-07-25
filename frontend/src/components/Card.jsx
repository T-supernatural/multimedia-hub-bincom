import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMedia = () => {
    setLoading(true);
    const url = "http://localhost:1000/api/media/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMediaItems(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Cards Section */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(mediaItems) &&
            mediaItems.slice(0, 3).map((item) => (
              <div
                key={item.id}
                class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    class="rounded-t-lg w-full h-48 object-cover"
                    src={
                      item.thumbnail ||
                      "https://placehold.co/300x200/EEE/555?text=No+Preview"
                    }
                    alt={item.title}
                  />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title.toUpperCase()}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.media_type.toUpperCase()}
                  </p>
                  <Link
                    to={`/media/${item.id}`}
                    href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Card;

