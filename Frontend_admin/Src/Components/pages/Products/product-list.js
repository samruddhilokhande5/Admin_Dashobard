import React, { useEffect, useState } from "react";
import style from "./product.module.css";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch("http://localhost:3004/products");
        const responseJSON = await response.json();
        console.log(responseJSON);
        setProducts(responseJSON);
    };


    return (
        <>
            <h1 style={{ marginTop: "10px" }}> I am Product List </h1>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Modified</th>
                    <th>Created</th>
                </tr>
                {products.map((product) => {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>{new Date("" + product.created).toDateString()}</td>
                            <td>{new Date("" + product.modified).toUTCString()}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}

export default ProductList;