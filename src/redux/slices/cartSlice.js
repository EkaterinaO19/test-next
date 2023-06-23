import {createSlice} from '@reduxjs/toolkit';
import {calculateTotal} from "@/utils";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({...action.payload, quantity: 1});
            }
            const {totalPrice, totalQuantity} = calculateTotal(state.cart);
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            const {totalPrice, totalQuantity} = calculateTotal(state.cart);
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
            const {totalPrice, totalQuantity} = calculateTotal(state.cart);
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
            const {totalPrice, totalQuantity} = calculateTotal(state.cart);
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },
    },
});


export const cartReducer = cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;