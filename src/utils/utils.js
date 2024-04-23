export const SERVER_URL = "http://localhost:2070";

//get subtotal
export const subtotal = (item, products) => {
  console.log(products);
  try {
    if (products) {
      const itemInProducts = products.filter(
        (product) => product.id === item.product_id,
      )[0];
      const itemPrice = itemInProducts.unit_price;
      const total = itemPrice * item.quantity;
      return total;
    } else {
      throw new Error("Products is undefined");
    }
  } catch (error) {
    console.error("Error calculating subtotal", error.stack);
    return false;
  }
};

export const allItemsTotal = (items, products) => {
  let total = 0;
  console.log(products);
  if (items && products) {
    items.forEach((item) => {
      total += subtotal(item, products);
    });
    return total;
  }

  // const prom = items.map(async (item) => {

  //     return  subtotal(item);
  // });
  // const subtotals = await Promise.all(promises);
  // total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
  return false;
};

//count items in shopping cart

export const itemCount = (items) => {
  try {
    let total = 0;
    items.forEach((item) => {
      total += item.quantity;
    });
    return total;
  } catch (error) {
    console.error(error);
    console.log("An error occured while counting items");
    return 0;
  }
};
