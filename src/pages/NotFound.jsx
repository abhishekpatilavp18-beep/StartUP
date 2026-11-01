import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        <span className="text-6xl sm:text-8xl font-black text-[#0b0b0c] tracking-tight block mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b0b0c] mb-4">
          Page not found
        </h1>
        <p className="text-[#6a6e6e] text-base mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="primary">
          Return Home
        </Button>
      </div>
    </div>
  );
}

