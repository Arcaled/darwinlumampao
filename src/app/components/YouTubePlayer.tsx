"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

export default function YouTubePlayer({ videoId, title }: YouTubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!iframeRef.current || !iframeRef.current.contentWindow) return;

    if (isPlaying) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: "" }),
        "*"
      );
      setIsPlaying(false);
    } else {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: "" }),
        "*"
      );
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 bg-slate-900 rounded-2xl p-4 shadow-xl border border-slate-800 space-y-4">
      {title && (
        <h3 className="text-lg font-bold text-white text-center">{title}</h3>
      )}
      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black group">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&disablekb=1&showinfo=0&fs=0&playsinline=1&iv_load_policy=3`}
          className="w-full h-full pointer-events-none select-none"
          allow="autoplay; encrypted-media"
          title={title || "Video Player"}
        />

        {/* Transparent overlay preventing clicks from reaching YouTube iframe directly */}
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
        >
          {!isPlaying && (
            <div className="p-4 rounded-full bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-transform">
              <Play className="w-10 h-10 fill-current ml-1" />
            </div>
          )}
        </div>
      </div>

      {/* Control bar containing ONLY Play/Pause button */}
      <div className="flex justify-center items-center pt-2">
        <button
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-all shadow-md active:scale-95"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5 fill-current" />
              <span>PAUSE</span>
            </>
          ) : (
            <>
              <Play className="w-5 h-5 fill-current" />
              <span>PLAY</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
