const SERVER_URL = 'http://localhost:2070'
import axios from 'axios';



//fetch shopping cart Items
export  const  getItemsInShoppingCart =  async () => {
    try {
        const response = await axios.get(`${SERVER_URL}/cart`);
    
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('An error occured while fetching cart items');
    }
}

//add item to cart

export const addItemToCart = async (userId, productId) => {
    try {
         await axios.post(`${SERVER_URL}/cart`,{
            user_id: userId,
            product_id: productId,
            quantity: 1
        });

    } catch (error) {
        console.error(error);
        throw new Error (' An error occured while fetching cart items')
    }
}

//delete item from cart
export const deleteItemFromCart = async (userId, productId) => {
    try {
        await axios.delete(`${SERVER_URL}/cart/${userId}/${productId}`);
    } catch (error) {
        console.error(error);
        throw new Error('An error occured while deleting an item from cart')
    }
}

//delete cart entry
export const deleteAnEntryInCart = async (cartId) => {
    try {
        await axios.delete(`${SERVER_URL}/cart/${cartId}`);
    } catch (error) {
        console.error('An error occured while removing an entry from cart')
    }
}

//count items in shopping cart

export const itemCount = async () => {
    try {
        let total = 0;
        const allItems = await getItemsInShoppingCart();
        allItems.forEach(item => {
            total += item.quantity;
        })
        return total;
        
    } catch (error) {
        console.error(error);
        console.log('An error occured while counting items')
    }
}