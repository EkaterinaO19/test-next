"use client"

import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";
import CardProductsWithPrice from "@/app/components/CardProductsWithPrice";
import {useRouter} from "next/navigation";
import {updateEmail} from "@/redux/slices/emailSlice"

export const metadata = {
    title: 'Your Cart | Online Shop Next App',
    description: 'Add more to your style',
}

function Cart() {
    const [openPromoInput, setOpenPromoInput] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [newsletterAgreeCheckbox, setNewsletterAgreeCheckbox] = useState(true)

    const dispatch = useDispatch();
    const promoInputRef = useRef();
    const router = useRouter();

    const cart = useSelector((state) => state.cart)
    const totalQuantity = useSelector(state => state.totalQuantity)
    const totalPrice = useSelector(state => state.totalPrice)

    // TODO: change use state for dispatch reducer for EMAIL

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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!newEmail) {
            setEmailError('Пожалуйста, введите адрес электронной почты.');
            return;
        }

        const emailPattern = /^\S+@\S+\.\S+$/;
        if (!emailPattern.test(newEmail)) {
            setEmailError('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        dispatch(updateEmail(newEmail));
        setNewEmail('');
        router.push("/products/cart/payment")
    };


    function handleEmailChange(event) {
        setNewEmail(event.target.value);
    }

    return (
        <section className={"h-screen"}>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header className="text-center">
                    <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                </header>
                <div className="mx-auto max-w-3xl">
                    {cart.length === 0 && (
                        <div className={"flex items-center justify-center h-screen flex-col gap-3"}>
                            <p className={"text-xl font-bold text-gray-900 sm:text-3xl"}>Ваша корзина пуста!</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                 className="w-6 h-6">
                                <path
                                    d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"/>
                            </svg>

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
                                        <p className={"flex text-black text-md"}>Количество
                                            товаров: {totalQuantity}</p>
                                        <p className={"flex text-black text-md font-bold"}>ИГОТО: {totalPrice} P.</p>
                                    </div>
                                    <div className={"flex justify-end mt-2 gap-2"}>
                                        {!openPromoInput && (
                                            <>
                                                <p className={"text-sm text-gray-700"}>Есть промо-код?</p>
                                                <span
                                                    className={"text-sm text-gray-700 underline cursor-pointer"}
                                                    onClick={() => setOpenPromoInput(!openPromoInput)}>
                                        Получите скидку
                                    </span>
                                            </>
                                        )}

                                        {openPromoInput && (
                                            <div className={"flex gap-3 mt-3"} ref={promoInputRef}>
                                                <input className={"w-100 h-8 border-2 border-gray-700 rounded-md text-sm"}
                                                       placeholder={"Введите код купона"} type={"text"}/>
                                                <button className={"font-bold cursor-pointer text-sm text-gray-700"}>Применить
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className={"gap-3 mt-10"}>
                                <h1 className={"font-bold text-3xl text-center mb-3"}>Оформление заказа</h1>
                                <label htmlFor="helper-text"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Введите адрес своей электронной почты. На этот адрес будут
                                    отправляться уведомления о статусе заказа.
                                </label>
                                <input
                                    type="email"
                                    id="helper-text"
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@flowbite.com"
                                    value={newEmail}
                                    onChange={handleEmailChange}
                                />
                                {emailError && <span className="text-sm text-red-700">{emailError}</span>}

                                <p id="helper-text-explanation"
                                   className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    We’ll never share your details. Read our{' '}
                                    <a href="#"
                                       className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Privacy Policy
                                    </a>
                                </p>
                                <button
                                    type={"submit"}
                                    className="mt-3 flex rounded bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600">
                                    Оформить заказ
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Cart;