"use client";

import { useKeenSlider } from "keen-slider/react";
import { HomeContainer, Product } from "@/styles/pages/home";
import { Img } from "@/styles/global";
import "keen-slider/keen-slider.min.css";

type ProductType = {
  id: string;
  name: string;
  images: string;
  default_price: number;
  price: number;
};

export default function ProductSlider({ products }: { products: ProductType[] }) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Img src={product.images} width={520} height={480} />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}
