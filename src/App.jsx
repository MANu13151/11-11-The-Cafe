import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import WishWidget from "./components/WishWidget";
import AllDayMenu from "./components/AllDayMenu";
import QrModal from "./components/QrModal";
import BookingFooter from "./components/BookingFooter";

export default function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const bookingRef = useRef(null);

  const scrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] text-[#432F2E] flex flex-col font-sans selection:bg-[#C1DBE8] selection:text-[#432F2E]">
      {/* Top Navigation */}
      <Navbar 
        onOpenBooking={scrollToBooking} 
        onOpenQr={() => setIsQrOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Asymmetric Color-Blocked Hero */}
        <Hero 
          onOpenBooking={scrollToBooking} 
          onScrollToMenu={scrollToMenu} 
        />

        {/* 3 Pillars Feature Strip in Vanilla Custard (#FFF0B5) */}
        <FeatureStrip />

        {/* 11:11 Make a Wish Emil Kowalski-style Interactive Widget */}
        <WishWidget />

        {/* All Day Menu in Deep Mocha (#432F2E) with Signature Dishes */}
        <AllDayMenu 
          onOpenQr={() => setIsQrOpen(true)} 
        />
      </main>

      {/* Group Hangout & Birthday Table Booking + Location Footer */}
      <BookingFooter bookingRef={bookingRef} />

      {/* Contactless QR Ordering Simulator Modal */}
      <QrModal 
        isOpen={isQrOpen} 
        onClose={() => setIsQrOpen(false)} 
      />
    </div>
  );
}
