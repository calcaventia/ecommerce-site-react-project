import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ItemView from "./pages/ItemView";
import Checkout from "./pages/Checkout";
import Bag from "./pages/Bag";
import AddPayment from "./pages/AddPayment";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/itemView" element={<ItemView />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Bag" element={<Bag />} />
      <Route path="/AddPayment" element={<AddPayment />} />
    </Routes>
  );
}
export default App;
