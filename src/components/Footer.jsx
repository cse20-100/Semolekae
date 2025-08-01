import React from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/26774908846", // WhatsApp chat link
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/profile.php?id=100089297755740&mibextid=ZbWKwL",
    label: "Facebook",
    color: "#1877F2",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/somolekae_and_associates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    label: "Instagram",
    color: "#E4405F",
  },
  {
    icon: <FaYoutube />,
    url: "https://youtube.com/@kgwaso?si=15aIM-khqp505f8g",
    label: "YouTube",
    color: "#FF0000",
  },
];

const Footer = () => (
  <footer className="mt-4 bg-gray-50 border-t border-gray-200 py-6">
    <div className="max-w-6xl mx-auto flex justify-center space-x-6 mb-3">
      {socialLinks.map(({ icon, url, label, color }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-2xl transition-transform transform hover:scale-110"
          style={{ color }}
        >
          {icon}
        </a>
      ))}
    </div>
    <p className="text-center text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Somolekae & Associates. All rights reserved.
    </p>
  </footer>
);

export default Footer;
