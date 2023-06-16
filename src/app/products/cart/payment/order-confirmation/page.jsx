import React from 'react';
import Link from "next/link";

function OrderConfirmationPage(props) {
    return (
        <section className={"flex flex-col"}>
            <div className={"flex flex-col"}>
                <div className={"mt-10 mb-10"}>
                    <h1 className={"text-2xl bold"}>Спасибо за заказ! 🎉</h1>
                    <p>Уведомления о состоянии заказа мы будем присылать на: email.com</p>
                </div>
                <div className={"flex flex-col mb-3"}>
                    <p>Заказ #XIK4Q</p>
                    <span>16-06-2023 19:46</span>
                    <Link href={'#'}>Распечатать заказ</Link>
                </div>

                <div className={"flex flex-col"}>
                    <p>Статус платежа: Ожидает оплаты</p>
                    <span>Наличными</span>
                    <span>Итого 995.00₽</span>
                </div>
                <button
                    type="submit"
                    className="mt-5 flex items-center justify-center rounded-md bg-transparent border-2 border-black px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Продолжить покупки
                </button>
            </div>

        </section>
    );
}

export default OrderConfirmationPage;