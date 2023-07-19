// Exercise: Passing Data via "props"
// You're working on the UI prototype for an online shop and your task is to output two product items (via the <Product /> component you find in the Product.js file) below the main page title ("My Demo Shop") in the App component.

// The final UI should look like this:

// The two product items should use the same component (<Product />) but output different data (title, price & description). Data should be passed to the components (and output there) via props.

// The first product item is expected to display the following information:

// Title: Product 1

// Price: 10

// Description: First product

// The second product item is expected to display the following information:

// Title: Product 2

// Price: 20

// Description: Second product


import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
const App = () => {
    return (
      <div>
        <h1>My Demo Shop</h1>
        <Product
          title="Product 1"
          price="10"
          description="First product"
        />
        <Product
          title="Product 2"
          price="20"
          description="Second product"
        />
      </div>
    );
  };
  
  export default App;
