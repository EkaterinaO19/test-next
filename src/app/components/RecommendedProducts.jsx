"use client"

import React, {useEffect, useState} from 'react';
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";
import {fetchProducts} from "@/app/api";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";


function RecommendedProducts(props) {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [])


    return (
        <section className={"flex justify-center flex-col"}>
            <h1 className={"font-bold text-4xl text-center flex-col mt-8 sm:text-xl"}>Рекомендуемые товары</h1>
            {loading ? <LoadingSkeleton/> : (
                <div className={"flex flex-wrap justify-center p-5"}>
                    {products.items.map(product => (
                        <Link href={`/products/${product.id}`} key={product.id}>
                            <ProductCard key={product.id}
                                         id={product.id}
                                         name={product.name}
                                         price={product.defaultDisplayedPriceFormatted}
                                         image={product.thumbnailUrl}
                                         inStock={product.inStock}
                                         loading={product.loading}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
}

export default RecommendedProducts;