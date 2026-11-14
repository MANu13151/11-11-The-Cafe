import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Clock, Copy, Check, Gift, ArrowRight } from "lucide-react";
import { WISH_PRIZES } from "../data/menuData";
import { getWhatsAppLink } from "../data/config";

export default function WishWidget() {
  const [currentTime, setCurrentTime] = useState("");
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [isWished, setIsWished] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMakeWish = () => {
    setIsSpinning(true);
    
    // Emil Kowalski style spring delay
    setTimeout(() => {
      const random = WISH_PRIZES[Math.floor(Math.random() * WISH_PRIZES.length)];
      setSelectedPrize(random);
      setIsWished(true);
      setIsSpinning(false);

      // Trigger Confetti explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#432F2E", "#C1DBE8", "#FFF0B5", "#F4A261"]
        });
      } catch (e) {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 450);
  };

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="wish" className="py-12 bg-[#FCFBF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#C1DBE8] rounded-3xl p-8 sm:p-12 border-2 border-[#432F2E] shadow-[5px_5px_0px_#432F2E] relative overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute -right-8 -bottom-8 text-[#432F2E]/10 font-display font-black text-9xl select-none pointer-events-none">
            11:11
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFBF7] border border-[#432F2E] text-xs font-black uppercase tracking-wider text-[#432F2E] mb-4">
                <Clock className="w-3.5 h-3.5 text-[#432F2E]" />
                <span>Live Time: {currentTime || "11:11 PM"}</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#432F2E] tracking-tight mb-4">
                Make an 11:11 Wish. <br />
                <span className="bg-[#FFF0B5] px-2 py-0.5 rounded border border-[#432F2E]/20 inline-block rotate-[-0.5deg]">
                  Unlock an Instant Treat!
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#432F2E]/85 font-medium leading-relaxed mb-6">
                They say when the clock strikes 11:11, you make a wish. At 11:11 The Cafe, tap below to unlock a surprise complimentary cookie, 1+1 cooler, or discount for your table today.
              </p>

              <button
                onClick={handleMakeWish}
                disabled={isSpinning}
                className="btn-press px-8 py-4 rounded-full bg-[#432F2E] text-[#FFF0B5] font-black text-base border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] hover:shadow-[2px_2px_0px_#432F2E] flex items-center gap-3 cursor-pointer disabled:opacity-75 transition-all"
              >
                <Sparkles className={`w-5 h-5 text-[#FFF0B5] ${isSpinning ? "animate-spin" : ""}`} />
                <span>{isWished ? "Make Another Wish ✨" : "Make an 11:11 Wish Now"}</span>
              </button>
            </div>

            {/* Right Surprise Prize Card */}
            <div className="lg:col-span-5">
              {selectedPrize ? (
                <div className="bg-[#FCFBF7] rounded-2xl p-6 border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{selectedPrize.emoji}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FFF0B5] border border-[#432F2E] text-[11px] font-black tracking-wider text-[#432F2E]">
                      {selectedPrize.discount}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-[#432F2E] mb-1">
                    {selectedPrize.title}
                  </h3>
                  <p className="text-xs text-[#432F2E]/75 font-medium mb-4">
                    {selectedPrize.subtext}
                  </p>

                  {/* Coupon Code Pill */}
                  <div className="p-3 bg-[#C1DBE8]/30 rounded-xl border border-[#432F2E]/30 flex items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#432F2E]/60 tracking-wider">Coupon Code</div>
                      <div className="font-mono font-black text-base text-[#432F2E] tracking-widest">{selectedPrize.code}</div>
                    </div>
                    <button
                      onClick={() => handleCopy(selectedPrize.code)}
                      className="px-3 py-1.5 rounded-lg bg-[#FCFBF7] border border-[#432F2E] text-xs font-bold text-[#432F2E] hover:bg-[#FFF0B5] flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-[#432F2E]" />}
                      <span>{copied ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>

                  {/* Direct WhatsApp Claim */}
                  <a
                    href={getWhatsAppLink(`Hi 11:11 Cafe, I just unlocked voucher ${selectedPrize.code} (${selectedPrize.title}) on your website! Can I claim this with my order?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#432F2E] text-[#FFF0B5] font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#5A3E3D] transition-colors"
                  >
                    <span>Claim on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFF0B5]" />
                  </a>
                </div>
              ) : (
                <div className="bg-[#FCFBF7] rounded-2xl p-8 border-2 border-[#432F2E] border-dashed text-center flex flex-col items-center justify-center min-h-[260px]">
                  <div className="w-14 h-14 rounded-full bg-[#FFF0B5] border border-[#432F2E] flex items-center justify-center text-2xl mb-3 shadow-sm">
                    ✨
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#432F2E] mb-1">
                    Your Wish is Waiting
                  </h3>
                  <p className="text-xs text-[#432F2E]/70 max-w-xs">
                    Tap the button to test your 11:11 luck and reveal a secret table reward!
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
