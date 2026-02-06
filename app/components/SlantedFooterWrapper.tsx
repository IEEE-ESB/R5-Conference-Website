"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SlantedFooterWrapper() {
  const pathname = usePathname();
  const isEventsPage = pathname === "/events";

  useEffect(() => {
    const footer = document.querySelector(".footer");
    if (footer) {
      if (isEventsPage) {
        footer.classList.add("footer-slanted");
      } else {
        footer.classList.remove("footer-slanted");
      }
    }
  }, [isEventsPage]);

  return null;
}
