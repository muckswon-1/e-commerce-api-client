const SERVER_URL = 'http://localhost:2070'
import axios from 'axios';

//fetch all items
export const getAllProducts =  async () =>  {

    try {
        const response = await axios.get(`${SERVER_URL}/products`)
        return response.data;

    } catch (error) {
        console.error(error)
        throw new Error('An error occured while fetching items');
    }
}

//get product by Id;

export const getProductById = async (productId) => {
   try {
    const products = await getAllProducts();
    const product  = products.filter(aProduct => aProduct.id === productId)[0];
    return product;

   } catch (error) {
    console.error(error);
    throw new Error('An error occured while attempting to get product by id')
   }

}

//get subtotal
export const subtotal =  async (item) => {
    const itemInProducts = await getProductById(item.product_id);
    const itemPrice = itemInProducts.unit_price;
    const total = itemPrice * item.quantity;
    return total;
}

export const allItemsTotal = async (items) => {
    let total = 0;
    const promises = items.map(async (item) => {
        console.log(item);
        return await subtotal(item);
    });
    const subtotals = await Promise.all(promises);
    total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
    console.log(total);
    return total;
};




