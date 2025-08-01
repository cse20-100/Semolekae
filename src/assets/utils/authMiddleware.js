// src/utils/authMiddleware.js

// Check if admin is authenticated
export const isAdminAuthenticated = () => {
  const token = localStorage.getItem("adminToken");
  return Boolean(token);
};

// Force redirect if not authenticated
export const requireAdminAuth = (navigate) => {
  if (!isAdminAuthenticated()) {
    navigate("/login");
  }
};

// Optional: Logout admin
export const logoutAdmin = (navigate) => {
  localStorage.removeItem("adminToken");
  navigate("/login");
};
