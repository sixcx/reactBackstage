//待办事项页面
import React from 'react'
import { Checkbox } from 'antd'

import './todoList.less'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    const active = false;
    return (
      <div className='todo-box'>
        <div className='todo-innerBox'>
          <div className='todo-tab'>
            <div className="todo-tab-item">
              <a style={{ color: active? '#f01414' : '#4d555d' }}>全部任务</a>
              <a style={{ color: active? '#f01414' : '#4d555d' }}>待办任务</a>
              <a style={{ color: active? '#f01414' : '#4d555d' }}>已完成任务</a>
            </div>
          </div>
          <ul className='list-group'>
            <li className='todo-list-li'>
              <Checkbox className='check-box'>
                test
              </Checkbox>
              <button className='todo-list-del'>删除</button>
            </li>
          </ul>
          <form className='todo-add'>
            <input className='todo-input' />
            <button type='submit' className='todo-btn'>添加任务</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList