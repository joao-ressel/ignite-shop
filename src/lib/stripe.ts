import Stripe from "stripe";

const stripeApiKey = process.env.STRIPE_SECRET_KEY;
if (!stripeApiKey) {
  throw new Error("STRIPE_SECRET_KEY não está definida no ambiente.");
}

export const stripe = new Stripe(stripeApiKey, {
  apiVersion: "2025-02-24.acacia",
  appInfo: { name: "Ignite Shop" },
});

// Função auxiliar para formatar preços
const formatPrice = (price: Stripe.Price) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: price.currency.toUpperCase(),
  }).format((price.unit_amount ?? 0) / 100);
};

// Busca todos os produtos
export async function getProducts() {
  const response = await stripe.products.list({ expand: ["data.default_price"] });

  return response.data.map(({ id, name, images, default_price }) => ({
    id,
    name,
    images: images[0] || "", // Pega a primeira imagem ou string vazia se não houver
    price: formatPrice(default_price as Stripe.Price),
  }));
}

// Busca um produto pelo ID
export async function getProductById(id: string) {
    try {
      const {
        id: productId,
        name,
        images,
        description,
        default_price,
      } = await stripe.products.retrieve(id, { expand: ["default_price"] });
  
      return {
        id: productId,
        name,
        image: images[0] || "",
        price: formatPrice(default_price as Stripe.Price),
        description,
      };
    } catch (error) {
      console.error("Erro ao buscar o produto:", error);
      return null; // Retorna null se o produto não for encontrado
    }
  }
  