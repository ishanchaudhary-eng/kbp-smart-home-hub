import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.hspixel === "function") {
      window.hspixel("track", "PageView");
    }
  }, [pathname]);

  return null;
};

export default PageTracker;
