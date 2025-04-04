import { getProductById } from "@/lib/stripe";
import { Img } from "@/styles/global";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";

import { GetStaticPaths } from "next";
interface ProductProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await getProductById(params.id);

  return (
    <ProductContainer>
      <ImageContainer>
        <Img src={product?.image} alt={product?.name} width={520} height={480} />
      </ImageContainer>
      <ProductDetails>
        <h1>{product?.name}</h1>
        <span>{product?.price}</span>
        <p>{product?.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prodNl8zD9n7KXeD" } }],
    fallback: "blocking",
  };
};
