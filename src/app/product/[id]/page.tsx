import { products } from "@/data/products";
import ProductDetailsClient from "./ProductDetailsClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
