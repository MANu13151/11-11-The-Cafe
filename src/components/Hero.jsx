import React from "react";
import { Star, Clock, ArrowRight, Sparkles, Flame, Coffee, Heart } from "lucide-react";
import { CAFE_INFO } from "../data/config";

export default function Hero({ onOpenBooking, onScrollToMenu }) {
  return (
    <section className="relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Asymmetric Color Blocked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Left Block: Pale Sky Canvas (#C1DBE8) with Deep Mocha Typography */}
          <div className="lg:col-span-7 bg-[#C1DBE8] rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-[#432F2E] flex flex-col justify-between shadow-[4px_4px_0px_#432F2E]">
            <div>
              {/* Rating & Location Tag */}
              <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#FCFBF7] border border-[#432F2E] text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#432F2E] mb-6 shadow-sm max-w-full">
                <span className="flex items-center text-amber-600">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 mr-1" />
                  {CAFE_INFO.rating}
                </span>
                <span className="text-[#432F2E]/40">•</span>
                <span>{CAFE_INFO.reviewCount} Reviews</span>
                <span className="text-[#432F2E]/40">•</span>
                <span>Gandhi Path Rd</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-5xl text-[#432F2E] tracking-tight leading-[1.08] mb-6">
                Good Food, Late Talks & Your <span className="bg-[#FFF0B5] px-2 py-0.5 rounded-md border border-[#432F2E]/20 inline-block rotate-[-1deg]">11:11 Spot.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-[#432F2E]/85 text-base sm:text-lg leading-relaxed max-w-xl font-medium mb-8">
                From triple-layered grilled corn club sandwiches to piping-hot puffed Delhi-style chole bhature and cold thick shakes. A cozy twilight-to-midnight hangout on Gandhi Path Road for your college crew and best conversations.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={onOpenBooking}
                  className="btn-press px-6 py-3.5 rounded-full bg-[#432F2E] text-[#FFF0B5] font-bold text-sm sm:text-base border border-[#432F2E] shadow-[3px_3px_0px_#432F2E] hover:shadow-[1px_1px_0px_#432F2E] hover:translate-x-[1px] hover:translate-y-[1px] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#FFF0B5]" />
                  <span>Reserve a Table</span>
                  <ArrowRight className="w-4 h-4 text-[#FFF0B5]" />
                </button>

                <button
                  onClick={onScrollToMenu}
                  className="btn-press px-6 py-3.5 rounded-full bg-[#FCFBF7] text-[#432F2E] font-bold text-sm sm:text-base border-2 border-[#432F2E] shadow-[3px_3px_0px_#432F2E] hover:bg-[#FFF0B5] transition-all cursor-pointer"
                >
                  Explore All-Day Menu
                </button>
              </div>
            </div>

            {/* Micro Highlights Pill Bar */}
            <div className="pt-6 border-t border-[#432F2E]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-[#432F2E]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping"></div>
                <span>Open Daily: 11:00 AM – 11:30 PM</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-700" />
                  Freshly Grilled
                </span>
                <span className="inline-flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-600" />
                  Pocket Friendly
                </span>
              </div>
            </div>
          </div>

          {/* Right Block: Framed Food Showcase (image_2de93c.jpg) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 rounded-3xl bg-[#FFF0B5] p-3 sm:p-4 border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] flex flex-col">
              
              {/* Food Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#432F2E] bg-[#432F2E] h-[320px] sm:h-[400px] lg:h-[420px]">
                <img
                  src="/assets/image_2de93c.jpg"
                  alt="Loaded Grilled Corn & Herb Club Sandwich at 11:11 The Cafe"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Top Corner Pill */}
                <div className="absolute top-4 left-4 bg-[#FCFBF7]/95 backdrop-blur-sm border border-[#432F2E] rounded-full px-3 py-1 text-xs font-extrabold text-[#432F2E] shadow-sm flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  <span>House Hero • ₹189</span>
                </div>
              </div>

              {/* Bottom Info Strip - Engineered with Clean Spacing to Avoid Overlap */}
              <div className="mt-4 p-4 rounded-xl bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-extrabold text-[#432F2E] text-base leading-tight">
                    Grilled Corn & Herb Club
                  </h3>
                  <p className="text-xs font-medium text-[#432F2E]/70 mt-0.5">
                    Double-deck sourdough with roasted corn & herb aioli
                  </p>
                </div>
                
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C1DBE8] border border-[#432F2E] text-xs font-bold text-[#432F2E]">
                  <Clock className="w-3.5 h-3.5 text-[#432F2E]" />
                  <span>Open Till 11:30 PM</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
