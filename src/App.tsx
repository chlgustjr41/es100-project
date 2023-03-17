import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import InitialPage from "./page/InitialPage";
import HandlerPage from "./page/HandlerPage";
import { ThemeProvider } from "@mui/material";
import { es100Theme } from "./theme/theme";
import InfoPage from "./page/InfoPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={es100Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
        </Routes>

        <Routes>
          <Route path="/game" element={<HandlerPage />} />
        </Routes>

        <Routes>
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
