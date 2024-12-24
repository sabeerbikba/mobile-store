type Phone = {
  id: number;
  name: string;
  price: number;
  condition: "new" | "used";
  image: string;
};

const phones: Phone[] = [
  {
    id: 1,
    name: "iPhone 13",
    price: 799,
    condition: "new",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 699,
    condition: "new",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Google Pixel 6",
    price: 599,
    condition: "new",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "iPhone 12",
    price: 599,
    condition: "used",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Samsung Galaxy S20",
    price: 499,
    condition: "used",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "OnePlus 9",
    price: 549,
    condition: "new",
    image: "/placeholder.svg",
  },
];

export default phones;
