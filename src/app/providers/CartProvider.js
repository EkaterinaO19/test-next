"use client"

import {useReducer} from "react";
import {CartContext} from "@/app/context/cartContext";
import {cartReducer} from "@/app/reducers/CartReducer";

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {items: [],})


    const addToCart = (product) => {
        const updatedCart = [...state.items, product];

        dispatch({
            type: "ADD",
            payload: {
                items: updatedCart,
            }
        })
    }

    const removeFromCart = (id) => {
        const updatedCart = state.items.filter(
            (currentProduct) => currentProduct.id !== id
        );

        dispatch({
            type: "REMOVE",
            payload: {
                items: updatedCart,
            },
        });
    };


    const removeAllItemsFromCart = () => {
        const updatedCart = [];

        dispatch({
            type: "CLEAR",
            payload: {
                items: updatedCart,
            }
        })
    }

    const value = {
        items: state.items,
        addToCart,
        removeFromCart,
        removeAllItemsFromCart,
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};