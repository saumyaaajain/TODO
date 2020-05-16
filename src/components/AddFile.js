import React from 'react';


export default class AddFile extends React.Component{
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            task: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({task: e.target.value});
    };

    onSubmit = (e) => {
        console.log(this.state);
        this.props.onSubmit({
           description: this.state.task
        });
    };


    render() {
        return (
            <div>
                <input
                    type = "text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="Task"
                />
                <button
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </div>
        );
    }
}