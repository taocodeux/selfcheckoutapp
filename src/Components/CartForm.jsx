import React, { useState } from "react";

const CartForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQty, setItemQty] = useState("");

  const handleSubmit = (e) => {
        e.preventDefault();
        if (
        itemName.trim() !== "" &&
        !isNaN(itemPrice) &&
        itemPrice > 0 &&
        !isNaN(itemQty) &&
        itemQty > 0
        ) {
        onAddItem({
            name: itemName,
            price: parseFloat(itemPrice),
            quantity: parseInt(itemQty),
        })

        setItemName("")
        setItemPrice("")
        setItemQty("")
        }
    }

  return (
    <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-white rounded mb-4">
        <h2 className="text-center mb-3">📝 Add Item</h2>
        <input
            type="text"
            placeholder="Item name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="form-control mb-3"
        />
        <input
            type="number"
            placeholder="Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="form-control mb-3"
        />
        <input
            type="number"
            placeholder="Quantity"
            value={itemQty}
            onChange={(e) => setItemQty(e.target.value)}
            className="form-control mb-3"
        />
        <button type="submit" className="btn btn-dark w-100">
            Submit
        </button>
    </form>
  );
};

export default CartForm;
