import React from 'react';
import ProductCard from "@/app/components/ProductCard";

async function getProducts(){
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            },
            // Отправка запроса и обновление кэша
            // next: {
            //     revalidate: 1000;
            // }
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

async function RecommendedProducts(props) {
    const products = await getProducts();

    return (
        <section className={"flex justify-center flex-col mt-8"}>
            <h1 className={"font-bold text-4xl text-center"}>Рекомендуемые товары</h1>
            <div className={"flex flex-wrap justify-center p-5"}>
                {products.items.map(product => (
                    <ProductCard key={product.id} name={product.name} price={product.defaultDisplayedPriceFormatted} image={product.thumbnailUrl}/>
                ))}
            </div>
        </section>
    );
}

export default RecommendedProducts;