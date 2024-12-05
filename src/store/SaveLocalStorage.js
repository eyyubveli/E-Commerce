export const getProductFromLocalStorage = () => {
    const product = localStorage.getItem('products');

    return product ? JSON.parse(product) : [];
};


export const saveToLocalStorage = (product) => {
    localStorage.setItem('products', JSON.stringify(product));
}


