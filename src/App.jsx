import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import Layout from "@/components/Layout";
import Shop from "@/pages/shop";
import { ProductDetailPage } from "./components/Shop/product-detail-page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route
            path="/products/:productName"
            element={<ProductDetailPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
