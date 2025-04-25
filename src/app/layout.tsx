"use client";
import { Img } from "@/styles/global";
import { globalStyles } from "@/styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";

globalStyles();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header>
            <Link href="/">
              <Img src={logoImg.src} />
            </Link>
          </Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
