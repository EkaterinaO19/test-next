"use client"

import React, {useEffect, useRef, useState} from 'react';

export const metadata = {
    title: 'Your Cart | Online Shop Next App',
    description: 'Add more to your style',
}

function Cart(props) {
    const [openPromoInput, setOpenPromoInput] = useState(false);
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


    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
                    </header>

                    {/*Images*/}
                    <div className="mt-8">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                    alt=""
                                    className="h-24 w-24 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-lg text-gray-900">Basic Tee 6-Pack</h3>

                                    <dl className="mt-3 space-y-px text-[14px] text-gray-600">
                                        <div>
                                            <dt className="inline">Size:</dt>
                                            <dd className="inline">XXS</dd>
                                        </div>

                                        <div>
                                            <dt className="inline">Color:</dt>
                                            <dd className="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="flex flex-1 items-center justify-end gap-2">
                                    <form>
                                        <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                        <input
                                            type="number"
                                            min="1"
                                            value="1"
                                            id="Line1Qty"
                                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-m text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                        />
                                    </form>

                                    <button className="text-gray-600 transition hover:text-red-600">
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
                            </li>
                            <li className="flex items-center gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                    alt=""
                                    className="h-24 w-24 rounded object-cover"
                                />

                                <div>
                                    <h3 className="text-lg text-gray-900">Basic Tee 6-Pack</h3>

                                    <dl className="mt-3 space-y-px text-[14px] text-gray-600">
                                        <div>
                                            <dt className="inline">Size:</dt>
                                            <dd className="inline">XXS</dd>
                                        </div>

                                        <div>
                                            <dt className="inline">Color:</dt>
                                            <dd className="inline">White</dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="flex flex-1 items-center justify-end gap-2">
                                    <form>
                                        <label htmlFor="Line1Qty" className="sr-only"> Quantity </label>

                                        <input
                                            type="number"
                                            min="1"
                                            value="1"
                                            id="Line1Qty"
                                            className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-m text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                        />
                                    </form>

                                    <button className="text-gray-600 transition hover:text-red-600">
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
                            </li>
                        </ul>

                        {/*Total Price*/}
                        <div className="mt-10 flex justify-end border-t border-gray-100 pt-10">
                            <div className="w-screen max-w-lg space-y-8">
                                <div className="space-y-2 text-sm ">
                                    <div className="flex flex-col">
                                        <div className={"flex justify-between"}>
                                            <p className={"font-bold text-black text-xl"}>ИГОТО:</p>
                                            <span className={"font-bold text-xl"}>1 400, 99 P</span>
                                        </div>
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

                                <div>
                                    <h1 className={"font-bold text-2xl"}>Оформление заказа</h1>
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

                                <div className="flex gap-5">
                                    <a
                                        href="#"
                                        className="flex rounded bg-gray-700 px-5 py-3 text-lg text-gray-100 transition hover:bg-gray-600"
                                    >
                                        Оформить заказ
                                    </a>
                                    <span className={"text-gray-700 text-sm"}>Все данные защищены сертификатом TLS и передаются в зашифрованном виде.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart;