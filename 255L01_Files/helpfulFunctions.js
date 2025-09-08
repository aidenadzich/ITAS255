let createNode = function(element) {
    return document.createElement(element); 
    // Create the type of element you pass in the parameters
}

let createNode2 = (element) => document.createElement(element);

let appendNode = function(parent, el) {
    return parent.appendChild(el); 
    // Append the second parameter(el) to the first one (parent) in a parent-child relationship
}

let appendNode2 = (parent, el) => parent.appendChild(el);
