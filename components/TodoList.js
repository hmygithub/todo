/**
 * Created by lenovo on 2017/9/28.
 */
import React, { Component } from 'react'
import Todo from './Todo.js'
import { PropTypes } from 'prop-types'

//array1.map(callbackfn[, thisArg]) function callbackfn(value, index, array1)
class TodoList extends Component {
    render(){
        return(
            <ul>
                {this.props.todos.map((todo, index) =>
                        <Todo {...todo}
                            key={index}
                            onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}

//React.PropTypes.arrayOf(React.PropTypes.string)  // 某种类型的数组(字符串)
//React.PropTypes.shape({})                       // 是否符合指定格式的对象
TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
}

export default TodoList