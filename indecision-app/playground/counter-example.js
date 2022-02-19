class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleSubOne = this.handleSubOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
    handleAddOne(){
        console.log('Test')
    }
    handleSubOne(){
        console.log('Test -1')
    }
    handleReset(){
        console.log('Test 0')
    }
}




ReactDOM.render(<Counter/>, document.getElementById('app'))