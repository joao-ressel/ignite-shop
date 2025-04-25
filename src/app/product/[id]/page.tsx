import { getProductById } from "@/lib/stripe";
import { Metadata } from "next";
import ProductView from "@/components/product-view";

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params; // Aguarda a resolução de params
  const product = await getProductById(id);

  return {
    title: product ? `Ignite Shop | ${product.name}` : "Produto não encontrado",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params; // Aguarda a resolução de params
  const product = await getProductById(id);

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <ProductView product={{
      ...product,
      description: product.description ?? ""
    }} />
  );
}
