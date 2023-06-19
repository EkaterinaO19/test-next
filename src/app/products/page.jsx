"use client"

import React, {Suspense} from 'react';
import RecommendedProducts from "@/app/components/RecommendedProducts";

export const metadata = {
    title: 'Products | Online Shop Next App',
    description: 'Choose style whatever you want',
}

function Products (props) {
    return (
            <RecommendedProducts />
        )
}



export default Products;