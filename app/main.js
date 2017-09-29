/**
 * Created by lenovo on 2017/9/20.
 */
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//引入组件
import App from './App.js'
import todoApp from '../Reducers/reducers'

let store = createStore(todoApp)
//注意下面引用的名称跟上面（import 后的名称）要一致（首字母大写）
//使用、挂在组件，两个参数
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-container')
)