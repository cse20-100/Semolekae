import React, { useEffect, useState } from "react";

const VideoCard = ({ video }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch(`http://localhost/semolekae-legal/get_comments.php?video_id=${video.id}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [video.id]);

  const submitComment = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost/semolekae-legal/post_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ video_id: video.id, username, comment }),
    });
    const data = await res.json();
    if (data.success) {
      setComments([{ username, content: comment }, ...comments]);
      setComment("");
      setUsername("");
    }
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
      <video width="100%" height="300" controls>
        <source src={`http://localhost/semolekae-legal/${video.video_path}`} type="video/mp4" />
      </video>

      {/* Comments */}
      <form onSubmit={submitComment} className="mt-4 flex flex-col gap-2">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your name"
          className="border p-2"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment"
          className="border p-2"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Post Comment</button>
      </form>

      <ul className="mt-4">
        {comments.map((c, i) => (
          <li key={i} className="border-b py-2">
            <strong>{c.username}</strong>: {c.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoCard;
