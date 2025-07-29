import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MediaDetail = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1000/api/media/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (media?.media_type) {
      fetch(`http://localhost:1000/api/media/`)
        .then((res) => res.json())
        .then((data) => {
          const items = data.results || [];
          const filtered = items
            .filter(
              (item) =>
                item.media_type === media.media_type && item.id !== media.id
            )
            .slice(0, 6);
          setRelated(filtered);
        });
    }
  }, [media]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!media) return <p className="p-6">Media not found</p>;

  const getMediaElement = () => {
    const fileUrl = media.file.startsWith("http")
      ? media.file
      : `http://localhost:1000${media.file}`;

    switch (media.media_type) {
      case "video":
        return (
          <video controls className="w-full rounded-lg shadow mb-6">
            <source src={fileUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "photo":
        return (
          <img
            src={fileUrl}
            alt={media.title}
            className="w-full rounded-lg shadow mb-6"
          />
        );
      case "audio":
        return (
          <audio controls className="w-full mb-6">
            <source src={fileUrl} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        );
      case "article":
        return (
          <div className="bg-white text-base leading-relaxed whitespace-pre-wrap p-4 rounded shadow mb-6">
            {media.article_content}
          </div>
        );
      default:
        return <p>Unsupported media type</p>;
    }
  };

  const getMediaPreview = (item) => {
    const fileUrl = item.file.startsWith("http")
      ? item.file
      : `http://localhost:1000${item.file}`;

    if (item.media_type === "photo") {
      return (
        <img
          src={fileUrl}
          alt={item.title}
          className="h-40 w-full object-cover rounded-t-md"
        />
      );
    } else if (item.media_type === "video") {
      return (
        <video className="h-40 w-full object-cover rounded-t-md" muted>
          <source src={fileUrl} type="video/mp4" />
        </video>
      );
    } else if (item.media_type === "audio") {
      return (
        <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-600 text-sm rounded-t-md">
          🎧 Audio Content
        </div>
      );
    } else {
      return (
        <div className="h-40 flex items-center justify-center bg-gray-100 text-gray-600 text-sm rounded-t-md">
          📖 Article
        </div>
      );
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-sm text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        {getMediaElement()}

        <h1 className="text-3xl font-bold mb-2 uppercase">{media.title}</h1>
        <p className="text-sm text-gray-500 mb-2 capitalize">
          {media.media_type} • Uploaded on{" "}
          {new Date(media.uploaded_at).toDateString()}
        </p>
        <p className="text-lg mb-6 capitalize">{media.description}</p>

        {/* Related Media Section */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">More Like This</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/media/${item.id}`}
                  className="bg-white rounded-md shadow hover:shadow-lg transition"
                >
                  {getMediaPreview(item)}
                  <div className="p-3">
                    <h4 className="text-md font-semibold capitalize">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 capitalize logo">
                      {item.media_type}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaDetail;
