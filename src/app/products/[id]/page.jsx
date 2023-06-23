"use client"

import React, {useEffect, useState} from 'react';
import ProductCardBig from "@/app/components/ProductCardBig";


async function getProduct(productId) {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products/${productId}`, {
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
    return <div>{productId ? JSON.stringify(productId) : "Loading..."}</div>;
}

function ProductPage({ params }) {
    const [product, setProduct] = useState({});
    const [options, setOptions] = useState(null);


    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await getProduct(params.id);
                setProduct(productData);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [params.id]);


    useEffect(() => {
        if(product&&Array.isArray(product?.options) && product?.options.length > 0){
            setOptions(product?.options[0]);
        }
    },[product])


    // {product?.options.some(item => typeof item === 'object') ? "PRODUCT" : "no products"}
    // console.log("PRODUCT", product?.options);

    // if (Array.isArray(product?.options) && product?.options.length > 0) {
    //     console.log('Array', product?.options[0]); // true
    //
    // } else {
    //     console.log('Array is undefined or empty');
    //     console.log(product);
    // }

    return (product&&<ProductCardBig options={options} product={product}/>
    )
}

export default ProductPage;