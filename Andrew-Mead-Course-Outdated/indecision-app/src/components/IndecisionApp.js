import React from 'react';
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from './OptionModal';
export default class IndecisionApp extends React.Component {
    state = { 
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            }),
        }));
    };
    
    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption:undefined}));
    }
    
    handlePick = () => {
        const randnum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randnum];
        this.setState(() => ({selectedOption:option}))
    };
    
    handleAddOption = (option) => {
        if (!option) {
            return "Enter Valid Value to Add Option";
        } else if (this.state.options.indexOf(option) > -1) {
            return "This Option Already Exists";
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
    
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

    render() {
        const title = "Indecision";
        const subtitle = "Put your tasks in the hands of a computer";
        return (
            <div>
                <Header />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
