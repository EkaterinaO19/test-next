import React from 'react';

export async function getServerSideProps({ params }) {
    const { id } = params;
    const category = await getCategories(id);

    return {
        props: {
            category,
        },
    };
}

async function getCategories(id) {
    try {
        const response = await fetch(`https://app.ecwid.com/api/v3/58958138/categories/${id}`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            },
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        console.log(error);
    }
}

async function CategoryPage({id}) {
    const category = await getCategories(id);

    return (
        <div>
            <h1>{category?.name}</h1>
        </div>
    );
}

export default CategoryPage;