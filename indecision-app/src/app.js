class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.state = {
            options: ['thing 1', 'thing 2', 'thing 3', 'thingy']
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your tasks in the hands of a computer'
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action hasOptions={this.state.options.length >0}/>
            <Options 
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>     
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button 
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What Should I Do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => {
                        return <Option key={option} optionText={option} />
                    })
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return(
            <li>
                {this.props.optionText}
            </li>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()

        if(option){
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))