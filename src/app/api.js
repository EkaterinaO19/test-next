"use client"

export const searchItem = async (searchQuery) => {
    try {
        const response = await fetch(
            `https://app.ecwid.com/api/v3/58958138/products?keyword=${searchQuery}`,
            {
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD",
                },
            }
        );

        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error searching for item:", err);
        throw err;
    }
};