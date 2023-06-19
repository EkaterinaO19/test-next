"use client"

import React, {useEffect, useState} from 'react';
import SearchComponent from "@/app/components/SearchComponent";
import {useSearchParams} from "next/navigation";


function SearchPage(props) {
    const searchParams = useSearchParams()
    const search = searchParams.get('keyword')
    const [searchData, setSearchData] = useState([]);

    const searchProduct = async () => {
        try {
            const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products?keyword=${search}`, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
                },
            });

            const data = await response.json();
            setSearchData(data.items);
        } catch (err) {
            console.error("Error searching for item:", err);
        }
    };

    useEffect(() => {
        searchProduct();
    }, [search]);

    console.log("Searching for", searchData)

    return (
        <SearchComponent data={searchData}/>
    );
}

export default SearchPage;