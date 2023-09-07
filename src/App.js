import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NewProduct from "./pages/NewProduct";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import { useDispatch, useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import CartPage from "./pages/CartPage";
import AdminDashboard from "./pages/AdminDashboard";
import { useEffect } from "react";
import UpdateProduct from "./pages/UpdateProduct";

function App() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Navigation />
                <Routes>
                    <Route index element={<Home />} />
                    {!user && (
                        <>
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                        </>
                    )}
                    {user && (
                        <>
                            { !user.isAdmin && (
                                <>
                                    <Route path="/cart" element={<CartPage />} />
                                    <Route path="/products/:id" element={<ProductPage />} />
                                    <Route path="/category/:category" element={<CategoryPage />} />
                                    <Route path="/new-product" element={<NewProduct />} />
                                </>
                            )}

                            { user.isAdmin && (
                                <>
                                    <Route path="/admin" element={<AdminDashboard />} />
                                    <Route path="/new-product" element={<NewProduct />} />
                                    <Route path="/products/:id/edit" element={<UpdateProduct />} />
                                    <Route path="/products/:id" element={<ProductPage />} />
                                    <Route path="/category/:category" element={<CategoryPage />} />
                                </>
                            )}

                        </>
                    )
                    }
                    <Route path="*" element={<Home />} />

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;