"use client"

import React from 'react';


function ProductCard({name, price, image, inStock, id}) {
    return (
        <div className={"flex flex-wrap w-1/3"}>
            <div
                className={`max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer ${inStock ? '' : 'bg-gray-200'}`}>
                {inStock ? (
                    <>
                        <div className="overflow-hidden rounded-2xl relative">
                            <img
                                className="h-70 rounded-2xl w-full object-cover transition-transform duration-500 hover:scale-110 "
                                src={image}/>
                        </div>
                        <div className="mt-4 pl-2 mb-2 flex justify-between">
                            <div>
                                {name && <p className="text-xl font-bold text-gray-900 mb-1">{name}</p>}
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">в наличии</span>
                                <p className="text-md text-gray-800 mb-5">{price}</p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="overflow-hidden rounded-2xl relative">
                            <div
                                className="h-70 rounded-2xl w-full object-cover transition-transform duration-500 hover:scale-110 bg-gray-400"/>
                        </div>
                        <div className="mt-4 pl-2 mb-2 flex justify-between">
                            <div>
                                {name && <p className="text-xl font-bold text-gray-900 mb-1">{name}</p>}
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">нет в налиичии</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default ProductCard;