"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      router.replace("/connexion");
    } else {
      // récupérer les données utilisateur
    }
  }, [router]);

  return <>{children}</>;
}