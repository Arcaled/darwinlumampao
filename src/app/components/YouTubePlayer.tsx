"use client";

import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    win.postMessage(
      JSON.stringify({ event: "command", func: isPlaying ? "pauseVideo" : "playVideo", args: "" }),
      "*"
    );
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
      {/* Video */}
      <div className="relative aspect-video bg-slate-100">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
          className="w-full h-full pointer-events-none"
          allow="autoplay; encrypted-media"
          title={title || "Video"}
        />
        <div
          onClick={toggle}
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
        >
          {!isPlaying && (
            <div className="p-4 rounded-full bg-white/90 shadow-xl group-hover:scale-110 transition-transform duration-200">
              <Play className="w-8 h-8 text-emerald-500 fill-emerald-500 ml-0.5" />
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-slate-100">
        {title && <p className="text-sm font-semibold text-slate-700 truncate pr-4">{title}</p>}
        <button
          onClick={toggle}
          type="button"
          className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
            isPlaying
              ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
              : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20"
          }`}
        >
          {isPlaying ? <><Pause className="w-3.5 h-3.5" />Pause</> : <><Play className="w-3.5 h-3.5 fill-current" />Play</>}
        </button>
      </div>
    </div>
  );
}
