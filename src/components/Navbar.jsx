import React, { useState } from "react";
import { Clock, Menu, X, Sparkles, MapPin } from "lucide-react";
import { CAFE_INFO } from "../data/config";

export default function Navbar({ onOpenBooking, onOpenQr }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-[#432F2E]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-semibold text-[#432F2E]">
            <a 
              href="#hangout" 
              className="hover:text-[#432F2E]/70 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#432F2E] hover:after:w-full after:transition-all"
            >
              The Hangout
            </a>
            <a 
              href="#menu" 
              className="hover:text-[#432F2E]/70 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#432F2E] hover:after:w-full after:transition-all"
            >
              All-Day Menu
            </a>
            <button 
              onClick={onOpenQr}
              className="hover:text-[#432F2E]/70 transition-colors py-1 flex items-center gap-1.5 cursor-pointer text-left"
            >
              <Sparkles className="w-4 h-4 text-[#432F2E]" />
              <span>QR Table Order</span>
            </button>
            <a 
              href="#visit" 
              className="hover:text-[#432F2E]/70 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#432F2E] hover:after:w-full after:transition-all"
            >
              Visit & Map
            </a>
          </nav>

          {/* Center Geometric Emblem */}
          <a 
            href="#" 
            className="flex items-center gap-2.5 group py-1"
          >
            <div className="w-10 h-10 rounded-xl bg-[#432F2E] flex items-center justify-center text-[#FFF0B5] font-black text-sm tracking-tighter border border-[#432F2E] group-hover:bg-[#5A3E3D] transition-colors shadow-sm">
              11:11
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#432F2E] leading-none">
                11:11 THE CAFE
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#432F2E]/60 mt-0.5">
                Vaishali Nagar • Jaipur
              </span>
            </div>
          </a>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#C1DBE8]/40 text-[#432F2E] border border-[#C1DBE8]">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Open till 11:30 PM</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="btn-press px-5 py-2.5 rounded-full bg-[#432F2E] text-[#FFF0B5] text-sm font-bold shadow-sm hover:bg-[#5A3E3D] cursor-pointer flex items-center gap-2 border border-[#432F2E]"
            >
              <Clock className="w-4 h-4 text-[#FFF0B5]" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="btn-press px-3 py-1.5 rounded-full bg-[#432F2E] text-[#FFF0B5] text-xs font-bold"
            >
              Book Table
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#432F2E] hover:bg-[#C1DBE8]/30 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFBF7] border-b border-[#432F2E]/15 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#C1DBE8]/30 text-xs font-bold text-[#432F2E]">
            <MapPin className="w-4 h-4 text-[#432F2E]" />
            <span>Gandhi Path Road, Vaishali Nagar, Jaipur</span>
          </div>
          <a
            href="#hangout"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-[#432F2E] hover:bg-[#FFF0B5]/40"
          >
            The Hangout
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-[#432F2E] hover:bg-[#FFF0B5]/40"
          >
            All-Day Menu
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQr();
            }}
            className="w-full text-left px-3 py-2 rounded-lg text-base font-bold text-[#432F2E] hover:bg-[#FFF0B5]/40 flex items-center justify-between"
          >
            <span>QR Table Order Preview</span>
            <Sparkles className="w-4 h-4 text-[#432F2E]" />
          </button>
          <a
            href="#wish"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-[#432F2E] hover:bg-[#FFF0B5]/40"
          >
            11:11 Make a Wish Widget
          </a>
          <a
            href="#visit"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-bold text-[#432F2E] hover:bg-[#FFF0B5]/40"
          >
            Visit & Map
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-full bg-[#432F2E] text-[#FFF0B5] text-center font-bold text-sm shadow-md"
            >
              Reserve a Table via WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
