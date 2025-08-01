import React, { useState } from "react";

const CommentBox = ({ videoId, onNewComment }) => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("videoId", videoId);
    formData.append("username", username);
    formData.append("content", content);

    const res = await fetch("http://localhost/backend/postComment.php", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (data.success) {
      onNewComment(data.comment);
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="p-2 border rounded"
      />
      <textarea
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-[#0B2B59] text-white px-4 py-2 rounded">
        Post Comment
      </button>
    </form>
  );
};

export default CommentBox;
