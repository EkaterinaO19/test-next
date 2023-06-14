import React from 'react';
import {NextResponse as response} from "next/server";
import {error} from "next/dist/build/output/log";
import Link from "next/link";

export const metadata = {
    title: 'Products | Online Shop Next App',
    description: 'Choose style whatever you want',
}

const storeId = 58958138;


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
async function Products (props) {
    const products = await getProducts();
    return  <>
        <h1>products</h1>
        <p>{products.total}</p>
        <ul>
            {products.items.map(item => (
                <li key={item.id}>
                    <Link href={`/products/${item.id}`}>
                        {item.id}
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    </>
}



export default Products;