"use client"

import React, {useState} from 'react';
import {addToCart} from "@/redux/slices/cartSlice";
import {useDispatch} from "react-redux";
import Link from "next/link";
import {v4 as uuidv4} from 'uuid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function ProductCardBig({product}) {
    const {id, name, defaultDisplayedPriceFormatted, imageUrl, seoDescription, price} = product;
    const dispatch = useDispatch();

    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const productItem = {
        breadcrumbs: [
            {id: 1, name: 'Главная', href: '/'},
            {id: 2, name: 'Каталог', href: '/products'},
        ],
    }

    return (
        <section className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {productItem.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <div className="font-medium text-gray-500 hover:text-gray-600">
                                {name}
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img src={imageUrl} alt={name} className="h-full w-full object-cover object-center"/>
                    </div>
                </div>

                {/*/!* Product info *!/*/}
                <div
                    className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{defaultDisplayedPriceFormatted}</p>

                        <form className="mt-10">

                            {/* Sizes */}
                            <div className="mt-10 flex flex-col gap-3">
                                <span className={"font-bold"}>Choose a size:</span>
                                <div className="flex items-center justify-between">
                                    <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-500">
                                        Size guide
                                    </a>
                                </div>
                                <div className="flex gap-8 ">
                                    {/*{product?.options.length !== 0 && (*/}
                                    {/*    product?.options[0]?.choices?.map((choice) => (*/}
                                    {/*        <label key={uuidv4()}>*/}
                                    {/*            <input*/}
                                    {/*                className={"cursor-pointer"}*/}
                                    {/*                type="radio"*/}
                                    {/*                name="size"*/}
                                    {/*                value={choice.text}*/}
                                    {/*                checked={selectedSize === choice.text}*/}
                                    {/*                onChange={handleSizeChange}*/}
                                    {/*            />*/}
                                    {/*            <p>{choice.text}</p>*/}
                                    {/*        </label>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </div>
                            </div>

                            {/*ADD TO CART BUTTON*/}
                            <button
                                className="mt-10 flex w-full items-center justify-center rounded-md bg-transparent border-2 border-black px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addToCart({
                                        uId: uuidv4(),
                                        id,
                                        name,
                                        defaultDisplayedPriceFormatted,
                                        imageUrl,
                                        seoDescription,
                                        selectedSize,
                                        price
                                    }))
                                }}
                            >
                                Добавить в корзину
                            </button>
                            <Link href={"/products/cart"}>
                                <button
                                    className="mt-10 flex w-full items-center justify-center rounded-md bg-transparent border-2 border-black px-8 py-3 text-base font-medium text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    Перейти в корзину
                                </button>
                            </Link>
                        </form>
                    </div>

                    {/* Description and details */}
                    <div
                        className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        <div>
                            <h3 className="sr-only">Description</h3>
                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{seoDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductCardBig;