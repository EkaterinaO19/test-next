"use client"

import React from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";

function OrderConfirmationPage() {
    const orderEmail = useSelector((state) => state.email);


    return (
        <section className={"flex flex-col"}>
                <div className="flex items-center justify-center h-screen">
                    <div>
                        <div className="flex flex-col items-center space-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <h1 className="text-4xl font-bold">Спасибо за заказ! 🎉</h1>
                            <p>Уведомления о состоянии заказа мы будем присылать на: {orderEmail}</p>
                            <Link href={"/products/cart"}>
                                <button
                                    className="inline-flex items-center px-4 py-2 text-white bg-black border border-black rounded rounded-full hover:bg-gray-700 focus:outline-none focus:ring"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                                    </svg>
                                    <span className="text-sm font-medium">
              Продолжить покупки
            </span>
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
        </section>
    );
}

export default OrderConfirmationPage;