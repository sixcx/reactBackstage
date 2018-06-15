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

  /**
   *过滤器
   *
   * @returns
   * @memberof TodoList
   */
  handleFilter () {

  }

  render () {
    const { todos, visibilityFilter } = this.props;
    let newTodos = todos;
    if (visibilityFilter.filter === 'SHOW_COMPLETED') {
      newTodos = todos.filter(l => l.completed)
    } else if (visibilityFilter.filter === 'SHOW_ACTIVE') {
      newTodos = todos.filter(l => !l.completed)
    }
    return (
      <div className='todo-box'>
        <div className='todo-innerBox'>
          <div className='todo-tab'>
            <div className="todo-tab-item">
              <a onClick={this.handleFilter.bind(this, 'SHOW_ALL')} style={{ color: visibilityFilter == 'SHOW_ALL' ? '#f01414' : '#4d555d' }}>全部任务</a>
              <a onClick={this.handleFilter.bind(this, 'SHOW_ACTIVE')} style={{ color: visibilityFilter == 'SHOW_ACTIVE'? '#f01414' : '#4d555d' }}>待办任务</a>
              <a onClick={this.handleFilter.bind(this, 'SHOW_COMPLETED')} style={{ color: visibilityFilter == 'SHOW_COMPLETED'? '#f01414' : '#4d555d' }}>已完成任务</a>
            </div>
          </div>
          <ul className='list-group'>
            {
              newTodos.map((data) => {
                <li className='todo-list-li' key={data.id}>
                  <Checkbox className='check-box' checked={data.completed} style={{ textDecoration: data.completed ? "line-through" : "none" }}>
                    {data.text}
                  </Checkbox>
                  <button onClick={this.deleteTask.bind(this)} className='todo-list-del'>删除</button>
                </li>
              })
            }
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
const ComTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default ComTodoList