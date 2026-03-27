const BASE_URL = "https://fresse-api.onrender.com/api";

export async function getBowls(){
    const res = await fetch(`${BASE_URL}/bowls`);
    if(!res.ok){
        throw new Error ("Failed to fetch bowls");
    }
    return res.json();
}

export async function getCatagories() {
    const res = await fetch(`${BASE_URL}/categories`);
    if(!res.ok){
        throw new Error ("Failed to fetch categories");
    }
    return res.json();
}

export async function getIngredients() {
    const res = await fetch(`${BASE_URL}/ingredients`);
    if(!res.ok){
        throw new Error ("Failed to fetch ingredients");
    }
    return res.json();
}