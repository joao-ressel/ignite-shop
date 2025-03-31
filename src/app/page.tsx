import { stripe } from "@/lib/stripe";
import ProductSlider from "@/components/product-slider";

export default async function Home() {
  const response = await stripe.products.list();

  const products = await Promise.all(
    response.data.map(async (product) => {
      const price = await stripe.prices.retrieve(product.default_price as string);

      return {
        id: product.id,
        name: product.name,
        images: product.images,
        defalt_price: product.default_price,
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: price.currency.toUpperCase(),
        }).format(price.unit_amount! / 100), // Convertendo de centavos para reais/dólares
      };
    })
  );

  return <ProductSlider products={products} />;
}
