import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { cars } from "./api/mockData";
import CarListPage from "./pages/CarListPage";
import CarDetailPage from "./pages/CarDetailPage";
import WishlistPage from "./pages/WishlistPage";
import BuyCar from "./pages/BuyCar";
import Navbar from "./components/Navbar";
import useLocalStorage from "./utils/useLocalStorage";
import CarDetailsPage from "./pages/CarDetailsPage";
import Footer from "./components/Footer";
import AuthPage from "./pages/AuthPage";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes({ wishlist, setWishlist, darkMode, handleRemoveFromWishlist }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <CarListPage wishlist={wishlist} setWishlist={setWishlist} />
            </motion.div>
          }
        />
        <Route
          path="/car/:id"
          element={
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CarDetailsPage cars={cars} />
            </motion.div>
          }
        />
        <Route
          path="/wishlist"
          element={
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <WishlistPage wishlist={wishlist} onRemove={handleRemoveFromWishlist} />
            </motion.div>
          }
        />
        <Route path="/buy/:id" element={<BuyCar />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleRemoveFromWishlist = (car) => {
    setWishlist(wishlist.filter((item) => item.id !== car.id));
  };

  return (
    <div
      className={`min-h-screen w-full ${
        darkMode
          ? "bg-gradient-to-br from-[#3d1f78] to-[#006644] text-white"
          : "bg-gradient-to-br from-[#8c52ff] to-[#00bf63] text-black"
      }`}
    >
      <Router>
        <Navbar
          darkMode={darkMode}
          onToggleTheme={handleThemeToggle}
          wishlist={wishlist}
        />
        <main className="pt-4 px-4 max-w-7xl mx-auto">
          <AnimatedRoutes
            wishlist={wishlist}
            setWishlist={setWishlist}
            darkMode={darkMode}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
          />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
