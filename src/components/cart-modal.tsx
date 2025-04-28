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
  CheckoutButton,
} from "@/styles/pages/cart";

import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { X } from "@phosphor-icons/react";
import { useShoppingCart } from "use-shopping-cart";

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

     
    const lineItems = Object.entries(cartDetails).map(([id, item]) => {
      if (!item.price_id) {
        throw new Error(`Item ${item.name} está sem price_id`);
      }
      return {
        id,
        priceId: item.price_id,
        quantity: item.quantity,
      };
    });

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
        <CloseButton onClick={onClose}>
          <X size={32} />
        </CloseButton>
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
                <button onClick={() => removeItem(item.id)}>Remover</button>
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
              {totalPrice
                ? (totalPrice / 100).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : "R$ 0,00"}
            </span>
          </Total>
          <CheckoutButton onClick={handleCheckout} disabled={isCreatingCheckoutSession}>
            Finalizar compra
          </CheckoutButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
