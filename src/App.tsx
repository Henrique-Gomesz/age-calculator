import { useEffect, useState } from "react";
import "./App.css";
import { DesktopComponent } from "./components/desktop/desktop";
import { MobileComponent } from "./components/mobile/mobile";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update the window width when the viewport is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return <> <DesktopComponent /></>;
}

export default App;
