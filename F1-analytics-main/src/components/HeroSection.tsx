/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Gauge, PlayCircle, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreDashboard: () => void;
  onExploreStory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDashboard,
  onExploreStory,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Ambience & Atmospheric Skyscraper Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Deep Red Radial Glow */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1100px] h-[500px] bg-[#ef233c]/12 rounded-full blur-[150px]" />
        
        {/* Subtle Skyscraper Silhouettes on Right side (matching screenshot reference) */}
        <div className="absolute right-0 bottom-0 top-12 w-full lg:w-1/2 opacity-25 lg:opacity-35 pointer-events-none overflow-hidden select-none">
          <svg
            className="w-full h-full object-cover text-zinc-700"
            viewBox="0 0 600 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMid slice"
          >
            <defs>
              <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#27272a" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#18181b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#09090b" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="windowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef233c" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Modern architectural high-rise facades */}
            <rect x="220" y="80" width="130" height="720" fill="url(#buildingGrad)" stroke="rgba(255,255,255,0.08)" />
            <line x1="240" y1="80" x2="240" y2="800" stroke="rgba(255,255,255,0.05)" />
            <line x1="270" y1="80" x2="270" y2="800" stroke="rgba(255,255,255,0.05)" />
            <line x1="310" y1="80" x2="310" y2="800" stroke="rgba(255,255,255,0.05)" />
            
            {/* Angled High-Rise Tower */}
            <polygon points="370,40 490,90 490,800 370,800" fill="url(#buildingGrad)" stroke="rgba(239,35,60,0.15)" />
            <line x1="410" y1="58" x2="410" y2="800" stroke="rgba(255,255,255,0.04)" />
            <line x1="450" y1="74" x2="450" y2="800" stroke="rgba(255,255,255,0.04)" />

            {/* Background Spire */}
            <rect x="120" y="240" width="80" height="560" fill="url(#buildingGrad)" stroke="rgba(255,255,255,0.05)" />
            <line x1="160" y1="180" x2="160" y2="240" stroke="#ef233c" strokeWidth="2" opacity="0.6" />

            {/* Distant skyline towers */}
            <rect x="500" y="160" width="100" height="640" fill="url(#buildingGrad)" stroke="rgba(255,255,255,0.05)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 carbon-grid [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-[#ef233c]/50 transition-all shadow-[0_0_20px_rgba(239,35,60,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef233c] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef233c]" />
          </span>
          <span className="text-xs font-mono-telemetry uppercase text-red-100 tracking-widest font-semibold">
            [ LIVE RACE ANALYTICS PLATFORM ]
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-chakra uppercase tracking-tight leading-none mb-6">
          FORMULA <span className="text-[#ef233c] inline-block hover:scale-105 transition-transform drop-shadow-[0_0_25px_rgba(239,35,60,0.8)]">1</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 tracking-wider">
            RACE INTELLIGENCE
          </span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-chakra font-normal text-zinc-400 tracking-[0.25em] mt-2">
            DASHBOARD
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed font-inter font-light">
          Deep-dive analytics into Formula 1 Championship data — from driver performance metrics and team strategy to circuit analysis and historical championship trends. Powered by Tableau visualization intelligence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 w-full sm:w-auto">
          <a
            href="#dashboard"
            onClick={(e) => {
              e.preventDefault();
              onExploreDashboard();
              document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full bg-[#ef233c] text-white font-chakra font-bold text-sm tracking-wider uppercase hover:bg-red-600 transition-all shadow-[0_0_30px_rgba(239,35,60,0.5)] hover:shadow-[0_0_40px_rgba(239,35,60,0.8)] flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
          >
            <Gauge className="w-4 h-4" />
            VIEW DASHBOARD
          </a>

          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              onExploreStory();
              document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full bg-zinc-950/80 border border-zinc-700/80 text-zinc-200 font-chakra font-bold text-sm tracking-wider uppercase hover:text-white hover:border-[#ef233c]/60 hover:bg-zinc-900 transition-all flex items-center justify-center gap-2.5 backdrop-blur-md active:scale-95 cursor-pointer"
          >
            <PlayCircle className="w-4 h-4 text-[#ef233c]" />
            EXPLORE STORY
          </a>
        </div>

        {/* Hero Macro KPI Grid (4 Columns) matching image */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#ef233c]/30 hover:bg-white/[0.04] transition-all">
            <div className="text-3xl lg:text-4xl font-black font-mono-telemetry text-white mb-1">
              75+
            </div>
            <div className="text-xs font-mono-telemetry uppercase text-zinc-400 tracking-wider">
              SEASONS ANALYZED
            </div>
          </div>

          <div className="p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#ef233c]/30 hover:bg-white/[0.04] transition-all">
            <div className="text-3xl lg:text-4xl font-black font-mono-telemetry text-[#ef233c] mb-1 drop-shadow-[0_0_15px_rgba(239,35,60,0.5)]">
              1K+
            </div>
            <div className="text-xs font-mono-telemetry uppercase text-zinc-400 tracking-wider">
              RACES COVERED
            </div>
          </div>

          <div className="p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#ef233c]/30 hover:bg-white/[0.04] transition-all">
            <div className="text-3xl lg:text-4xl font-black font-mono-telemetry text-white mb-1">
              20
            </div>
            <div className="text-xs font-mono-telemetry uppercase text-zinc-400 tracking-wider">
              ACTIVE DRIVERS
            </div>
          </div>

          <div className="p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:border-[#ef233c]/30 hover:bg-white/[0.04] transition-all">
            <div className="text-3xl lg:text-4xl font-black font-mono-telemetry text-white mb-1">
              10
            </div>
            <div className="text-xs font-mono-telemetry uppercase text-zinc-400 tracking-wider">
              CONSTRUCTORS
            </div>
          </div>
        </div>

        {/* Scroll Mouse Indicator */}
        <a
          href="#project"
          className="mt-12 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors group cursor-pointer"
          aria-label="Scroll to Project Overview"
        >
          <div className="w-5 h-8 rounded-full border-2 border-zinc-600 group-hover:border-[#ef233c] flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-zinc-400 group-hover:bg-[#ef233c] animate-bounce transition-colors" />
          </div>
          <span className="text-[10px] font-mono-telemetry uppercase tracking-[0.2em]">
            SCROLL
          </span>
        </a>
      </div>
    </section>
  );
};
