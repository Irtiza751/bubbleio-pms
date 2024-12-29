import ProductTable from "@/components/product-table";
import { products } from "@/data/products";

export default function Home() {
  return <ProductTable products={products} />;
}
