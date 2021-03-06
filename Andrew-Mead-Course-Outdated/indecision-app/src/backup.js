
console.log("app.js is running");

// JSX - Javascript XML
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: [],
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        console.log(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option);
};


const render =() => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => {
                    return <li key={option}>{option}</li>;
                })
            }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
}


render()