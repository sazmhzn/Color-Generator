import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import ColorGen from "./pages/ColorGen";
import ColorSheme from "./pages/ColorSheme";
import PageNotFound from "./components/PageNotFound";
import GenerateGradient from "./pages/GenerateGradient";
// import CreatePalette from "./pages/CreatePalette";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ColorGen />} />
          <Route path="/colorPallet" element={<ColorSheme />} />
          <Route path="/generateGradient" element={<GenerateGradient />} />
          {/* <Route path="/createPallet" element={<CreatePalette />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
