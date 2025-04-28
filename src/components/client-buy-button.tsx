import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { CartModal } from "./cart-modal";

type Product = {
  id: string;
  name: string;
  price: number;
  currency: string;
  imageUrl: string;
  price_id: string;
};

type ClientBuyButtonProps = {
  product: Product;
};

export default function ClientBuyButton({ product }: ClientBuyButtonProps) {
  const { addItem } = useShoppingCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCartAndOpenModal() {
    addItem({
      id: product.price_id,
      name: product.name,
      price: product.price,
      currency: product.currency,
      imageUrl: product.imageUrl,
      price_id: product.price_id,
    });

    setIsCartOpen(true);
  }

  return (
    <>
      <button onClick={handleAddToCartAndOpenModal}>Colocar na sacola</button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
