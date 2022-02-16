class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your tasks in the hands of a computer'
        const options = ['thing 1', 'thing 2', 'thing 3', 'thing 4']
        return (
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
            <Options options={options}/>
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
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                <form onSubmit={console.log('Submitted')}>
                    <input type='text'/>
                    <button type='submit'>Add Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))