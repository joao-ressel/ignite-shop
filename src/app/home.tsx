"use client"; // Garante que o componente seja renderizado no client

import { useKeenSlider } from "keen-slider/react";
import { CartButton, HomeContainer, Product } from "@/styles/pages/home";
import { Img } from "@/styles/global";
import Link from "next/link";
import Head from "next/head";
import { ShoppingBag } from "@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string;
    name: string;
    price: string;
    images: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  if (!products) return <p>Loading...</p>;
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Product className="keen-slider__slide">
              <Img src={product.images} width={520} height={480} />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <CartButton >
                  <ShoppingBag size={32}/>
                </CartButton>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}
