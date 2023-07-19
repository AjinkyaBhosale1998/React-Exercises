// Exercise: Working with "State"
// You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.
// Your task is to add an event listener to listen for clicks on the button that's already included in the App component.
// Upon a button click, the price should change from $100 to $75.
// Add a state value to the existing App component function and make sure the state value is both updated upon button clicks and output as part of the JSX code.
// Important: When using React Hooks like useState(), make sure to use them via React.useState() instead of just importing and using useState() standalone. This Udemy code editor / environment might fail to display the UI when not using React.useState()!

import React, { useState } from "react";
//import './styles.css';

export default function App() {
  const [price, setPrice] = React.useState(100);

  const applyDiscount = () => {
    setPrice(75);
  };

  return (
    <div>
      <p>${price}</p>
      <button onClick={applyDiscount}>Apply Discount</button>
    </div>
  );
}
