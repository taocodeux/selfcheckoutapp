import React from "react";

const CartItem = ({ item, index, deleteItem, editItem }) => {
  return (
    <div className="card mb-2 p-3 d-flex flex-row justify-content-between align-items-center">
        <div>
            <strong>{item.name}</strong> – £{item.price.toFixed(2)} × {item.quantity}
        </div>
        <div>
            <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => {
                    const newQty = prompt("New quantity:", item.quantity);
                    if (newQty && parseInt(newQty) > 0) {
                    editItem(index, parseInt(newQty));
                    }
                }}
                >
                Edit
            </button>
            <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteItem(index)}
                >
                Delete
            </button>
      </div>
    </div>
  );
};

export default CartItem;
