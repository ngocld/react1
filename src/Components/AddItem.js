import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {valusTask: "First Task"}
    }

    onChange = (event) => {
        this.setState({valusTask: event.target.value})
    }

    onClick = () => {
        this.props.layGiaTriCuaCon(this.state.valusTask)
    }

    render() {
        return (
            <div>
                <input type="text" 
                    name="task" aria-describedby="helpId" 
                    placeholder="add task in here"
                    value={this.state.valusTask}
                    onChange={(event) => this.onChange(event)}      
                    />

                <input name="addnew" 
                    onClick={() => this.onClick()}
                    type="button" 
                    value="Add New"/>
            </div>
        )
    }
}