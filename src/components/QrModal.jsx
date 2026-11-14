import React, { useState } from "react";
import { X, QrCode, Sparkles, Check, ArrowRight, Plus, Minus, Smartphone } from "lucide-react";
import { SIGNATURE_ITEMS, FULL_MENU } from "../data/menuData";
import { CAFE_INFO, getWhatsAppLink } from "../data/config";

export default function QrModal({ isOpen, onClose }) {
  const [selectedTable, setSelectedTable] = useState("04 (Outdoor Canopy)");
  const [orderItems, setOrderItems] = useState([
    { name: "Loaded Grilled Corn & Herb Club", price: 189, qty: 1 },
    { name: "Classic Delhi-Style Chole Bhature", price: 219, qty: 1 }
  ]);

  if (!isOpen) return null;

  const tables = [
    "01 (Front Yard Lounge)",
    "02 (Window Arched Table)",
    "03 (Indoor Cozy Booth)",
    "04 (Outdoor Canopy)",
    "06 (Garden Terrace)",
    "08 (Large Birthday Table)",
    "11 (Corner 11:11 Booth)"
  ];

  const updateQty = (index, delta) => {
    setOrderItems((prev) => {
      const copy = [...prev];
      copy[index].qty = Math.max(0, copy[index].qty + delta);
      return copy.filter((item) => item.qty > 0);
    });
  };

  const addItem = (name, price) => {
    setOrderItems((prev) => {
      const exists = prev.find((item) => item.name === name);
      if (exists) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { name, price, qty: 1 }];
    });
  };

  const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSendToKitchen = () => {
    const itemList = orderItems.map((it) => `• ${it.qty}x ${it.name} (₹${it.price * it.qty})`).join("\n");
    const msg = `*TABLE ORDER — 11:11 THE CAFE*\nTable: ${selectedTable}\n\n*Items:*\n${itemList}\n\n*Total Bill:* ₹${totalAmount}\n_Sent via Contactless QR Menu_`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div 
        className="bg-[#FCFBF7] rounded-3xl border-2 border-[#432F2E] shadow-[8px_8px_0px_#432F2E] w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#C1DBE8] border-b-2 border-[#432F2E] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#432F2E] flex items-center justify-center text-[#FFF0B5]">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#432F2E]">
                Contactless QR Ordering
              </h3>
              <p className="text-xs font-semibold text-[#432F2E]/70">
                11:11 The Cafe • Gandhi Path Rd
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FCFBF7] border border-[#432F2E] flex items-center justify-center text-[#432F2E] hover:bg-[#FFF0B5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Table Selector */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-2">
              Select Your Table
            </label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#FCFBF7] border-2 border-[#432F2E] font-bold text-sm text-[#432F2E] focus:outline-none focus:bg-[#FFF0B5]/20 cursor-pointer"
            >
              {tables.map((t) => (
                <option key={t} value={t}>
                  Table {t}
                </option>
              ))}
            </select>
          </div>

          {/* Current Table Cart */}
          <div className="p-4 rounded-2xl bg-[#FFF0B5]/40 border border-[#432F2E]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase text-[#432F2E] tracking-wider">
                Current Table Items ({orderItems.length})
              </span>
              <span className="text-xs font-bold text-[#432F2E]">Table {selectedTable.split(" ")[0]}</span>
            </div>

            {orderItems.length === 0 ? (
              <p className="text-xs text-[#432F2E]/70 italic py-2">No items selected yet. Tap quick add below.</p>
            ) : (
              <div className="space-y-2.5">
                {orderItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm py-1 border-b border-[#432F2E]/10">
                    <div className="font-semibold text-[#432F2E] text-xs sm:text-sm max-w-[180px] truncate">
                      {item.name}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-xs text-[#432F2E]">
                        ₹{item.price * item.qty}
                      </span>
                      <div className="flex items-center gap-1 bg-[#FCFBF7] border border-[#432F2E] rounded-md px-1 py-0.5">
                        <button
                          onClick={() => updateQty(idx, -1)}
                          className="p-1 hover:text-rose-600 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center font-bold text-xs">{item.qty}</span>
                        <button
                          onClick={() => updateQty(idx, 1)}
                          className="p-1 hover:text-emerald-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 pt-3 border-t-2 border-[#432F2E] flex items-center justify-between font-bold">
              <span className="text-xs uppercase text-[#432F2E]">Subtotal (Taxes Incl.)</span>
              <span className="font-mono text-lg font-black text-[#432F2E]">₹{totalAmount}</span>
            </div>
          </div>

          {/* Quick Add Popular Dishes */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-[#432F2E] mb-2">
              Quick Add to Table
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => addItem("Belgian Chocolate Shake", 179)}
                className="btn-press p-2.5 rounded-xl bg-[#FCFBF7] border border-[#432F2E] text-left hover:bg-[#C1DBE8]/30 transition-colors"
              >
                <div className="text-xs font-bold text-[#432F2E] truncate">Belgian Choco Shake</div>
                <div className="text-[11px] font-mono text-[#432F2E]/70 font-bold">+ ₹179</div>
              </button>
              <button
                onClick={() => addItem("Peri Peri Crinkle Fries", 139)}
                className="btn-press p-2.5 rounded-xl bg-[#FCFBF7] border border-[#432F2E] text-left hover:bg-[#C1DBE8]/30 transition-colors"
              >
                <div className="text-xs font-bold text-[#432F2E] truncate">Peri Peri Fries</div>
                <div className="text-[11px] font-mono text-[#432F2E]/70 font-bold">+ ₹139</div>
              </button>
              <button
                onClick={() => addItem("Blue Curacao Fizz", 139)}
                className="btn-press p-2.5 rounded-xl bg-[#FCFBF7] border border-[#432F2E] text-left hover:bg-[#C1DBE8]/30 transition-colors"
              >
                <div className="text-xs font-bold text-[#432F2E] truncate">Blue Curacao Fizz</div>
                <div className="text-[11px] font-mono text-[#432F2E]/70 font-bold">+ ₹139</div>
              </button>
              <button
                onClick={() => addItem("Cheesy Garlic Bread", 169)}
                className="btn-press p-2.5 rounded-xl bg-[#FCFBF7] border border-[#432F2E] text-left hover:bg-[#C1DBE8]/30 transition-colors"
              >
                <div className="text-xs font-bold text-[#432F2E] truncate">Cheesy Garlic Bread</div>
                <div className="text-[11px] font-mono text-[#432F2E]/70 font-bold">+ ₹169</div>
              </button>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#FCFBF7] border-t-2 border-[#432F2E] flex flex-col gap-3">
          <button
            onClick={handleSendToKitchen}
            disabled={orderItems.length === 0}
            className="btn-press w-full py-3.5 rounded-full bg-[#432F2E] text-[#FFF0B5] font-black text-sm flex items-center justify-center gap-2 border-2 border-[#432F2E] shadow-[4px_4px_0px_#432F2E] hover:shadow-[2px_2px_0px_#432F2E] disabled:opacity-50 cursor-pointer"
          >
            <Smartphone className="w-4 h-4 text-[#FFF0B5]" />
            <span>Send Order to Kitchen via WhatsApp (₹{totalAmount})</span>
          </button>
          
          <div className="text-center text-[11px] text-[#432F2E]/70 font-semibold">
            ✨ Kitchen prints your order instantly. Payment at table or via UPI.
          </div>
        </div>

      </div>
    </div>
  );
}
