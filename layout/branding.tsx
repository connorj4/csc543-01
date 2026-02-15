"use client";
import React from "react";


const Branding: React.FC = () => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="size-12 shrink-0 fill-current"
    >
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>

      <rect width="512" height="512" rx="96" fill="url(#bg)" />

      <path
        d="
    M140 160
    H372
    Q392 160 392 180
    V212
    Q360 224 360 256
    Q360 288 392 300
    V332
    Q392 352 372 352
    H140
    Q120 352 120 332
    V300
    Q152 288 152 256
    Q152 224 120 212
    V180
    Q120 160 140 160
    Z"
        fill="#334155"
      />

      <circle
        cx="256"
        cy="256"
        r="72"
        fill="none"
        stroke="#475569"
        strokeWidth="20"
      />
      <circle
        cx="256"
        cy="256"
        r="72"
        fill="none"
        stroke="url(#accent)"
        strokeWidth="20"
        strokeLinecap="round"
        strokeDasharray="340 452"
        transform="rotate(-90 256 256)"
      />

      <polyline
        points="220,258 246,284 296,228"
        fill="none"
        stroke="url(#accent)"
        strokeWidth="20"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Branding;
