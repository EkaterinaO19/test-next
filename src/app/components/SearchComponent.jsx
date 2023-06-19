import React from 'react';
import ProductCard from "@/app/components/ProductCard";

function SearchComponent({data}) {
    const productItem = {
        breadcrumbs: [
            {id: 1, name: 'Главная', href: '/'},
            {id: 2, name: 'Каталог', href: '/products'},
        ]
    }
    return (
        <section className="bg-white h-screen">
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
                                {data.name}
                            </div>
                        </li>
                    </ol>
                </nav>

                <div className={`mr-4`}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border rounded-md border-gray-300 focus:outline-0 w-1/3 mt-5"
                        value={data.name}
                    />
                </div>
                        {data.map(item => (
                                <ProductCard
                                    key={item.id}
                                    name={item.name}
                                    price={item.defaultDisplayedPriceFormatted}
                                    image={item.thumbnailUrl}
                                    inStock={item.inStock}
                                />
                            ))}
                {data.length === 0 && "Товары не найдены!"}
            </div>
        </section>
    );
}

export default SearchComponent;