import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MediaDetail = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([
    { user: "User123", text: "Great video! Learned a lot." },
    { user: "TechFan", text: "Can you do a follow-up on this topic?" },
  ]);

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

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentInput = e.target.elements.comment;
    const newComment = {
      user: "Anonymous", // you can hook this later with auth
      text: commentInput.value,
    };
    setComments([...comments, newComment]);
    commentInput.value = "";
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen mt-20">

      {/* Main Content */}
      <main className="p-6 max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded shadow mb-6">
          {/* Media display */}
          {media.media_type === "video" && media.file && (
            <video controls className="w-full rounded mb-4">
              <source
                src={
                  media.file.startsWith("http")
                    ? media.file
                    : `http://localhost:1000${media.file}`
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}

          {media.media_type === "photo" && media.file && (
            <img
              src={
                media.file.startsWith("http")
                  ? media.file
                  : `http://localhost:1000${media.file}`
              }
              alt={media.title}
              className="w-full rounded mb-4"
            />
          )}

          {media.media_type === "audio" && media.file && (
            <audio controls className="w-full rounded mb-4">
              <source
                src={
                  media.file.startsWith("http")
                    ? media.file
                    : `http://localhost:1000${media.file}`
                }
                type="audio/mpeg"
              />
              Your browser does not support the audio tag.
            </audio>
          )}

          {media.media_type === "article" && (
            <div className="bg-white p-4 rounded shadow mt-4 whitespace-pre-wrap">
              {media.article_content}
            </div>
          )}

          {/* Info */}
          <h2 className="text-2xl font-bold mb-2 uppercase">{media.title}</h2>
          <p className="text-sm text-gray-600 mb-2 capitalize">
            Category: {media.media_type} | Uploaded:{" "}
            {new Date(media.uploaded_at).toDateString()}
          </p>
          <p className="mb-4 capitalize">{media.description}</p>

          {/* Tags */}
          {/* <div className="flex gap-2 mb-4 flex-wrap">
            {media.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div> */}

          {/* Like button (non-functional for now) */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            👍 Like
          </button>
        </section>

        {/* Comments */}
        <section className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Comments</h3>

          <div className="space-y-4">
            {comments.map((comment, idx) => (
              <div key={idx} className="border-b pb-2">
                <p className="font-bold">{comment.user}</p>
                <p className="text-sm">{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleCommentSubmit} className="mt-4">
            <textarea
              name="comment"
              className="w-full p-2 border rounded mb-2"
              rows="3"
              placeholder="Add a comment..."
              required
            />
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Post Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MediaDetail;
