export const CAFE_INFO = {
  name: "11:11 THE CAFE",
  tagline: "Good Food, Late Talks & Your 11:11 Spot",
  shortDesc: "Vaishali Nagar's favorite hangout for loaded grilled sandwiches, classic Delhi-style chole bhature, rich thick shakes, and late evening talks.",
  phone: "+91 98290 11111",
  displayPhone: "+91 98290 11111",
  address: "Plot 91, Gandhi Path Rd, Arpit Nagar, B Block, Vaishali Nagar, Jaipur, Rajasthan 302021",
  timings: "11:00 AM – 11:30 PM",
  days: "Monday – Sunday (7 Days Open)",
  rating: "4.6",
  reviewCount: "840+",
  mapsUrl: "https://maps.google.com/?q=11:11+The+Cafe+Gandhi+Path+Road+Vaishali+Nagar+Jaipur",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.8!2d75.742!3d26.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db49f99999999%3A0x1111cafe!2sGandhi+Path+Rd%2C+Vaishali+Nagar%2C+Jaipur!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const getWhatsAppLink = (message) => {
  const cleanPhone = CAFE_INFO.phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
};
