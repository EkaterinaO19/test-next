import React from 'react';
import Link from "next/link";

const Navbar = (props) => (
    <header>
        <Link href={"/"}>Online Shop</Link>
        <Link href={"/cart"}>Cart</Link>
        <Link href={"/products"}>Products</Link>
    </header>
);

export default Navbar;