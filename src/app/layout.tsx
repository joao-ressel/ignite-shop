"use client";
import { CartProvider } from 'use-shopping-cart';  // Importe o CartProvider
import { Img } from "@/styles/global";
import { globalStyles } from "@/styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY!; // O "!" força a conversão para string

globalStyles();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <CartProvider
          cartMode="checkout-session"
          stripe={stripePublicKey} // Agora sem erro de tipagem
          currency="BRL"
          shouldPersist={true}
        >
          <Container>
            <Header>
              <Link href="/">
                <Img src={logoImg.src} />
              </Link>
            </Header>
            {children}
          </Container>
        </CartProvider>
      </body>
    </html>
  );
}
