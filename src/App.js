import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartForm from "./Components/CartForm";
import CartItemList from "./Components/CartItemList";

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("cartItems")
    return saved ? JSON.parse(saved) : []
  })

  const [total, setTotal] = useState(() => {
    const saved = localStorage.getItem("totalPrice")
    return saved ? parseFloat(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items))
    const newTotal = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setTotal(newTotal);
    localStorage.setItem("totalPrice", newTotal.toFixed(2))
  }, [items])

  const addItem = (item) => {
    setItems([...items, item])
  };

  const deleteItem = (index) => {
    const updated = [...items]
    updated.splice(index, 1)
    setItems(updated)
  }

  const editItem = (index, newQty) => {
    const updated = [...items]
    updated[index].quantity = newQty
    setItems(updated)
  }

  return (
    <div className="container my-4">
      <h2 className="text-center">🛒 Self Checkout Cart</h2>
      <CartForm onAddItem={addItem} />
      <CartItemList
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />
      <h4 className="text-end mt-3">Total: £{total.toFixed(2)}</h4>
    </div>
  );
}

export default App;
