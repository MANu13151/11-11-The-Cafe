import React, { useState } from "react";
import { Sparkles, Flame, Clock, QrCode, ArrowRight, Check } from "lucide-react";
import { MENU_CATEGORIES, SIGNATURE_ITEMS, FULL_MENU } from "../data/menuData";
import { getWhatsAppLink } from "../data/config";

export default function AllDayMenu({ onOpenQr, onSelectItemForOrder }) {
  const [activeCategory, setActiveCategory] = useState("sandwiches");

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#432F2E] text-[#FCFBF7] relative overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5A3E3D] rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#FCFBF7]/15">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0B5] text-[#432F2E] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#432F2E]" />
              <span>Served Fresh Daily</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#FFF0B5] tracking-tight">
              The All-Day Menu
            </h2>
            <p className="text-sm sm:text-base text-[#FCFBF7]/80 mt-2 max-w-xl font-medium">
              Real ingredients, grilled fresh sourdough, authentic Delhi spices, and chilled shake creations.
            </p>
          </div>

          {/* Quick QR Table Menu Trigger */}
          <button
            onClick={onOpenQr}
            className="btn-press self-start md:self-end px-5 py-3 rounded-full bg-[#C1DBE8] text-[#432F2E] font-bold text-sm border-2 border-[#FCFBF7]/20 flex items-center gap-2.5 shadow-md cursor-pointer hover:bg-[#D7E8F0]"
          >
            <QrCode className="w-4 h-4 text-[#432F2E]" />
            <span>Preview Table QR Menu</span>
            <ArrowRight className="w-4 h-4 text-[#432F2E]" />
          </button>
        </div>

        {/* Two Featured Signature Dishes Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFF0B5]"></span>
            <h3 className="font-display font-bold text-xl text-[#FFF0B5] tracking-wide uppercase text-sm">
              Two Iconic House Signatures
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SIGNATURE_ITEMS.map((item) => (
              <div 
                key={item.id}
                className="bg-[#2A1D1C] rounded-3xl border-2 border-[#FCFBF7]/20 overflow-hidden flex flex-col justify-between hover:border-[#FFF0B5]/60 transition-all shadow-xl group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-black/40">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-[#432F2E]/90 backdrop-blur-sm border border-[#FFF0B5]/40 text-[#FFF0B5] text-[11px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-[#FFF0B5] text-[#432F2E] text-sm font-black shadow-md border border-[#432F2E]">
                      {item.price}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <h4 className="font-display font-extrabold text-xl sm:text-2xl text-[#FCFBF7] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#FCFBF7]/75 font-medium leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-[#432F2E]/60 border border-[#FCFBF7]/10 text-xs">
                      <div>
                        <div className="text-[10px] text-[#FCFBF7]/50 font-bold uppercase">Spiciness</div>
                        <div className="font-bold text-[#FFF0B5] mt-0.5">{item.spicyLevel}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#FCFBF7]/50 font-bold uppercase">Prep Time</div>
                        <div className="font-bold text-[#FFF0B5] mt-0.5">{item.prepTime}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#FCFBF7]/50 font-bold uppercase">Portion</div>
                        <div className="font-bold text-[#FFF0B5] mt-0.5">{item.calories}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={getWhatsAppLink(`Hi 11:11 Cafe, I'd like to order the signature ${item.name} (${item.price}) for table reservation!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#C1DBE8] text-[#432F2E] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#FFF0B5] transition-colors shadow-sm"
                  >
                    <span>Order for Table via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-[#432F2E]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-press px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#FFF0B5] text-[#432F2E] border-2 border-[#FFF0B5] shadow-sm"
                    : "bg-[#2A1D1C] text-[#FCFBF7]/80 hover:text-[#FCFBF7] border border-[#FCFBF7]/20 hover:border-[#FCFBF7]/50"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-[#432F2E] text-[#FFF0B5]" : "bg-[#432F2E]/60 text-[#FCFBF7]/60"}`}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Full Menu Category Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {FULL_MENU[activeCategory].map((dish, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#2A1D1C]/80 border border-[#FCFBF7]/15 hover:border-[#C1DBE8] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-sm border-2 border-emerald-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#FCFBF7]">
                      {dish.name}
                    </h4>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-mono font-bold text-base text-[#FFF0B5]">{dish.price}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#FCFBF7]/70 font-medium leading-relaxed mb-4">
                  {dish.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#FCFBF7]/10 text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-[#432F2E] border border-[#FFF0B5]/30 text-[#FFF0B5] text-[10px] font-bold uppercase tracking-wider">
                  {dish.tag}
                </span>
                
                <a
                  href={getWhatsAppLink(`Hi 11:11 Cafe, I'd like to reserve a table and pre-order ${dish.name} (${dish.price})!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#C1DBE8] hover:text-[#FFF0B5] transition-colors flex items-center gap-1"
                >
                  <span>Pre-order</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
