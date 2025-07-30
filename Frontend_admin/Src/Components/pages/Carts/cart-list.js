import React, { useEffect, useState } from "react";
import style from "./cart.module.css";

const CartList = () => {

    const [carts, setCarts] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch("http://localhost:3004/carts");
        const responseJSON = await response.json();
        console.log(responseJSON);
        setCarts(responseJSON);
    };


    return (
        <>
            <h1 style={{ marginTop: "10px" }}> I am Cart List </h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>User_ID</th>
                    <th>Product_ID</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Price</th>
                    <th>Created</th>
                    <th>Modified</th>
                </tr>
                {carts.map((cart) => {
                    return (
                        <tr>
                            <td>{cart.id}</td>
                            <td>{cart.user_id}</td>
                            <td>{cart.product_id}</td>
                            <td>{cart.quantity}</td>
                            <td>{cart.total}</td>
                            <td>{cart.price}</td>
                            <td>{new Date("" + cart.created).toDateString()}</td>
                            <td>{new Date("" + cart.modified).toUTCString()}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}

export default CartList;