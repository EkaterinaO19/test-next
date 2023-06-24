import React from 'react';
import Link from "next/link";
import Image from "next/image";


const MainScreen = () => (
    <main className="relative w-full">
        <div>
            <Image src="/assets/keagan-unsplash.jpg"
                   alt="Full Width Image"
                   width={0}
                   height={0}
                   sizes="100vw"
                   className="w-full h-70" loading={"lazy"}/>
        </div>
        <div
            className="md:hidden absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white gap-3">
            <h1 className="font-bold text-7xl sm:text-xl sm:mt-20">Идеальный образ в любой ситуации</h1>
            <h3 className="text-lg sm:hidden ">
                У нас вы найдёте одежду и аксессуары, которые способны задать настроение на день и показать всем ваш
                безупречный
                вкус.
            </h3>
            <div className="flex sm:flex-row gap-3 sm:hidden">
                <button className="bg-black text-white text-lg p-4 rounded-lg hover:bg-gray-950">
                    <Link href="/products">В каталог</Link>
                </button>
                <button
                    className="bg-transparent border-2 text-white text-lg p-4 rounded-lg hover:bg-gray-950">
                    Instagram
                </button>
            </div>
            <div className="mt-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                     className="w-6 h-6">
                    <path d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>
        </div>
    </main>
);

export default MainScreen;