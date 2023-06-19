"use client"

import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {useRouter} from 'next/navigation'
import {searchItem} from "@/app/api";


function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const searchRef = useRef(null);
    const [searchQuery, setSearchQuery] = useState('');

    const router = useRouter()

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        searchProduct();
    };


        const searchProduct = async () => {
            try {
                const data = await searchItem(searchQuery)
                router.push(`/products/search?keyword=${searchQuery}`);
                console.log(data)
            } catch (err) {
                console.error("Error searching for item:", err);
            }
        }



    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearch(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [])


    return (
        <header className="bg-white shadow-md p-5">
            <nav className="flex justify-around">
                {showSearch ? (
                    <form className={`mr-4 ${showSearch ? 'block' : 'hidden'}`}
                          ref={searchRef}
                          onSubmit={handleSearchSubmit}
                    >
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 border rounded-md border-gray-300 focus:outline-0"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handleSearchKeyDown}
                            value={searchQuery}

                        />
                    </form>
                ) : (
                    <Link href={"/"}>
                        <h1 className={"font-bold text-2xl"}>Online Shop</h1>
                    </Link>
                )}

                <div className={"flex"}>
                    <div className={"flex gap-5 items-center"}>
                        <Link href={"/products"}>
                            <span>Каталог</span>
                        </Link>
                        <Link href={"/products/cart"}>
                            <div className={"flex gap-1"}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                </svg>
                                <span className={"font-bold mt-2"}>3</span>
                            </div>
                        </Link>
                        <button onClick={handleSearchClick} className={"cursor-pointer"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </button>
                        <Link href={"/account"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;