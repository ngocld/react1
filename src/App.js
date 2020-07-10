import React, { Component } from 'react'
import './App.css';
import AddItem from './Components/AddItem'
import ListItem from './Components/ListItem'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listItem : ['a1', 'a2', 'a3']
      
    }
  }

  onLayGiaTriCuaCon = (value) => {
    // this.setState({listItem: [...this.state.listItem, value]})

    if (this.state.listItem.indexOf(value) > -1)
    {
        alert("du lieu trung roi")
        return;
    }
    
    this.setState({listItem: [...this.state.listItem, value]})
  }

  render() {
    return (
      <div className="section">
        <AddItem layGiaTriCuaCon={(value) => this.onLayGiaTriCuaCon(value)} />
        <ListItem source={this.state.listItem} />
      </div>
    )
  }
}