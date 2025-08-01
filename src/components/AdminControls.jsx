import React from "react";

const AdminControls = ({ comment, onDelete, onToggleVisibility }) => {
  const isAdmin = true; // Replace this with your actual admin check logic

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost/semolekae-legal/deleteComment.php?id=${comment.id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success) {
        onDelete(comment.id);
      } else {
        alert("Failed to delete comment: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error deleting comment: " + error.message);
    }
  };

  const handleToggle = async () => {
    try {
      const res = await fetch(
        `http://localhost/semolekae-legal/hideComment.php?id=${comment.id}`,
        {
          method: "PATCH",
        }
      );
      const data = await res.json();
      if (data.success) {
        onToggleVisibility(comment.id);
      } else {
        alert("Failed to toggle visibility: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      alert("Error toggling visibility: " + error.message);
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="mt-2 flex gap-2 text-sm">
      <button onClick={handleDelete} className="text-red-500 hover:underline">
        Delete
      </button>
      <button onClick={handleToggle} className="text-blue-500 hover:underline">
        {comment.hidden ? "Unhide" : "Hide"}
      </button>
    </div>
  );
};

export default AdminControls;
