import { getCssText } from "@/styles";
import { Img } from "@/styles/global";
import { globalStyles } from "@/styles/global";
import logoImg from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Link from "next/link";

globalStyles();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <link rel="shortcut icon" href="/simbol.ico" type="image/x-icon" />
        <title>Ignite Shop</title>
      </head>

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
