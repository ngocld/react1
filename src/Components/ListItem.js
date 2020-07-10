import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        
        const listItem = this.props.source
        console.log(listItem);

        const data = listItem.map((value, key) =><li key={key}>{value}</li>)
        return (
            <div>
                <ul>
                    {data}
                </ul>
            </div>
        )
    }
}
