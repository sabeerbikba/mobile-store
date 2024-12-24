import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import MobileSales from "@/pages/MobileSales";
import Cart from "@/pages/Cart";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import NoPage from "@/pages/NoPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        {[
          { path: "/", component: <Home />, },
          { path: "/mobile-sales", component: <MobileSales />, },
          { path: "/mobile-sales/cart", component: <Cart /> },
          { path: "/about-us", component: <AboutUs /> },
          { path: "/contact", component: <Contact /> },
          { path: "*", component: <NoPage />, },
        ].map((route, key) => (
          <Route path={route.path} element={route.component} key={key} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
