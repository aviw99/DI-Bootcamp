import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [addName, setAddName] = useState("");
    const [addPrice, setAddPrice] = useState("");

    useEffect(() => {
        all();
    }, []);

    const all = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const searchProduct = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/search?name=${searchValue}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addProduct = (e) => {
        e.preventDefault();
        const newProduct = { name: addName, price: addPrice };
        fetch(`${process.env.REACT_APP_BASE_URL}/api/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setAddName("");
                setAddPrice("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h1>Shop</h1>
            <div>
                <input
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button onClick={searchProduct}>Search</button>
            </div>
            <div>
                <form onSubmit={addProduct}>
                    Name:{" "}
                    <input
                        type="text"
                        required
                        value={addName}
                        onChange={(e) => setAddName(e.target.value)}
                    />
                    Price:{" "}
                    <input
                        type="text"
                        required
                        value={addPrice}
                        onChange={(e) => setAddPrice(e.target.value)}
                    />
                    <input type="submit" value="Add" />
                </form>
            </div>
            {products.map((item) => {
                return (
                    <div
                        key={item.id}
                        style={{
                            display: "inline-block",
                            padding: "20px",
                            margin: "20px",
                            border: "1px solid #fff",
                        }}
                    >
                        <h4>{item.name}</h4>
                        <h5>{item.price}</h5>
                        <Link to={`/${item.id}`}>Shop Now</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;
