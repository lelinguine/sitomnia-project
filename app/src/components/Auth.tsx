"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { verifyUser } from "@controller/UserController";

import { useUser } from '@/context/UserContext';
import { useDiscussion } from "@/context/DiscussionContext";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { updateUser, updateSettings } = useUser();
  const { updateDiscussions, discussions } = useDiscussion();

  useEffect(() => {
    const checkAuth = async () => {

      const token = localStorage.getItem("token");
      if (!token) {
        if (pathname !== "/parametrage" && pathname !== "/questionnaire") {
          router.replace("/connexion");
        }
        return;
      }

      const res = await verifyUser(token);
      if (!res || res.status !== "success") {
        localStorage.clear();
        router.replace("/connexion");
        return;
      } else {
        updateUser({ email: res.user.email, name: res.user.name });

        updateSettings({
          textToSpeechEnabled: res.user.reglages[0].textToSpeechEnabled,
          sharePersonalData: res.user.reglages[0].sharePersonalData,
        });

        updateDiscussions(res.user.discussions);
      }
    };

    checkAuth();
  }, [router, pathname]);

  return <>{children}</>;
}