import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ColorGen from "./pages/ColorGen";
import ColorSheme from "./pages/ColorSheme";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ColorGen />} />
          <Route path="/colorPallet" element={<ColorSheme />} />
          <Route path="*" element={<PageNotFound />} /> {/* Catch-all route */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
