import React, { useEffect, useState } from "react";

const CommentSection = ({ videoId, isAdmin }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const fetchComments = () => {
    fetch(`http://localhost/semolekae-legal/get_comments.php?video_id=${videoId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const postComment = async () => {
    if (!newComment.trim()) return;
    await fetch("http://localhost/semolekae-legal/post_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ video_id: videoId, comment: newComment }),
    });
    setNewComment("");
    fetchComments();
  };

  const hideComment = async (id) => {
    await fetch("http://localhost/semolekae-legal/hide_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_id: id }),
    });
    fetchComments();
  };

  const deleteComment = async (id) => {
    await fetch("http://localhost/semolekae-legal/delete_comment.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_id: id }),
    });
    fetchComments();
  };

  return (
    <div>
      <h3 className="text-lg font-bold mt-4 mb-2">Comments</h3>

      {/* Show Comments */}
      <div className="space-y-2">
        {comments.map((c) => (
          <div key={c.id} className="border p-2 rounded bg-gray-100">
            <p className={`${c.hidden === "1" && !isAdmin ? "hidden" : ""}`}>{c.comment}</p>

            {isAdmin && (
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => hideComment(c.id)}
                  className="bg-yellow-600 text-white px-2 py-1 rounded text-sm"
                >
                  {c.hidden === "1" ? "Unhide" : "Hide"}
                </button>
                <button
                  onClick={() => deleteComment(c.id)}
                  className="bg-red-700 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comment Input (Optional for users) */}
      {!isAdmin && (
        <div className="mt-4 flex flex-col gap-2">
          <textarea
            className="border p-2 w-full"
            rows="2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add your comment..."
          ></textarea>
          <button
            className="bg-blue-700 text-white px-4 py-2 rounded w-fit"
            onClick={postComment}
          >
            Post Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
