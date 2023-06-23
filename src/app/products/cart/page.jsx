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
    const [email, setEmail] = useState('');
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

        if (!email) {
            setEmailError('Пожалуйста, введите адрес электронной почты.');
            return;
        }

        const emailPattern = /^\S+@\S+\.\S+$/;
        if (!emailPattern.test(email)) {
            setEmailError('Пожалуйста, введите корректный адрес электронной почты.');
            return;
        }

        dispatch(updateEmail(email));
        setEmailError("")
        router.push("/products/cart/payment")
    };


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
                                        <p className={"flex font-bold text-black text-xl"}>Количество
                                            товаров: {totalQuantity}</p>
                                        <p className={"flex font-bold text-black text-xl"}>ИГОТО: {totalPrice} P.</p>
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
                            <form
                                onSubmit={handleSubmit}
                                className={"flex flex-col mt-10 gap-2"}>
                                <h1 className={"font-bold text-3xl text-center mb-3"}>Оформление заказа</h1>
                                <p className={"mb-5"}>Введите адрес своей электронной почты. На этот адрес будут
                                    отправляться уведомления о статусе заказа.</p>
                                <div className={"flex flex-col gap-2"}>
                                    <input
                                        type={"email"}
                                        placeholder={"Ваш адрес элктронной почты"}
                                        className={"w-full h-10 border-2 border-gray-800 rounded-md"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <span className="text-sm text-red-700">{emailError}</span>}
                                </div>
                                <div className={"flex gap-1 mt-3 text-gray-700"}>
                                    <input type={"checkbox"} onChange={e => setNewsletterAgreeCheckbox(e.target.value)}/>
                                    <span className={"text-sm"}>Подписаться на новости и эксклюзивные предложения</span>
                                </div>
                                <div className="flex gap-5 mt-10">
                                    <button
                                        type={"submit"}
                                        className="flex rounded bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600">
                                        Оформить заказ
                                    </button>
                                    <span className={"text-gray-700 text-sm"}>* Все данные защищены сертификатом TLS и передаются в зашифрованном виде.</span>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Cart;