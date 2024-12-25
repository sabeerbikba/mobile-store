export type Phone = {
  id: number;
  name: string;
  price: number;
  condition: "new" | "used";
  image: string;
  brand: string;
  description: string;
  specs: {
    display: string;
    camera: string;
    storage: string;
    battery: string;
  };
};

const phones: Phone[] = [
  {
    id: 1,
    name: "iPhone 13",
    price: 43999,
    condition: "new",
    image: "/iphone-13-apple.jpeg",
    brand: "Apple",
    description:
      "The latest iPhone with advanced dual-camera system and A15 Bionic chip.",
    specs: {
      display: "6.1-inch Super Retina XDR display",
      camera: "12MP dual-camera system",
      storage: "128GB",
      battery: "Up to 19 hours video playback",
    },
  },
  {
    id: 2,
    name: "Samsung Galaxy S21 FE 5G",
    price: 39999,
    condition: "new",
    image: "/galaxy-s21-fe-5g.jpeg",
    brand: "Samsung",
    description:
      "A feature-packed smartphone with pro-grade camera and 5G capabilities.",
    specs: {
      display: "6.4-inch Dynamic AMOLED 2X display",
      camera: "12MP triple-camera system",
      storage: "128GB",
      battery: "4,500mAh",
    },
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 36999,
    condition: "new",
    image: "/pixel-6.jpeg",
    brand: "Google",
    description:
      "Powered by Google Tensor, the first chip designed by Google just for Pixel.",
    specs: {
      display: "6.4-inch OLED display",
      camera: "50MP dual-camera system",
      storage: "128GB",
      battery: "4,614mAh",
    },
  },
  {
    id: 4,
    name: "iPhone 12",
    price: 30000,
    condition: "used",
    image: "/iphone-12-used.jpeg",
    brand: "Apple",
    description: "A powerful iPhone with 5G capabilities and A14 Bionic chip.",
    specs: {
      display: "6.1-inch Super Retina XDR display",
      camera: "12MP dual-camera system",
      storage: "64GB",
      battery: "Up to 17 hours video playback",
    },
    // https://www.olx.in/en-in/item/mobile-phones-c1453-used-iphone-in-kannamangala-bengaluru-iid-1792345512
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    price: 20000,
    condition: "used",
    image: "/samsung-s20-used.jpeg",
    brand: "Samsung",
    description:
      "A versatile smartphone with pro-grade camera and long-lasting battery.",
    specs: {
      display: "6.2-inch Dynamic AMOLED 2X display",
      camera: "12MP triple-camera system",
      storage: "128GB",
      battery: "4,000mAh",
    },
    // https://www.olx.in/en-in/item/mobile-phones-c1453-used-samsung-in-jp-nagar-phase-7-bengaluru-iid-1772051379
  },
  {
    id: 6,
    name: "OnePlus 9",
    price: 16500,
    condition: "used",
    image: "/onepluse-9-used.jpeg",
    brand: "OnePlus",
    description:
      "A flagship killer with Hasselblad camera for mobile and fast charging.",
    specs: {
      display: "6.55-inch Fluid AMOLED display",
      camera: "48MP triple-camera system",
      storage: "128GB",
      battery: "4,500mAh",
    },
    // https://www.olx.in/en-in/item/mobile-phones-c1453-used-one-plus-in-wilson-garden-bengaluru-iid-1793093032
  },
];

export default phones;
