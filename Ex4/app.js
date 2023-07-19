// Exercise: Working with JSX Code
// This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

// Important: The custom JSX code must be added inside the existing <div> element.





import React from "react";
import ExerciseComponent from "./ExerciseComponent";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <ExerciseComponent />
    </div>
  );
};

export default App;
