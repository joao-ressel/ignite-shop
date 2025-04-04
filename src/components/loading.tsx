"use client"
import { useRouter } from "next/router";

// components/Loading.tsx
export default function Loading() {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <p>Carregando produto...</p>;
  }
}
