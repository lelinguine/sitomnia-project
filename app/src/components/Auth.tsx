"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {

      const user = JSON.parse(localStorage.getItem("utilisateur") || "{}");

      const email = user.email || "";

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

        const shouldRedirect = pathname !== "/parametrage";

        if (!res.ok && shouldRedirect) {
          // Email non reconnu par le backend → rediriger
          //router.replace("/connexion");
        }

        const data = await res.json();

        //charger les données utilisateur : TODO

      } catch (error) {
        console.error("Erreur d'authentification :", error);
        router.replace("/connexion");
      }
    };

    checkAuth();
  }, [router, pathname]);

  return <>{children}</>;
}