"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { verifyUser } from "@controller/UserController";

import { useUser } from '@/context/UserContext';
import { useDiscussion } from "@/context/DiscussionContext";
import { useNote } from "@/context/NotesContext";

export default function Auth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { updateUser, updateSettings } = useUser();
  const { updateDiscussions } = useDiscussion();
  const { updateNotes } = useNote();

  useEffect(() => {
    const checkAuth = async () => {

      const token = localStorage.getItem("token");
      if (!token) {
        if (pathname !== "/parametrage" && pathname !== "/questionnaire" && pathname !== "/connexion" && pathname !== "/demarrage") {
          localStorage.clear();
          router.replace("/demarrage");
        }
        return;
      }

      const res = await verifyUser(token);
      if (!res || res.status !== "success") {
        localStorage.clear();
        router.replace("/demarrage");
        return;
      } else {
        updateUser({ email: res.user.email, name: res.user.name });

        // if (res.user.questionnaire.length === 0) {
        //   if (pathname !== "/questionnaire") {
        //     router.replace("/questionnaire");
        //   }
        // }

        updateSettings({
          textToSpeechEnabled: res.user.reglages[0].textToSpeechEnabled,
          sharePersonalData: res.user.reglages[0].sharePersonalData,
        });

        updateDiscussions(res.user.discussions);
        updateNotes(res.user.notes);
      }
    };

    checkAuth();
  }, [router, pathname]);

  return <>{children}</>;
}