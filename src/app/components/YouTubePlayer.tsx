"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Sparkles } from "lucide-react";

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
    <div className="w-full bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all duration-300 group/card relative overflow-hidden backdrop-blur-xl">
      {/* Subtle background ambient glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover/card:bg-emerald-500/20 transition-all duration-500 pointer-events-none" />

      {title && (
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover/card:text-emerald-400 transition-colors line-clamp-1">
            {title}
          </h3>
          <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
            <Sparkles className="w-3 h-3 text-emerald-400" /> HD
          </span>
        </div>
      )}

      <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950 shadow-inner group/video border border-slate-800">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&controls=0&rel=0&modestbranding=1&disablekb=1&showinfo=0&fs=0&playsinline=1&iv_load_policy=3`}
          className="w-full h-full pointer-events-none select-none"
          allow="autoplay; encrypted-media"
          title={title || "Video Player"}
        />

        {/* Overlay button to toggle video */}
        <div
          onClick={togglePlay}
          className="absolute inset-0 z-10 cursor-pointer flex items-center justify-center bg-black/30 group-hover/video:bg-black/10 transition-colors"
        >
          {!isPlaying && (
            <div className="p-4 sm:p-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/30 group-hover/video:scale-110 transition-all duration-300">
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
            </div>
          )}
        </div>
      </div>

      {/* Control bar containing ONLY Play/Pause button */}
      <div className="flex justify-center items-center pt-4">
        <button
          onClick={togglePlay}
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-md ${
            isPlaying
              ? "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30 hover:shadow-emerald-500/50"
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4 fill-current text-rose-400" />
              <span>PAUSE</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>PLAY VIDEO</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
