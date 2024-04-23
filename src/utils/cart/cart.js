import axios from "axios";
import { SERVER_URL } from "../utils";

//fetch shopping cart Items
export const getItemsInShoppingCart = async (userId) => {
  try {
    const response = await axios.get(`${SERVER_URL}/cart/user-cart/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while fetching cart items");
  }
};

//add item to cart

export const addItemToCart = async (userId, productId) => {
  console.log(userId);
  console.log(productId);
  try {
    await axios.post(`${SERVER_URL}/cart`, {
      user_id: userId,
      product_id: productId,
      quantity: 1,
    });
  } catch (error) {
    console.error(error);
    throw new Error(" An error occured while fetching cart items");
  }

  try {
    const newItemsInCart = await getItemsInShoppingCart(userId);
    return newItemsInCart;
  } catch (error) {
    console.error(error.stack);
    throw new Error(error.message);
  }
};

//delete item from cart
export const deleteItemFromCart = async (userId, productId) => {
  try {
    await axios.delete(`${SERVER_URL}/cart/${userId}/${productId}`);
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while deleting an item from cart");
  }

  try {
    const newItemsInCart = await getItemsInShoppingCart(userId);
    return newItemsInCart;
  } catch (error) {
    console.error(error.stack);
    throw new Error(error.message);
  }
};

//delete cart entry
export const deleteAnEntryInCart = async (cartId, userId) => {
  try {
    await axios.delete(`${SERVER_URL}/cart/${cartId}`);
  } catch (error) {
    console.error("An error occured while removing an entry from cart");
  }

  try {
    const newItemsInCart = await getItemsInShoppingCart(userId);
    return newItemsInCart;
  } catch (error) {
    console.error(error.stack);
    throw new Error(error.message);
  }
};
