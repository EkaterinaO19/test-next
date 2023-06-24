"use client"

import React, {useEffect, useState} from 'react';
import ProductCardBig from "@/app/components/ProductCardBig";
import {getProduct} from "@/app/api";
import LoadingSkeleton from "@/app/components/LoadingSkeleton";


function ProductPage({params}) {
    const [product, setProduct] = useState({});
    const [options, setOptions] = useState(null);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function fetchData() {
            try {
                const productData = await getProduct(params.id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchData();
    }, [params.id]);


    useEffect(() => {
        if (product && Array.isArray(product?.options) && product?.options.length > 0) {
            setOptions(product?.options[0]);
        }
    }, [product])

    return (<div className="flex justify-center items-center h-screen">
            {loading ? (
                <LoadingSkeleton/>
            ) : (
                product && <ProductCardBig options={options} product={product}/>
            )}
        </div>
    )
}

export default ProductPage;