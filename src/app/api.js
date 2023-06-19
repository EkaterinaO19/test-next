"use client"

const API_URL = "https://app.ecwid.com/api/v3/58958138/";

export const searchItem = async (searchQuery) => {
    try {
        const response = await fetch(
            `${API_URL}products?keyword=${searchQuery}`,
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

export async function fetchProducts() {
    try {
        const response = await fetch(`${API_URL}products`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD"
            }
        });

        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Request failed with status " + response.status);
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch products");
    }
}


