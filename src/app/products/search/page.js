"use client"

import React, {useCallback, useEffect, useState} from 'react';
import SearchComponent from "@/app/components/SearchComponent";
import {useSearchParams} from "next/navigation";
import Loading from "@/loading";


function SearchPage(props) {
    const searchParams = useSearchParams()
    const search = searchParams.get('keyword')
    const [searchData, setSearchData] = useState([]);
    const [loading, setLoading] = useState(false)

    const searchProduct = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://app.ecwid.com/api/v3/58958138/products?keyword=${search}`, {
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
                },
            });

            const data = await response.json();
            setSearchData(data.items);
            setLoading(false)
        } catch (err) {
            console.error("Error searching for item:", err);
        }
    }, [search])

    useEffect(() => {
        searchProduct();
    }, [search, searchProduct]);


    return (
        <>
            {loading && <Loading/>}
            <SearchComponent data={searchData}/>
        </>

    );
}

export default SearchPage;