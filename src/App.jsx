import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import Layout from "@/components/Layout";
import Shop from "@/pages/shop";
import { ProductDetailPage } from "./components/Shop/product-detail-page";
import { CartPage } from "./components/Cart/cart-page";
import { CheckoutPage } from "./components/Checkout/checkout-page";
import { OrderSuccessPage } from "./components/Checkout/order-success";
import { ContactPage } from "./components/Contact/contact-page";
import { AffiliatePage } from "./components/Affiliate/affiliate-page";
import { AffiliateSuccessPage } from "./components/Affiliate/affiliate-success-page";
import { PeptideCalculatorPage } from "./components/Peptide-Calculator/peptide-calculator-page";

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
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="order-success" element={<OrderSuccessPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/affiliate" element={<AffiliatePage />} />
          <Route
            path="/affiliate-success"
            element={<AffiliateSuccessPage />}
          />{" "}
          <Route
            path="/peptide-calculator"
            element={<PeptideCalculatorPage />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
