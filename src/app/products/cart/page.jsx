"use client"

import React, {useEffect, useRef, useState} from 'react';
import CardProductsWithPrice from "@/app/components/CardProductsWithPrice";

export const metadata = {
    title: 'Your Cart | Online Shop Next App',
    description: 'Add more to your style',
}

function Cart(props) {

    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>
                    <CardProductsWithPrice />
                    <div className={"flex flex-col mt-10 gap-2"}>
                        <h1 className={"font-bold text-3xl text-center mb-3"}>Оформление заказа</h1>
                        <p className={"mb-5"}>Введите адрес своей электронной почты. На этот адрес будут
                            отправляться уведомления о статусе заказа.</p>
                        <div className={"flex flex-col gap-2"}>
                            <input type={"email"} placeholder={"Ваш адрес элктронной почты"}
                                   className={"w-full h-10 border-2 border-gray-800 rounded-md"}/>
                            <span className={"text-sm text-red-700"}>Пожалуйста, введите адрес электронной почты</span>
                        </div>
                        <div className={"flex gap-2 mt-3 text-gray-700"}>
                            <input type={"checkbox"}/>
                            <span className={"text-sm"}>Подписаться на новости и эксклюзивные предложения</span>
                        </div>
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
            </div>
        </section>
    )
}

export default Cart;