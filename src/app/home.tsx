"use client"; // Garante que o componente seja renderizado no client

import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "@/styles/pages/home";
import { Img } from "@/styles/global";
import Link from "next/link";
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
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Link href={`/product/${product.id}`} key={product.id}>
          <Product className="keen-slider__slide">
            <Img src={product.images} width={520} height={480} />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        </Link>
      ))}
    </HomeContainer>
  );
}
