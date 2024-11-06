import toast from "react-hot-toast";


// grt product
const getAllProducts = () => {
    const Allfavorite = localStorage.getItem('products');
    if (Allfavorite) {
        const product = JSON.parse(Allfavorite)
        return product

    } else {
        return []
    }
}



// add product
const addProducts = product => {
    const favorite = getAllProducts()
    const isExist = favorite.find(item => item.productId == product.productId)
    if (isExist) return toast.error('This product already exist !');

    favorite.push(product);
    localStorage.setItem('products', JSON.stringify(favorite))
    toast.success('Successfull added card product!');

}


// Wish add product
const getWishProducts = () => {
    const AllWishfavorite = localStorage.getItem('wishs');
    if (AllWishfavorite) {
        const product = JSON.parse(AllWishfavorite)
        return product

    } else {
        return []
    }
}

const addWishProducts = product => {
    const wish = getWishProducts()
    const isExist = wish.find(item => item.productId == product.productId)
    if (isExist) return toast.error('This product already exist !');

    wish.push(product);
    localStorage.setItem('wishs', JSON.stringify(wish))
    toast.success('Successfull added Wish card product!',);

}



//remove product
const removeProduct = id => {
    const favorite = getAllProducts()
    const deleteing = favorite.filter(product => product.productId != id)

    localStorage.setItem('products', JSON.stringify(deleteing))
    toast.success('Successfull Remove  product!');

    
}
const removeProducts = id => {
    const favorite = getAllProducts()
    const deleteing = favorite.filter(product => product.productId != id)

    localStorage.setItem('products', JSON.stringify(deleteing))
    toast.success('Successfull Remove  product!');

    
}








export { addProducts, getAllProducts, getWishProducts, addWishProducts,removeProduct, removeProducts }