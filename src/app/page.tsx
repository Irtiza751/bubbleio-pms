import ProductTable from "@/components/product-table";

const products = [
  {
    id: 1,
    name: "T-Shirt",
    category: "clothing",
    price: "$19.99",
    stock: 100,
    description: "This is a test description",
  },
  {
    id: 2,
    name: "T-Shirt",
    category: "clothing",
    price: "$19.99",
    stock: 100,
    description: "This is a test description",
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "clothing",
    price: "$19.99",
    stock: 100,
    description: "This is a test description",
  },
  {
    id: 4,
    name: "T-Shirt",
    category: "clothing",
    price: "$19.99",
    stock: 100,
    description: "This is a test description",
  },
];

export default function Home() {
  return <ProductTable products={products} />;
}
