// hooks/useScrollOrNavigate.ts
import { useLocation, useNavigate } from "react-router-dom";

export function useScrollOrNavigate() {
  const location = useLocation();
  const navigate = useNavigate();

  return (id: string, fallbackRoute: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(fallbackRoute);
    }
  };
}
