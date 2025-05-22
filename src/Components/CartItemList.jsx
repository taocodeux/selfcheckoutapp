import React from "react";
import CartItem from "./CartItem";

const CartItemList = ({ items, deleteItem, editItem }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center fw-bold text-danger">Your cart is empty!</p>
      ) : (
        items.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            index={index}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        ))
      )}
    </div>
  );
};

export default CartItemList;
