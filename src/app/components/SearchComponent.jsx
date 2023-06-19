import React from 'react';
import ProductCard from "@/app/components/ProductCard";
import Link from "next/link";

function SearchComponent({data}) {
    const productItem = {
        breadcrumbs: [
            {id: 1, name: 'Главная', href: '/'},
            {id: 2, name: 'Каталог', href: '/products'},
        ]
    }


    return (
        <section className="bg-white">
            <div className="pt-6 ml-8">
                <h1 className={"font-bold text-3xl mx-auto flex mb-3"}>Поиск товаров</h1>
                <nav aria-label="Breadcrumb">
                    <ol role="list"
                        className="mx-auto flex  ">
                        {productItem.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <div aria-current="page"
                                 className="font-medium text-gray-500 hover:text-gray-600 mx-auto ">
                                Поиск
                            </div>
                        </li>
                    </ol>
                </nav>
                {!data || data.length === 0 &&
                    <h1 className={"text-xl font-bold text-gray-900 mb-1"}>No products found!</h1>}

                {data.map(item => (
                    <Link href={`/products/${item.id}`} key={item?.id}>
                        <ProductCard
                            key={item?.id}
                            name={item?.name}
                            price={item?.defaultDisplayedPriceFormatted}
                            image={item?.thumbnailUrl}
                            inStock={item?.inStock}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default SearchComponent;