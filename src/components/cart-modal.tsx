import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import axios from "axios";
import {
  Modal,
  Overlay,
  Product,
  ProductImage,
  ProductInfo,
  CloseButton,
  Title,
  Footer,
  Quantity,
  Total,
} from "@/styles/pages/cart"; // Certifique-se de que o caminho está correto
import Image from "next/image";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartDetails, removeItem, totalPrice, cartCount } = useShoppingCart();
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true);

      if (!cartDetails) return;

      // Mapeia os itens do carrinho, incluindo price_id e currency
      const lineItems = Object.entries(cartDetails).map(([id, item]) => ({
        id,
        priceId: item.price_id, // Stripe price_id
        quantity: item.quantity,
        sku: item.sku, // SKU do item
        currency: "BRL", // A moeda, como "BRL" ou "USD", por exemplo
      }));

      const response = await axios.post("/api/checkout", {
        lineItems,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      alert(`Erro ao redirecionar ao checkout ${err}`);
    }
  }

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Sacola de compras</Title>

        {cartDetails &&
          Object.entries(cartDetails).map(([id, item]) => (
            <Product key={id}>
              <ProductImage>
                <Image src={item.imageUrl} width={80} height={80} alt={item.name} />
              </ProductImage>
              <ProductInfo>
                <span>{item.name}</span>
                <strong>
                  {(item.price / 100).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button onClick={() => removeItem(id)}>Remover</button>
              </ProductInfo>
            </Product>
          ))}

        <Footer>
          <Quantity>
            <span>Quantidade</span>
            <span>{cartCount} itens</span>
          </Quantity>
          <Total>
            <span>Valor total</span>
            <span>
              {totalPrice?.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </Total>
          <button onClick={handleCheckout} disabled={isCreatingCheckoutSession}>
            Finalizar compra
          </button>
        </Footer>
      </Modal>
    </Overlay>
  );
}
