import React from 'react';
import Image from "next/image";
import Link from "next/link";

async function getCategories(){
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/categories`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            }
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        console.log(error)
    }
}

async function ProductsCategories(props) {
    const categories = await getCategories();

    return (
        <div id={"productsCategories"} className={"relative w-full bg-white p-8"}>
            <h1 className={"font-bold text-4xl text-center sm:text-xl"}>Категории товаров</h1>
            <div className={"flex flex-wrap justify-center gap-8 mt-8"}>
                {categories.items.map((category) => (
                    <Link href={`/categories/${category.id}`} key={category.id} >
                        <div className="bg-gray-200 w-60 h-60 relative overflow-hidden shadow-2xl rounded-lg cursor-pointer hover:opacity-90">
                            <div className="absolute inset-0">
                                <div className="before:absolute before:inset-0 before:bg-black before:opacity-30" />
                            </div>
                            <Image width={100} height={100} className="object-cover w-full h-full" src={category.imageUrl} alt="Product Image" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-lg font-bold">{category.seoTitle}</h3>
                            </div>
                        </div>
                    </Link>
                    )
                )}
            </div>
        </div>
    )
};

export default ProductsCategories;