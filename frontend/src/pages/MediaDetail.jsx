import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MediaDetail() {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:1000/api/media/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setMedia(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!media) return <p className="p-6">Media not found</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <Link to="/" className="text-blue-500 mb-4 block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-2">{media.title}</h1>
      <p className="text-gray-600 mb-4">{media.description}</p>

      {media.media_type === "photo" && media.file && (
        <img
          src={
                      media.file.startsWith("http")
                        ? media.file
                        : `http://localhost:1000${media.file}`
                    }
          alt={media.title}
          className="rounded"
        />
      )}

      {media.media_type === "audio" && media.file && (
        <audio controls className="w-full mt-2">
          <source
            src={
                      media.file.startsWith("http")
                        ? media.file
                        : `http://localhost:1000${media.file}`
                    }
            type="audio/mpeg"
          />
        </audio>
      )}

      {media.media_type === "video" && media.file && (
        <video controls className="w-full mt-2">
          <source src={
                      media.file.startsWith("http")
                        ? media.file
                        : `http://localhost:1000${media.file}`
                    } type="video/mp4" />
        </video>
      )}

      {media.media_type === "article" && (
        <div className="bg-white p-4 rounded shadow mt-4 whitespace-pre-wrap">
          {media.article_content}
        </div>
      )}
    </div>
  );
}

export default MediaDetail;
