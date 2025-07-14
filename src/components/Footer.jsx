import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-blue-400 text-white py-6 mt-10 shadow-inner shadow-green-200 dark:shadow-blue-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          © {new Date().getFullYear()} <span className="font-semibold">Apex shopy</span> — Made with 💚 & 💙 of happy customers
        </p>
        <div className="mt-2 text-xs opacity-80">
          Shopping with full of happiness!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
