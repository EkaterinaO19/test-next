"use client"

import React, {useEffect, useState} from 'react';
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

async function getProducts() {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products`, {
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

function RecommendedProducts(props) {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .finally(() => {setLoading(false)});
    },[])


    return (
        <section className={"flex justify-center flex-col mt-8"}>
            <h1 className={"font-bold text-4xl text-center"}>Рекомендуемые товары</h1>
            {loading ? <h3>Loading...</h3> : (
                <div className={"flex flex-wrap justify-center p-5"}>
                    {products.items.map(product => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <ProductCard key={product.id}
                                         id={product.id}
                                         name={product.name}
                                         price={product.defaultDisplayedPriceFormatted}
                                         image={product.thumbnailUrl}
                                         inStock={product.inStock}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RecommendedProducts;