"use client"


import React from "react";

const API_URL = "https://app.ecwid.com/api/v3/58958138/";

export const searchItem = async (searchQuery) => {
    try {
        const response = await fetch(
            `${API_URL}products?keyword=${searchQuery}`,
            {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
                },
            }
        );

        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error searching for item:", err);
        throw err;
    }
};

export async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}products`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products");
    }
}

export async function getProduct(productId) {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products/${productId}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        console.log(error)
    }
    return <div>{productId ? JSON.stringify(productId) : "Loading..."}</div>;
}

// export const sendCartData = async (cart, email) => {
//     try {
//         const payload = {
//             total: calculateTotal(cart).totalPrice,
//             email,
//             paymentStatus: 'AWAITING_PAYMENT',
//             fulfillmentStatus: 'AWAITING_PROCESSING',
//             createDate: new Date().toISOString(),
//             items: cart.map((item) => ({
//                 price: item.price,
//                 quantity: item.quantity,
//                 name: item.name,
//             })),
//         };
//
//
//         const response = await fetch(`${API_URL}orders`, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json",
//                 "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
//             },
//             body: JSON.stringify(data)
//         });
//
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//
//     } catch (error) {
//         console.log(error);
//         throw new Error("Failed to fetch products");
//     }
// }