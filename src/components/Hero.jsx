import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve text contrast (does not block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              GestureAI
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                The Future of Seamless Control
              </span>
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
              Control your world with a flick of your hand or a whisper of your voice. 
              GestureAI blends computer vision and speech intelligence to command your devices—without touching them.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition">
                <Rocket className="h-4 w-4" />
                Try the Demo
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm md:text-base font-semibold text-white backdrop-blur hover:bg-white/20 transition">
                <Play className="h-4 w-4" />
                Watch Overview
              </button>
            </div>
            <div className="mt-6 text-xs md:text-sm text-white/60">
              Privacy-first • On-device AI • Cross‑device control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
