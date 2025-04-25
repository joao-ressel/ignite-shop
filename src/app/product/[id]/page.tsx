// src/app/product/[id]/page.tsx
import { getProductById } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import ClientBuyButton from "@/components/client-buy-button";
import Image from "next/image";
import { Metadata } from "next";

interface ProductPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // Awaiting params to ensure it's resolved
  const { id } = await params;

  const product = await getProductById(id);

  return {
    title: product ? `Ignite Shop | ${product.name}` : "Produto não encontrado",
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Awaiting params to ensure it's resolved
  const { id } = await params;

  const product = await getProductById(id);

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.image} alt={product.name} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <ClientBuyButton defaultPriceId={product.defaultPriceId} />
      </ProductDetails>
    </ProductContainer>
  );
}
