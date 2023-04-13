import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./app/store";
import theme from "./shared/config/theme";
const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);
