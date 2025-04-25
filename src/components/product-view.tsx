// src/components/product-view.tsx
"use client";

import { ProductContainer, ProductDetails, ImageContainer } from "@/styles/pages/product";
import Image from "next/image";
import ClientBuyButton from "./client-buy-button";

interface ProductViewProps {
  product: {
    name: string;
    price: string;
    description: string | null;
    image: string;
    defaultPriceId: string;
  };
}

export default function ProductView({ product }: ProductViewProps) {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.image} alt={product.name} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description ?? "Sem descrição disponível."}</p>
        <ClientBuyButton defaultPriceId={product.defaultPriceId} />
      </ProductDetails>
    </ProductContainer>
  );
}
