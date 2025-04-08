import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
interface SuccessPageProps {
  searchParams: {
    session_id?: string;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Ignite Shop | Compra efetuada`,
  };
}

export default async function Success({ searchParams }: SuccessPageProps) {
  if (!searchParams.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    return <p>Session ID não fornecido.</p>;
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  if (sessionId !== session.id) {
    return {
      notFound: true,
    };
  }

  const customerName = session.customer_details?.name;

  const product = session.line_items?.data[0]?.price?.product as Stripe.Product;

  return (
    <SuccessContainer>
      <h1>Compra efetuada com sucesso</h1>

      <ImageContainer>
        <Image src={product.images[0]} alt="" width={120} height={110} />
      </ImageContainer>
      <p>
        Uhuul <strong>{customerName}</strong>, sua <strong>{product.name}</strong> já está a caminho
        da sua casa
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
