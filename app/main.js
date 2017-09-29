/**
 * Created by lenovo on 2017/9/20.
 */
import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//�������
import App from './App.js'
import todoApp from '../Reducers/reducers'

let store = createStore(todoApp)
//ע���������õ����Ƹ����棨import ������ƣ�Ҫһ�£�����ĸ��д��
//ʹ�á������������������
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-container')
)