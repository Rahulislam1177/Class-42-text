const addToDb = id=>{
    let shoppingCart ={};


    //gat The shopping cart form local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart =JSON.stringify(storedCart)
    }

     // add quantity
     const quantity =shoppingCart[id]
     if (quantity){
            const newQuantity =quantity + 1;
            shoppingCart[id] = newQuantity;

     }else{
        shoppingCart[id] = 1;
     }
     localStorage.setItem('shopping-cart' ,JSON.stringify(shoppingCart))
}

const getStoredCart =()=>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart')
   if(storedCart){
   const shoppingCart = JSON.parse(shoppingCart);

   }
   return shoppingCart

}
const rimoveFromDb =(id)=>{
    const storedCart = localStorage.getItem('shopping-cart');
    if (shoppingCart){
        const shoppingCart = JSON.parse(storedCart);
        for (id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
        }
    }

}

const deleteShoppingCart =()=> {
    localStorage.removeItem('shopping-cart');

}


export {addToDb,
    getStoredCart,
    rimoveFromDb,
    deleteShoppingCart};