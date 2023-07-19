// Exercise: Component Composition
// You are working on a UI prototype for a "Todos" application. At the moment, the prototype displays some basic todos for learning React and a short info message.

// Your task is to optimize the code and use React component composition to create a re-usable <Card /> component that can be wrapped around different content (e.g., todo markup, info message markup).

// The final UI should look like the initial UI - i.e., no styling changes are required. But the code should change and embraces React's composability.

// Create the <Card /> component in the already existing Card.js file and use a <div> as a main element in that component.


import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Todos</h1>
            
            <div className="card">
              <p>Please note: Below are just the most important todos - feel free to add more.</p>
            </div>
            
            <ul>
              <li className="todo">
                <div className="card">
                  <h2>Learn React</h2>
                  <p>Learn React fundamentals & explore core concepts</p>
                </div>
              </li>
              <li className="todo">
                <div className="card">
                  <h2>Practice React</h2>
                  <p>Apply your knowledge & build demo projects</p>
                </div>
              </li>
            </ul>
        </div>
    );
}