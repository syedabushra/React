/*const heading = React.createElement("h1", { id: "heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);*/

/*
<div id= "parent">
    <div id= "child1">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id= "child2">
        <h1>I'm an H1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>
*/
/*const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"}, 
        [React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I'm an h1 Tag"),
        React.createElement("h2", {}, "I'm an h2 Tag")]
    )]

);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

console.log(parent);
*/

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element = JS Object => HTML element(Render)  
// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

// JSX - HTML like syntax
// JSX - Transpiled before it reaches the JS - PARCEL - Babel
// JSX => Babel transpiles it to React.createELement => React Element = JS Object => HTML element(Render)
const jsxHeading = (<h1 className= "head" tabIndex="5">Namaste React heading using JSX</h1>);


// React functional Component
const HeadingComponent = () => (
    <div id="container">
        <h1 className = "heading">Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
// root.render(heading);
