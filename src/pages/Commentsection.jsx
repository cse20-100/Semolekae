import React, { useEffect, useState } from "react";

const CommentSection = ({ videoId, isAdmin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost/semolekae-legal/get_comments.php?video_id=${videoId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [videoId]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete this comment?");
    if (!confirmDelete) return;

    await fetch("http://localhost/semolekae-legal/delete_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const handleHide = async (id) => {
    await fetch("http://localhost/semolekae-legal/hide_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, hidden: "1" } : c))
    );
  };

  return (
    <div className="mt-4">
      <h3 className="font-medium mb-2 text-accent">Comments:</h3>
      {comments.filter(c => c.hidden !== "1").length > 0 ? (
        comments
          .filter((c) => c.hidden !== "1")
          .map((comment) => (
            <div
              key={comment.id}
              className="bg-light p-3 rounded mb-2 flex justify-between items-start border border-muted"
            >
              <span className="text-dark">{comment.text}</span>
              {isAdmin && (
                <div className="ml-4 space-x-2">
                  <button
                    onClick={() => handleHide(comment.id)}
                    className="text-yellow-600 text-sm hover:underline"
                  >
                    Hide
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
      ) : (
        <p className="text-muted">No comments yet.</p>
      )}
    </div>
  );
};

export default CommentSection;
