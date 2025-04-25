import { useState } from "react";
import { CartModal } from "./cart-modal"; // Certifique-se de que o caminho está correto

export default function ClientBuyButton() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function handleAddToCartAndOpenModal() {
    // Aqui você pode adicionar lógica para adicionar o item ao carrinho, se necessário.
    setIsCartOpen(true);
  }

  return (
    <>
      <button disabled={isCartOpen} onClick={handleAddToCartAndOpenModal}>
        Colocar na sacola
      </button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
