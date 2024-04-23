import React from "react";
import style from "./ItemList.module.css";
import Item from "./Item";

function ItemList({ products, setShouldRefetch }) {
  return (
    <div className={style.item_list}>
      {products.length ? (
        products.map((product) => {
          return (
            <Item
              key={product.id}
              product={product}
              setShouldRefetch={setShouldRefetch}
            />
          );
        })
      ) : (
        <p>
          <i>No products at the moment</i>
        </p>
      )}
    </div>
  );
}

export default ItemList;
