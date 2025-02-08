import { useState, useEffect } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(localStorage.getItem("cartCount") || 0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWithTax, setTotalWithTax] = useState(0);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems);
      const uniqueCartItems = removeDuplicates(parsedCartItems);
      setCartItems(uniqueCartItems);
      calculateTotalPrice(uniqueCartItems);
    }
  }, []);

  useEffect(() => {
    calculateTotalWithTax(totalPrice);
  }, [totalPrice]);

  const removeDuplicates = (items) => {
    const uniqueItems = [];
    const itemIds = new Set();
    items.forEach(item => {
      if (!itemIds.has(item.courseId)) {
        uniqueItems.push(item);
        itemIds.add(item.courseId);
      }
    });
    return uniqueItems;
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '') || 0), 0);
    setTotalPrice(total);
    localStorage.setItem("totalPrice", total);
  };

  const calculateTotalWithTax = (total) => {
    const tax = total * 0.18;
    setTotalWithTax(total + tax);
  };

  const handleRemove = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    setCartCount(updatedCartItems.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("cartCount", updatedCartItems.length);
    calculateTotalPrice(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.courseName}</td>
                <td>{item.price ? item.price : "N/A"}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No items in cart</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="total-price">
        <h2>Total Price: {totalPrice}</h2>
        <h2>Total Price with Tax: {totalWithTax.toFixed(2)}</h2>
        <button className="pay-button">Make Payment</button>
      </div>
    </div>
  );
};

export default Cart;
