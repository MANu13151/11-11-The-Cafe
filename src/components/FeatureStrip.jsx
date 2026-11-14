import React from "react";
import { UtensilsCrossed, Moon, Wallet, Sparkles } from "lucide-react";

export default function FeatureStrip() {
  const features = [
    {
      num: "01",
      icon: UtensilsCrossed,
      title: "All-Day Comfort Cravings",
      desc: "Freshly pressed multigrain club toasties, smoking hot Delhi-style chole bhature, and thick belgian chocolate shakes made to order."
    },
    {
      num: "02",
      icon: Moon,
      title: "Open-Air Evening Canopy",
      desc: "Draped canopy seating, glowing ambient bulbs, and chill background lo-fi beats designed for long talks that easily stretch past 11 PM."
    },
    {
      num: "03",
      icon: Wallet,
      title: "Pocket-Friendly Hangout",
      desc: "Generous portions made for table sharing without burning a hole in your wallet. Great food and welcoming vibes on Gandhi Path Road."
    }
  ];

  return (
    <section id="hangout" className="py-12 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b-2 border-[#432F2E]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C1DBE8] border border-[#432F2E] text-xs font-black uppercase tracking-wider text-[#432F2E] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#432F2E]" />
              <span>The 11:11 Experience</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#432F2E] tracking-tight">
              Why Vaishali Nagar Hangs Out Here
            </h2>
          </div>
          <p className="text-sm font-semibold text-[#432F2E]/70 mt-2 sm:mt-0 max-w-xs">
            A no-fuss neighborhood cafe built for good food, warm chai, and late-night memories.
          </p>
        </div>

        {/* 3 Pillars Container in Vanilla Custard (#FFF0B5) */}
        <div className="bg-[#FFF0B5] rounded-3xl border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#432F2E]">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-8 sm:p-10 flex flex-col justify-between hover:bg-[#FFE88C]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display font-black text-2xl text-[#432F2E]/40">
                        {item.num}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-center text-[#432F2E] shadow-sm">
                        <Icon className="w-6 h-6 text-[#432F2E]" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#432F2E] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#432F2E]/80 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-[#432F2E]/20 flex items-center text-xs font-bold text-[#432F2E]">
                    <span>Spot # {item.num} • Gandhi Path Rd</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
