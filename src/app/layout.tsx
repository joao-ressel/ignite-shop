"use client";
import Link from "next/link";
import { useState } from "react";
import { CartProvider } from "use-shopping-cart";
import { ShoppingBag } from "@phosphor-icons/react";

import { Img } from "@/styles/global";
import logoImg from "../assets/logo.svg";
import { globalStyles } from "@/styles/global";
import { Container, Header } from "@/styles/pages/app";
import { CartModal } from "@/components/cart-modal";

const stripePublicKey = process.env.STRIPE_PUBLIC_KEY!;

globalStyles();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  function handleOpenModal() {
    setIsCartOpen(true);
  }
  return (
    <html lang="pt-br">
      <CartProvider
        cartMode="checkout-session"
        stripe={stripePublicKey}
        currency="BRL"
        shouldPersist={true}
      >
        <body>
          <Container>
            <Header>
              <Link href="/">
                <Img src={logoImg.src} />
              </Link>
              <button onClick={handleOpenModal}>
                <ShoppingBag size={32} />
              </button>
            </Header>
            {children}
          </Container>
        </body>
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </CartProvider>
    </html>
  );
}
