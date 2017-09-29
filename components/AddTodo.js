/**
 * Created by lenovo on 2017/9/29.
 */
import React,{ Component } from 'react'
import { PropTypes } from 'prop-types'

export default class AddTodo extends React.Component {
    handleClick(e) {
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }

    render(){
        return(
        <div>
            <input type="text" ref='input'/>
            <button onClick={(e) => this.handleClick(e)}>Add</button>
        </div>
        )
    }
}

AddTodo.proptypes = {
    onAddClick: PropTypes.func.isRequired
}