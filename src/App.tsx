import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import ShoppingCartPage from "./pages/shoppingCartPage/shoppingCartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shoppingcart" element={<ShoppingCartPage />} />
    </Routes>
  );
}

export default App;
