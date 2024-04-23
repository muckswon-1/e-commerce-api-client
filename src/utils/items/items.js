import axios from "axios";
import { SERVER_URL } from "../utils";

//fetch all items
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while fetching items");
  }
};

//get product by Id;

export const getProductById = async (productId) => {
  try {
    const products = await getAllProducts();
    const product = products.filter((aProduct) => aProduct.id === productId)[0];
    return product;
  } catch (error) {
    console.error(error);
    throw new Error("An error occured while attempting to get product by id");
  }
};
