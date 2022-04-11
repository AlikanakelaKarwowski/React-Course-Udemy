import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: [],
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {}
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
            console.log("Component Update");
        }
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            }),
        }));
    }
    handlePick() {
        const randnum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randnum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter Valid Value to Add Option";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This Option Already Exists";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const title = "Indecision";
        const subtitle = "Put your tasks in the hands of a computer";
        return (
            <div>
                <Header />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
