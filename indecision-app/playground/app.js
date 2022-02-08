console.log("app.js is running");

// JSX - Javascript XML
const app = {
    title: "Some Title",
    //subtitle: "Some Subtitle",
    options: ["hell"],
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p> {app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Yes" : "No"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);
let count = 0;

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button id="my-id" onClick={() => {count++; renderCounterApp();}}>
                +1
            </button>
            <button id="minus" onClick={() => {count--;renderCounterApp();}}>
                -1
            </button>
            <button id="clear" onClick={() => {count= 0;renderCounterApp();}}>
                Reset
            </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
