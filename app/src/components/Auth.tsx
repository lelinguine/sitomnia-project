"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const email = localStorage.getItem("email");
      if (!email) {
        localStorage.clear();
        router.replace("/connexion");
        return;
      }

      try {
        const res = await fetch("http://localhost:8000/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (!res.ok) {
          // Email non reconnu par le backend → rediriger
          router.replace("/connexion");
        }

        const data = await res.json();

        localStorage.setItem('notes', JSON.stringify(data.notes || []));
        localStorage.setItem('discussions', JSON.stringify(data.discussions || []));

      } catch (error) {
        console.error("Erreur d'authentification :", error);
        router.replace("/connexion");
      }
    };

    checkAuth();
  }, [router]);

  return <>{children}</>;
}