// src/pages/Menu.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import MenuItem from "../components/MenuItem";
import "./Menu.css";  // Import the CSS file here

const Menu = () => {
  const { addToCart } = useContext(CartContext);
  const menuItems = [
    { id: 1, name: "Pizza", description: "Cheese pizza with toppings", price: 100, image: "/assets/pizza.jpg" },
    { id: 2, name: "Burger", description: "Juicy beef burger", price: 70, price: 70, image: "/assets/burger.jpg" },
    { id: 3, name: "Pasta", description: "Spaghetti with sauce", price: 120, price: 120, image: "/assets/pasta.jpg" },
    { id: 4, name: "Sandwich", description: "Grilled chicken sandwich", price: 80, image: "/assets/sandwich.jpeg" },
    { id: 5, name: "Salad", description: "Fresh mixed greens with dressing", price: 60, image: "/assets/salad.jpg" },
    { id: 6, name: "Fries", description: "Crispy golden fries", price: 40, image: "/assets/fries.jpeg" },
    { id: 7, name: "Sushi", description: "Fresh and tasty sushi rolls", price: 150, image: "/assets/sushi.jpg" },
    { id: 8, name: "Tacos", description: "Delicious beef tacos", price: 90, image: "/assets/tacos.jpeg" },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id}>
            <MenuItem item={item} />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
