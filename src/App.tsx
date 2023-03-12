import { Routes, Route } from "react-router-dom";
import AdminPanelAddProductPage from "./pages/adminPanelPage/adminPanelAddProductPage";
import AdminPanelPage from "./pages/adminPanelPage/adminPanelPage";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/loginPage/loginPage";
import ProductDetailPage from "./pages/productDetailPage/productDetailPage";
import RegisterPage from "./pages/registerPage/registerPage";
import ShoppingCartPage from "./pages/shoppingCartPage/shoppingCartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shoppingcart" element={<ShoppingCartPage />} />
      <Route path="productdetail/:id" element={<ProductDetailPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="adminpanel" element={<AdminPanelPage />} />
      <Route path="adminpaneladdproduct" element={<AdminPanelAddProductPage />} />
    </Routes>
  );
}

export default App;
