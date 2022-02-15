
let showDetails = false;


const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggler</h1>
            <button onClick={()=>{showDetails = !showDetails; render();}}>
                Show Details
            </button>
                
            <div>
            {showDetails ? <p>These are the details</p> : <p></p>}
            </div>
        </div>
    );
    const appRoot = document.getElementById("app");
    ReactDOM.render(template, appRoot);
};

render();