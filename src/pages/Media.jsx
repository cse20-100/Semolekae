import React, { useState, useEffect } from "react";
import CommentSection from "../components/CommentSection";

const Media = () => {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get admin token from localStorage (set on login)
  const adminToken = localStorage.getItem("adminToken");
  const isAdmin = !!adminToken;

  // Fetch videos function
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost/semolekae-legal/get_videos.php");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load videos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // Upload video handler (admin only)
  const handleUpload = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !videoFile) {
      setError("Please provide both title and video file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("video", videoFile);

    try {
      const res = await fetch("http://localhost/semolekae-legal/upload_video.php", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      alert("Video uploaded successfully!");
      setTitle("");
      setVideoFile(null);
      fetchVideos();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete video handler (admin only)
  const deleteVideo = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      const res = await fetch("http://localhost/semolekae-legal/delete_video.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delete failed");
      }

      alert("Video deleted.");
      setVideos(videos.filter((v) => v.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#E5EEF5] text-[#0B2B59] font-sans px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Media Gallery</h1>

        {isAdmin && (
          <form
            onSubmit={handleUpload}
            className="mb-12 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#1B74E4]">Upload New Video</h2>
            {error && <p className="mb-3 text-red-600">{error}</p>}
            <input
              type="text"
              placeholder="Video Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-[#D1D9E6] p-3 rounded w-full mb-4 text-[#0B2B59]"
              required
            />
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              className="border border-[#D1D9E6] p-3 rounded w-full mb-6 text-[#0B2B59]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#1B74E4] hover:bg-[#0B2B59] text-white py-3 rounded font-semibold transition"
            >
              Upload Video
            </button>
          </form>
        )}

        {loading && <p className="text-center">Loading videos...</p>}

        {!loading && videos.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-20">No content yet. Please check back later.</p>
        )}

        <div className="space-y-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md p-6 border border-[#D1D9E6]"
            >
              <h3 className="text-xl font-semibold mb-4">{video.title}</h3>
              <video controls className="w-full rounded mb-4" preload="metadata">
                <source
                  src={`http://localhost/semolekae-legal/${video.video_path}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {isAdmin && (
                <button
                  onClick={() => deleteVideo(video.id)}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded mb-4"
                >
                  Delete Video
                </button>
              )}

              <CommentSection videoId={video.id} isAdmin={isAdmin} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
