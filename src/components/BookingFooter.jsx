import React, { useState } from "react";
import { 
  Calendar, Clock, Users, MapPin, Phone, MessageSquare, 
  Sparkles, CheckCircle, Navigation, ExternalLink, Heart 
} from "lucide-react";
import { CAFE_INFO, getWhatsAppLink } from "../data/config";

export default function BookingFooter({ bookingRef }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "4 Guests",
    date: new Date().toISOString().split("T")[0],
    time: "07:30 PM",
    seating: "Outdoor Evening Canopy",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*TABLE RESERVATION — 11:11 THE CAFE*\n• Name: ${formData.name || "Guest"}\n• Phone: ${formData.phone || "Not provided"}\n• Guests: ${formData.guests}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Seating Preference: ${formData.seating}\n• Special Requests: ${formData.notes || "None"}\n\nPlease confirm availability!`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(getWhatsAppLink(msg), "_blank");
    }, 400);
  };

  return (
    <footer id="visit" ref={bookingRef} className="bg-[#FCFBF7] pt-16 pb-12 border-t-2 border-[#432F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reservation Section */}
        <div className="mb-20">
          <div className="bg-[#FFF0B5] rounded-3xl p-8 sm:p-12 border-2 border-[#432F2E] shadow-[6px_6px_0px_#432F2E]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Copy */}
              <div className="lg:col-span-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFBF7] border border-[#432F2E] text-xs font-black uppercase tracking-wider text-[#432F2E] mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-[#432F2E]" />
                  <span>Reserve In Advance</span>
                </div>
                
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#432F2E] tracking-tight mb-4">
                  Squad Hangouts & Birthday Tables.
                </h2>
                
                <p className="text-sm sm:text-base text-[#432F2E]/85 font-medium leading-relaxed mb-6">
                  Planning a birthday surprise, college reunion, or late dinner with the gang? Book your table under our fairy-lit canopy or inside the cozy lounge.
                </p>

                <div className="space-y-3 border-t border-[#432F2E]/20 pt-6">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#432F2E]">
                    <div className="w-7 h-7 rounded-full bg-[#C1DBE8] border border-[#432F2E] flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>No advance booking fees — instant WhatsApp confirmation</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#432F2E]">
                    <div className="w-7 h-7 rounded-full bg-[#C1DBE8] border border-[#432F2E] flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>Custom birthday dessert plating & candle arrangement</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#432F2E]">
                    <div className="w-7 h-7 rounded-full bg-[#C1DBE8] border border-[#432F2E] flex items-center justify-center flex-shrink-0">
                      ✓
                    </div>
                    <span>Reserved parking space on Gandhi Path Road</span>
                  </div>
                </div>
              </div>

              {/* Right Reservation Form */}
              <div className="lg:col-span-7 bg-[#FCFBF7] p-6 sm:p-8 rounded-2xl border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E]">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-sm font-semibold text-[#432F2E] focus:outline-none focus:bg-[#FFF0B5]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98290 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-sm font-semibold text-[#432F2E] focus:outline-none focus:bg-[#FFF0B5]/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                        Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-xs font-bold text-[#432F2E] focus:outline-none cursor-pointer"
                      >
                        <option>2 Guests (Cozy)</option>
                        <option>4 Guests</option>
                        <option>6 Guests</option>
                        <option>8-12 Guests (Party)</option>
                        <option>15+ Guests (Full Gang)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-xs font-bold text-[#432F2E] focus:outline-none cursor-pointer"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-xs font-bold text-[#432F2E] focus:outline-none cursor-pointer"
                      >
                        <option>12:00 PM (Lunch)</option>
                        <option>02:30 PM (Afternoon)</option>
                        <option>05:30 PM (Evening Chai)</option>
                        <option>07:30 PM (Dinner Rush)</option>
                        <option>09:30 PM (Late Talks)</option>
                        <option>10:30 PM (Midnight Hangout)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                      Table Vibe Preference
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Outdoor Evening Canopy", "Indoor Cozy Booth", "Corner 11:11 Table"].map((vibe) => (
                        <button
                          key={vibe}
                          type="button"
                          onClick={() => setFormData({ ...formData, seating: vibe })}
                          className={`p-2 rounded-xl text-xs font-bold border cursor-pointer transition-all text-center ${
                            formData.seating === vibe
                              ? "bg-[#432F2E] text-[#FFF0B5] border-[#432F2E]"
                              : "bg-[#FCFBF7] text-[#432F2E] border-[#432F2E]/40 hover:bg-[#C1DBE8]/30"
                          }`}
                        >
                          {vibe}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-1.5">
                      Notes / Birthday Requests
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Birthday decoration, quiet corner, pre-order sandwich"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] text-xs font-semibold text-[#432F2E] focus:outline-none focus:bg-[#FFF0B5]/30"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-press w-full py-4 rounded-full bg-[#432F2E] text-[#FFF0B5] font-black text-sm border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] hover:shadow-[2px_2px_0px_#432F2E] flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FFF0B5]" />
                    <span>Confirm Table via WhatsApp</span>
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Info Card */}
          <div className="lg:col-span-5 bg-[#C1DBE8] rounded-3xl p-8 border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCFBF7] border border-[#432F2E] text-xs font-black uppercase tracking-wider text-[#432F2E] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#432F2E]" />
                <span>Find Our Door</span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#432F2E] mb-2">
                11:11 THE CAFE
              </h3>
              <p className="text-xs uppercase font-extrabold tracking-wider text-[#432F2E]/70 mb-6">
                Gandhi Path Road • Vaishali Nagar • Jaipur
              </p>

              <div className="space-y-4 text-sm font-semibold text-[#432F2E]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#432F2E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#432F2E]">Address:</span>
                    <p className="text-xs text-[#432F2E]/80 mt-0.5 font-medium leading-relaxed">
                      {CAFE_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#432F2E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#432F2E]">Opening Hours:</span>
                    <p className="text-xs text-[#432F2E]/80 mt-0.5 font-medium">
                      {CAFE_INFO.timings} • {CAFE_INFO.days}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#432F2E]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#432F2E]">Direct Call / Table Hotline:</span>
                    <p className="text-xs text-[#432F2E]/80 mt-0.5 font-mono font-bold">
                      <a href={`tel:${CAFE_INFO.phone}`} className="hover:underline">{CAFE_INFO.displayPhone}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#432F2E]/20 mt-6 flex gap-3">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex-1 py-2.5 px-4 rounded-xl bg-[#FCFBF7] border border-[#432F2E] text-xs font-bold text-[#432F2E] flex items-center justify-center gap-1.5 hover:bg-[#FFF0B5]"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
              <a
                href={getWhatsAppLink("Hi 11:11 The Cafe, are you open right now?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press flex-1 py-2.5 px-4 rounded-xl bg-[#432F2E] text-[#FFF0B5] text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-[#5A3E3D]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FFF0B5]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Interactive Google Map Frame with Styled Map Graphic */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] min-h-[340px] bg-[#EAE6DF] relative flex flex-col justify-between p-6 sm:p-8">
            {/* Background Map Graphic Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#432F2E" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Diagonal main road representing Gandhi Path Rd */}
                <line x1="0" y1="280" x2="800" y2="40" stroke="#432F2E" strokeWidth="8" strokeLinecap="round" />
                <line x1="0" y1="280" x2="800" y2="40" stroke="#FFF0B5" strokeWidth="4" strokeDasharray="10 10" />
              </svg>
            </div>

            {/* Top Label */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FCFBF7] border border-[#432F2E] text-xs font-black uppercase text-[#432F2E] tracking-wider shadow-sm">
                Vaishali Nagar Hub
              </span>
              <span className="text-xs font-bold text-[#432F2E]/70 bg-[#FCFBF7]/80 px-2 py-0.5 rounded border border-[#432F2E]/20">
                Plot 91, B-Block
              </span>
            </div>

            {/* Central Animated Location Pin Card */}
            <div className="relative z-10 self-center my-6 max-w-sm w-full bg-[#FCFBF7] p-5 rounded-2xl border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] text-center animate-bounce-short">
              <div className="w-12 h-12 rounded-full bg-[#432F2E] text-[#FFF0B5] flex items-center justify-center mx-auto mb-2.5 shadow-md">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="font-display font-black text-lg text-[#432F2E]">
                11:11 THE CAFE
              </h4>
              <p className="text-xs font-semibold text-[#432F2E]/80 mt-1">
                Plot 91, Gandhi Path Rd, Arpit Nagar, B Block, Vaishali Nagar, Jaipur
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF0B5] text-[#432F2E] text-[11px] font-black border border-[#432F2E]/40">
                <Sparkles className="w-3 h-3 text-[#432F2E]" />
                <span>Near Vaishali Circle • Ample Parking</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#432F2E]/20">
              <span className="text-xs font-bold text-[#432F2E]">
                Coordinates: 26.905° N, 75.742° E
              </span>
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press px-4 py-2 rounded-xl bg-[#432F2E] text-[#FFF0B5] text-xs font-bold flex items-center gap-1.5 shadow-sm hover:bg-[#5A3E3D]"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#FFF0B5]" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t-2 border-[#432F2E]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#432F2E]/70">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#432F2E]">11:11 THE CAFE</span>
            <span>•</span>
            <span>Plot 91, Gandhi Path Rd, Vaishali Nagar, Jaipur</span>
          </div>

          <div className="flex items-center gap-1 text-[#432F2E]/80">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 inline" />
            <span>for Vaishali Nagar food lovers</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
