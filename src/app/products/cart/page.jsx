"use client"

import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import Link from "next/link";
import CardProductsWithPrice from "@/app/components/CardProductsWithPrice";

export const metadata = {
    title: 'Your Cart | Online Shop Next App',
    description: 'Add more to your style',
}

function Cart() {
    const [openPromoInput, setOpenPromoInput] = useState(false);
    const cart = useSelector((state) => state.cart)
    const promoInputRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (promoInputRef.current && !promoInputRef.current.contains(event.target)) {
                setOpenPromoInput(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item => {
            totalQuantity += item.quantity || 0
            totalPrice += item.price * item.quantity || 0
        })
        return {totalPrice, totalQuantity}
    }

    console.log(cart)

    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>
                    {cart.length === 0 && (
                        <div className={"flex flex-col gap-3 items-center mt-7"}>
                            <p className={"font-bold text-xl"}>Ваша корзина пуста!</p>
                            <Link className={"underline cursor-pointer"} href={"/products"}>Перейти в каталог</Link>
                        </div>
                    )}


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


                    {/*Total Price*/}
                    {cart.length !== 0 && (
                        <>
                            <div className="mt-10 flex border-t border-gray-100 pt-10 justify-end">
                                <div className="flex flex-col">
                                    <div className={"flex justify-between flex-col gap-3"}>
                                        <div className={"flex"}>
                                            <p className={"font-bold text-black text-xl"}>Количество товаров: </p>
                                            <span className={"font-bold text-xl"}>{getTotal().totalQuantity}</span>
                                        </div>
                                        <div className={"flex"}>
                                            <p className={"font-bold text-black text-xl"}>ИГОТО: </p>
                                            <span className={"font-bold text-xl"}>{getTotal().totalPrice}</span>
                                        </div>
                                    </div>
                                    <div className={"flex justify-end mt-2"}>
                                        <p className={"text-sm text-gray-700"}>Есть промо-код?
                                            <span
                                                className={"text-black underline cursor-pointer"}
                                                onClick={() => setOpenPromoInput(!openPromoInput)}>
                                                    Получите скидку
                                            </span>
                                            {openPromoInput && (
                                                <div className={"flex gap-3 mt-3"} ref={promoInputRef}>
                                                    <input className={"w-100 h-6 border-2 border-gray-800 rounded-md"}
                                                           placeholder={"Введите код купона"} type={"text"}/>
                                                    <button className={"font-bold text-black cursor-pointer"}>Применить
                                                    </button>
                                                </div>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"flex flex-col mt-10 gap-2"}>
                                <h1 className={"font-bold text-3xl text-center mb-3"}>Оформление заказа</h1>
                                <p className={"mb-5"}>Введите адрес своей электронной почты. На этот адрес будут
                                    отправляться уведомления о статусе заказа.</p>
                                <div className={"flex flex-col gap-2"}>
                                    <input type={"email"} placeholder={"Ваш адрес элктронной почты"}
                                           className={"w-full h-10 border-2 border-gray-800 rounded-md"}/>
                                    <span
                                        className={"text-sm text-red-700"}>Пожалуйста, введите адрес электронной почты</span>
                                </div>
                                <div className={"flex gap-2 mt-3 text-gray-700"}>
                                    <input type={"checkbox"}/>
                                    <span className={"text-sm"}>Подписаться на новости и эксклюзивные предложения</span>
                                </div>
                                <div className="flex gap-5 mt-10">
                                    <a
                                        href="/products/cart/payment"
                                        className="flex rounded bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Оформить заказ
                                    </a>
                                    <span className={"text-gray-700 text-sm"}>* Все данные защищены сертификатом TLS и передаются в зашифрованном виде.</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Cart;