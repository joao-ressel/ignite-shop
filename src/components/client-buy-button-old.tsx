"use client";

import axios from "axios";
import { useState } from "react";

interface ClientBuyButtonProps {
  defaultPriceId?: string;
}

export default function ClientBuyButton({ defaultPriceId }: ClientBuyButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  async function handleByProduct() {
    try {
      setIsCreatingCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: defaultPriceId,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      //conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false);
      alert(`Erro ao redirecionar ao checkout ${err}`);
    }
  }

  return (
    <button disabled={isCreatingCheckoutSession} onClick={handleByProduct}>
      Comprar agora
    </button>
  );
}
