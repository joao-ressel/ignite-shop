import { getCssText } from "@/styles";
import { Img } from "@/styles/global";
import { globalStyles } from "@/styles/global";
import type { Metadata } from "next";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";

globalStyles();

export const metadata: Metadata = {
  title: "Ignite Shop",
  icons: {
    icon: "/simbol.ico", 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>

      <body>
        <Container>
          <Header>
            <Img src={logoImg.src} />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
