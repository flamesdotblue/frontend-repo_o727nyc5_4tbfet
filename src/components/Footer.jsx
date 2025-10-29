import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} GestureAI. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#how" className="hover:text-gray-900 transition">How it works</a>
          <a href="#privacy" className="hover:text-gray-900 transition">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
