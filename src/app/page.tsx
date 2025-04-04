import { getProducts } from "@/lib/stripe";
import Home from "./home";

/*
O Next.js usa revalidate automaticamente quando um Server Component contém fetch() ou qualquer 
função assíncrona que busca dados.

✅ A página será gerada estaticamente (SSG) no momento do build.
✅ O Next.js irá revalidar (gerar uma nova versão da página) a cada 2 horas, sem precisar de um novo 
deploy.
✅ Os usuários sempre recebem a versão mais recente da página sem precisar esperar pela geração no 
momento do acesso (ISR - Incremental Static Regeneration).
*/
export const revalidate = 60 * 60 * 2; // Mantém SSG a cada 2horas

export default async function Page() {
  const products = await getProducts();

  return <Home products={products} />;
}
