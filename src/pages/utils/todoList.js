//待办事项页面
import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'

import './todoList.less'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  /**
   * 添加任务
   */
  addTask() {
    //todo
  }
  
  /**
   *删除任务
  *
  * @returns
  * @memberof TodoList
  */
  deleteTask() {
    //todo
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
              <button onClick={this.deleteTask.bind(this)} className='todo-list-del'>删除</button>
            </li>
          </ul>
          <form className='todo-add'>
            <input className='todo-input' />
            <button onClick={this.addTask.bind(this)} className='todo-btn'>添加任务</button>
          </form>
        </div>
      </div>
    )
  }
}

//定义输入，容器组件->UI组件(当前组件)
const mapStateToProps = (state) => {

}

//定义输出，UI组件->容器组件
const mapDispatchToProps = (dispatch) => {

}

//连接UI组件和容器组件
const comTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default comTodoList