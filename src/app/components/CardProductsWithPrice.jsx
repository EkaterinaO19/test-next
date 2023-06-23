"use client"

import React from 'react';
import {useDispatch} from "react-redux";
import {decrementQuantity, incrementQuantity, removeItem} from "@/redux/slices/cartSlice";

function CardProductsWithPrice({id, name, price, image, quantity = 0, size}) {
    const dispatch = useDispatch()

    return (
        <section className={"mt-8 flex flex-col justify-between"}>
                <div className="flex items-center justify-center gap-5">
                    <img
                        src={image}
                        alt={name}
                        className="flex h-24 w-24 rounded object-cover"
                    />


                    <div className={"flex flex-col"}>
                        <h3 className="text-gray-900 sm:text-sm">{name}</h3>
                        <div className="mt-3 space-y-px text-[14px] text-gray-600">
                            <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">{size}</dd>
                            </div>
                        </div>
                    </div>

                    <div className={"flex gap-3"}>
                        <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>
                        <button onClick={(e) => {
                            e.preventDefault();
                            dispatch(decrementQuantity(id))}
                        }
                        >-</button>
                        <span className={"font-bold"}>{quantity}</span>
                        <button onClick={(e) => {
                            e.preventDefault();
                            dispatch(incrementQuantity(id))}
                        }>+</button>
                        <button
                            className="text-gray-600 transition hover:text-red-600"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(removeItem(id))}
                            }>
                            <span className="sr-only">Remove item</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
        </section>
    );
}

export default CardProductsWithPrice;