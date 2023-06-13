import React from 'react';
import Link from "next/link";

const NotFound = (props) => (
    <>
        <h1>
            Ooops... Page Not Found
        </h1>
        <p>Возможно, вы перешли по устаревшей ссылке или страница, которую вы ищете, больше не существует.</p>
        <Link href={"/"}>Back to Home Page</Link>
    </>
);

export default NotFound;