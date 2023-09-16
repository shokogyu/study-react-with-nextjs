import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // Mount時の処理
    document.body.style.backgroundColor = "lightblue";

    // Unmount時の処理
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
