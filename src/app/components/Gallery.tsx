"use client";
import { useState } from "react";
import Image from "next/image";

const allImages = [
  "image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg",
  "image6.jpg","image7.jpg","image8.jpg","image9.jpg","image10.jpg",
  "image11.jpg","image12.jpg","image13.jpg","image14.jpg","image15.jpg",
  "image16.jpg","image17.jpg","image18.jpg",
];

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? allImages : allImages.slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((img) => (
          <div key={img} className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm card-hover aspect-video relative bg-slate-100">
            <img
              src={`/assets/images/gallery/${img}`}
              alt={img.replace(".jpg", "")}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
        >
          {expanded ? "See Less ↑" : "Show More ↓"}
        </button>
      </div>
    </div>
  );
}
