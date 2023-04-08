import { getShoppingCart } from "./utilities/fakedb"

 const cartsProductLoader = async () => {
       const loadedProduct = await fetch ('products.json')
       const products = await loadedProduct.json()
    //    console.log(products);
      const storecart = getShoppingCart()
      const saveCart = []
      for (const key in storecart) {
         const addedCart = products.find(product => product.id == key) 
         if (addedCart){
            const quantiy = storecart[key]
            addedCart.quantiy = quantiy
            saveCart.push(addedCart)
         }
      }

       return saveCart
 }


 export default cartsProductLoader