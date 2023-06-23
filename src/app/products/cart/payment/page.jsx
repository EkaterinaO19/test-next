"use client"

import React from 'react';
import Link from "next/link";
import CardProductsWithPrice from "@/app/components/CardProductsWithPrice";
import {useDispatch, useSelector} from "react-redux";
import {setResponseData} from "@/redux/slices/responseSlice";
import {useRouter} from "next/navigation";

function PaymentPage() {
    const cart = useSelector((state) => state.cart);
    const email = useSelector((state) => state.email);

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
                console.log("RESP", responseData)
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
        <section className={"flex mt-8 flex-col wrap h-screen"}>
            <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Оформление заказа</h1>
            </header>
            <div className={"flex"}>
                <div className="w-1/2">
                    {cart?.map(item => (
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
                <div className="w-1/2 mt-8 flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                              clipRule="evenodd"/>
                    </svg>
                    <div>
                        <p className={"flex font-bold mb-3"}>Адрес электронной почты:</p>
                        <div className={"flex gap-3"}>
                            <span>{email}</span>
                            <Link className={"underline"} href={'/products/cart'}>Изменить адрес почты</Link>
                        </div>
                        <div className={"flex gap-3 mt-5 flex-col"}>
                            <h1 className={"flex font-bold"}>Оплата:</h1>
                            <div className={"flex gap-2"}>
                                <input type={"radio"} defaultChecked/>
                                <p>Наличными</p>
                            </div>
                            {/*<Link href={"/products/cart/payment/order-confirmation"}>*/}
                            <button
                                onClick={sendCartData}
                                className="mt-5 flex w-full items-center justify-center rounded-md bg-transparent border-2 border-black px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Разместить заказ
                            </button>
                            {/*</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PaymentPage;