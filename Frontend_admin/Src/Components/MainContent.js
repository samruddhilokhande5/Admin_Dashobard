import React from "react";
import { BrowserRouter, Outlet, Route, Router, Routes } from "react-router-dom";
import UserList from "./pages/users/user-list";
import NewUser from "./pages/users/new-user";
import EditUser from "./pages/users/edit-user";
import ProductList from "../Components/pages/products/product-list";
import NewProduct from "../Components/pages/products/new-product";
import EditProduct from "../Components/pages/products/edit-product";
import NewCart from "../Components/pages/carts/new-cart";
import EditCart from "../Components/pages/carts/edit-cart";
import CartList from "../Components/pages/carts/cart-list";
import Layout from "../Layout";

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<UserList />} />
                    <Route path="user-list" element={<UserList />} />
                    <Route path="new-users" element={<NewUser />} />
                    <Route path="edit-users" element={<EditUser />} />


                    <Route path="product-list" element={<ProductList />} />
                    <Route path="new-product" element={<NewProduct />} />
                    <Route path="edit-product" element={<EditProduct />} />

                    <Route path="cart-list" element={<CartList />} />
                    <Route path="new-cart" element={<NewCart />} />
                    <Route path="edit-cart" element={<EditCart />} />
                </Route>
            </Routes>
         {/*    <Outlet /> */}
        </>
    );
}

export default MainContent;