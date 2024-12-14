import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //renderizar en el servidor

import "./index.css"; //estilos (necesario para tailwind)
import App from "./App.tsx";

import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* renderiza 2 veces al principio */}
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </StrictMode>
);
