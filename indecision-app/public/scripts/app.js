"use strict";

console.log("app.js is running");

// JSX - Javascript XML
var app = {
    title: "Some Title",
    //subtitle: "Some Subtitle",
    options: ["yes", "no"]
};
var template = React.createElement("div", null, React.createElement("h1",null,app.title),
    app.subtitle && React.createElement("p",null," ",app.subtitle),
    React.createElement("p",null,app.options.length > 0 ? "Yes" : "No"),
    React.createElement("ol",null,
        React.createElement("li",null,"Item 1"),
        React.createElement("li",null,"Item 2"))
);
var count = 0;

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement("div",null,React.createElement("h1",null,"Count : ",count),
    React.createElement("button",{ id: "my-id", onClick: function onClick() {count++;renderCounterApp();} },"+1"),
    React.createElement("button",{ id: "minus", onClick: function onClick() {count--;renderCounterApp();} },"-1"),
    React.createElement("button",{ id: "clear", onClick: function onClick() {count = 0;renderCounterApp();} },"Reset")
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
