"use client";

import { Img } from "@/styles/global";
import {useKeenSlider} from 'keen-slider/react';
import { HomeContainer, Product } from "@/styles/pages/home";

import camiseta1 from "../assets/camisetas/Type6.png";
import camiseta2 from "../assets/camisetas/Type7.png";
import camiseta3 from "../assets/camisetas/Type8.png";
import camiseta4 from "../assets/camisetas/Type9.png";

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Img src={camiseta1.src} width={520} height={480}/>
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Img src={camiseta2.src} width={520} height={480}/>
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 82,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Img src={camiseta3.src} width={520} height={480}/>
        <footer>
          <strong>Camiseta L</strong>
          <span>R$ 72,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Img src={camiseta4.src} width={520} height={480}/>
        <footer>
          <strong>Camiseta M</strong>
          <span>R$ 85,90</span>
        </footer>
      </Product>
      </HomeContainer>
  );
}