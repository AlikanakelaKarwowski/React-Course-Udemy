class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            
            if (options){
                this.setState(() => ({options}))
            }
        } catch (e) {}
    }
    componentDidUpdate(prevProps, prevState) {  
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log('Component Update')
        }
    }
    componentWillUnmount() {
        console.log('Component Will Unmount')
    }
    handleDeleteOptions(){
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }
        ))
    }
    handlePick(){
        const randnum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randnum]
        alert(option)
    }
    handleAddOption(option){
        if (!option){
            return 'Enter Valid Value to Add Option'
        } else if (this.state.options.indexOf(option)> -1) {
            return 'This Option Already Exists'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your tasks in the hands of a computer'
        return (
            <div>
            <Header/>
            <Action
            hasOptions={this.state.options.length >0}
            handlePick={this.handlePick}
            />
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
            </div>
        )
    }
}

const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision',
    subtitle: 'Let a Computer Decide'
}

const Action = (props) => {
    return (
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
        </div>
    )
}

const Options = (props) => { 
    return ( 
        <div> 
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Add an Option to Get Started</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option}
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))

            }
        </div>
    )
}


const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)
        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option'/>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))