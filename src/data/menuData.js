export const MENU_CATEGORIES = [
  { id: "sandwiches", label: "Sandwiches & Grills", badge: "House Favorites" },
  { id: "desi", label: "Desi Comfort Plates", badge: "Must Try" },
  { id: "shakes", label: "Shakes & Chillers", badge: "Refreshing" },
  { id: "bites", label: "Bites & Pastas", badge: "Sharing" }
];

export const SIGNATURE_ITEMS = [
  {
    id: "sandwich-hero",
    name: "Loaded Grilled Corn & Herb Club Sandwich",
    category: "sandwiches",
    price: "₹189",
    tags: ["Best Seller", "Triple Layered", "Served with Slaw"],
    description: "Multi-layered sourdough toast stuffed with a seasoned plant-forward patty, flame-charred golden sweet corn, crisp garden greens, and creamy house herb emulsion. Sliced thick and served hot.",
    image: "/assets/image_2de93c.jpg",
    spicyLevel: "Mild",
    prepTime: "12-14 mins",
    calories: "440 kcal"
  },
  {
    id: "chole-hero",
    name: "Classic Delhi-Style Chole Bhature Platter",
    category: "desi",
    price: "₹219",
    tags: ["Chef Special", "Puffed Hot", "Tangy Chutney"],
    description: "Slow-simmered, dark spiced Amritsari-Delhi chole seasoned with pomegranate seeds & whole garam masala, served with 2 balloon-puffed golden bhature, vinegar pickled onions, and spicy green chilli pickle.",
    image: "/assets/image_2de902.jpg",
    spicyLevel: "Medium",
    prepTime: "10-12 mins",
    calories: "580 kcal"
  }
];

export const FULL_MENU = {
  sandwiches: [
    {
      name: "Loaded Grilled Corn & Herb Club",
      price: "₹189",
      desc: "Double-deck toasted sourdough, grilled plant patty, roasted sweet corn, baby spinach, herb aioli.",
      tag: "Bestseller",
      veg: true,
      image: "/assets/image_2de93c.jpg"
    },
    {
      name: "Smoked Paneer Tikka Panini",
      price: "₹209",
      desc: "Charcoal-tandoor cottage cheese, capsicum juliennes, mint-coriander spread on Italian focaccia.",
      tag: "Popular",
      veg: true
    },
    {
      name: "Four-Cheese Meltdown Toastie",
      price: "₹179",
      desc: "Aged mozzarella, sharp cheddar, gouda, and cream cheese with crushed black pepper & basil butter.",
      tag: "Cheesy",
      veg: true
    },
    {
      name: "Spicy Mexican Bean & Jalapeño Burger",
      price: "₹199",
      desc: "Crispy black bean patty, nachos crunch, house salsa, cheddar slice, chipotle drizzle.",
      tag: "Spicy",
      veg: true
    }
  ],
  desi: [
    {
      name: "Classic Delhi-Style Chole Bhature",
      price: "₹219",
      desc: "Authentic dark spiced chole, 2 extra-large crisp bhature, laccha pyaaz, green chilli pickle.",
      tag: "Signature",
      veg: true,
      image: "/assets/image_2de902.jpg"
    },
    {
      name: "Butter Pav Bhaji (Mumbai Chaupati Style)",
      price: "₹169",
      desc: "Slow-mashed spiced vegetable gravy topped with Amul butter slab, served with 3 toasted butter pavs.",
      tag: "Comfort",
      veg: true
    },
    {
      name: "Paneer Lababdar Mini Meal with Parathas",
      price: "₹249",
      desc: "Rich cashew-tomato gravy, grated paneer cubes, served with 2 flaky lachha parathas & raita.",
      tag: "Wholesome",
      veg: true
    },
    {
      name: "Amritsari Kulcha with Pindi Chana",
      price: "₹209",
      desc: "Stuffed potato & onion tandoori kulcha with dollop of white butter and tangy tamarind chutney.",
      tag: "Weekend Special",
      veg: true
    }
  ],
  shakes: [
    {
      name: "Belgian Chocolate Decadence Shake",
      price: "₹179",
      desc: "Pure 54% dark chocolate ganache blended with creamy milk and topped with dark chocolate curls.",
      tag: "Rich",
      veg: true
    },
    {
      name: "Blue Curacao Lemonade Fizz",
      price: "₹139",
      desc: "Vibrant citrus blue cooler with fresh lemon juice, crushed mint, and sparkling soda splash.",
      tag: "Chilled",
      veg: true
    },
    {
      name: "KitKat Crunch Overload Shake",
      price: "₹169",
      desc: "Vanilla soft serve, crushed KitKat wafer bars, chocolate fudge swirls, whipped cream top.",
      tag: "Favorite",
      veg: true
    },
    {
      name: "Peach & Passionfruit Sparkler",
      price: "₹149",
      desc: "Natural peach puree, passionfruit pulp, brewed iced green tea, and basil seeds.",
      tag: "Low Cal",
      veg: true
    }
  ],
  bites: [
    {
      name: "Peri Peri Tossed Crinkle Fries",
      price: "₹139",
      desc: "Crispy cut potatoes tossed in signature African bird's eye spice mix, served with garlic dip.",
      tag: "Crunchy",
      veg: true
    },
    {
      name: "Creamy White Sauce Penne Alfredo",
      price: "₹229",
      desc: "Penne tossed in slow-cooked parmesan garlic cream sauce with broccoli florets and mushrooms.",
      tag: "Italian",
      veg: true
    },
    {
      name: "Cheesy Stuffed Garlic Breadsticks",
      price: "₹169",
      desc: "Fresh baked herb dough filled with molten mozzarella, sweet corn, and oregano butter crust.",
      tag: "Shareable",
      veg: true
    },
    {
      name: "Crispy Corn & Water Chestnut Salt & Pepper",
      price: "₹179",
      desc: "Wok-tossed sweet corn kernels with scallions, fresh red chillies, and cracked pepper.",
      tag: "Wok Fresh",
      veg: true
    }
  ]
};

export const WISH_PRIZES = [
  {
    code: "WISH-COOKIE",
    title: "Complimentary Choco-Chunk Cookie",
    subtext: "Show this screen to your server on orders above ₹199!",
    emoji: "🍪",
    discount: "FREE DESSERT"
  },
  {
    code: "WISH-COOLER",
    title: "1+1 on Blue Curacao Fizz",
    subtext: "Buy one cooler, get another on the house for your squad!",
    emoji: "🍹",
    discount: "1 + 1 OFFER"
  },
  {
    code: "WISH-FRIES",
    title: "Free Peri-Peri Fries Upgrade",
    subtext: "Complimentary large peri-peri fries with any sandwich!",
    emoji: "🍟",
    discount: "FREE UPGRADE"
  },
  {
    code: "WISH-1111",
    title: "11% Off Total Table Bill",
    subtext: "Valid today for evening table hangout between 6 PM – 11 PM.",
    emoji: "✨",
    discount: "11% OFF"
  }
];
