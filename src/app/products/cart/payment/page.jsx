"use client"

import React, {useState} from 'react';
import Link from "next/link";
import CardProductsWithPrice from "@/app/components/CardProductsWithPrice";
import {useDispatch, useSelector} from "react-redux";
import {setResponseData} from "@/redux/slices/responseSlice";
import {useRouter} from "next/navigation";

function PaymentPage() {
    const cart = useSelector((state) => state.cart);
    const email = useSelector((state) => state.email); // Get the email from the store

    console.log(email)

    const dispatch = useDispatch();
    const router = useRouter()
    const sendCartData = async () => {
        try {
            const payload = {
                total: cart.totalPrice,
                email,
                paymentStatus: 'AWAITING_PAYMENT',
                fulfillmentStatus: 'AWAITING_PROCESSING',
                createDate: new Date().toISOString(),
                items: cart.map((item) => ({
                    price: item.price,
                    quantity: item.quantity,
                    name: item.name,
                })),
            };

            // Make the POST request to send cart data
            const response = await fetch(`https://app.ecwid.com/api/v3/58958138/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                const responseData = await response.json();
                dispatch(setResponseData(responseData));
                router.push("/products/cart/payment/order-confirmation")
                console.log('Cart data sent successfully');
            } else {
                // Request failed, handle the error
                console.error('Failed to send cart data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <>
            {cart?.length === 0 ? (<div className={"flex items-center justify-center h-screen flex-col gap-3"}>
                    <p className={"text-xl font-bold text-gray-900 sm:text-3xl"}>Ваша корзина пуста!</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                         className="w-6 h-6">
                        <path
                            d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                    </svg>
                    <Link className={"underline cursor-pointer"} href={"/products"}>Перейти в каталог</Link>
                </div>)
                : <section className="flex flex-col flex-wrap mt-8 p-2">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-lg">Оформление заказа</h1>
                    </header>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full">
                            {cart?.map((item) => (
                                <CardProductsWithPrice
                                    key={item.uId}
                                    name={item.name}
                                    price={item.defaultDisplayedPriceFormatted}
                                    image={item.imageUrl}
                                    quantity={item.quantity}
                                    id={item.id}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col justify-center m-20">
                            <p className="font-bold mb-3">Адрес электронной почты:</p>
                            <div className="flex gap-3">
                                <span>{email}</span>
                                <Link className="underline sm:text-sm" href="/products/cart">
                                    Изменить адрес почты
                                </Link>
                            </div>
                            <div className="flex flex-col mt-5">
                                <h1 className="font-bold">Оплата:</h1>
                                <div className="flex gap-2">
                                    <input type="radio" defaultChecked/>
                                    <p>Наличными</p>
                                </div>
                            </div>
                            <button
                                onClick={sendCartData}
                                className="mt-5 items-center rounded-md bg-transparent border-2 border-black px-8 py-3 sm:text-sm sm:px-3 sm:py-2 font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-gray-500 "
                            >
                                Разместить заказ
                            </button>
                        </div>
                    </div>
                </section>
            }
        </>

    );
}

export default PaymentPage;