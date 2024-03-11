import { useEffect, useState } from "react";

import { ScreenType } from "@models/DataModels";

const breakpoints = {
  tablet: 768,
  desktop: 1400,
};

const getScreenSize = (): ScreenType => {
  if (window.screen.width < breakpoints.tablet) return "mobile";
  if (
    window.screen.width > breakpoints.tablet &&
    window.screen.width < breakpoints.desktop
  )
    return "tablet";
  return "desktop";
};

const useScreenType = (): ScreenType => {
  const [screenType, setScreenType] = useState<ScreenType>(() =>
    getScreenSize()
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      const screenSize = getScreenSize();
      setScreenType(screenSize);
    });
    return () =>
      window.removeEventListener("resize", () => {
        const screenSize = getScreenSize();
        setScreenType(screenSize);
      });
  }, []);

  return screenType;
};
export default useScreenType;
