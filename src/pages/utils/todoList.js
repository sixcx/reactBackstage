//待办事项页面
import React from 'react'
import { Checkbox } from 'antd'
import { connect } from 'react-redux'
import * as todoAction from '../../actions/todoList'

import './todoList.less'
import { bindActionCreators } from 'redux';

let nextId = 0;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount () {
    // console.log(this.props.todos, this.props.visibilityFilter)
  }
  /**
   * 添加任务
   */
  addTask() {
    const { todoAction } = this.props;
    //todo
    if(!this.input.value.trim()){
      return
    };
    todoAction.addTodo(this.input.value);
    this.input.value = '';
  }
  
  /**
   *删除任务
  *
  * @returns
  * @memberof TodoList
  */
  deleteTask(id) {
    const { todoAction } = this.props;
    //todo
    todoAction.delTodo(id)
  }

  /**
   *过滤器
   *
   * @returns
   * @memberof TodoList
   */
  handleFilter (type) {
    const { todoAction } = this.props;
    todoAction.setVisibilityFilter(type)
  }

  //check
  handleCheck (id) {
    const { todoAction } = this.props;
    todoAction.toggleTodo(id)
  }

  render () {
    const { todos, visibilityFilter } = this.props;
    let newTodos = todos;
    if (visibilityFilter === 'SHOW_COMPLETED') {
      newTodos = todos.filter(l => l.completed)
    } else if (visibilityFilter === 'SHOW_ACTIVE') {
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
                return (
                  <li className='todo-list-li' key={data.id}>
                    <Checkbox onClick={this.handleCheck.bind(this, data.id)} className='check-box' checked={data.completed} style={{ textDecoration: data.completed ? "line-through" : "none" }}>
                      {data.text}
                    </Checkbox>
                    <button onClick={this.deleteTask.bind(this, data.id)} className='todo-list-del'>删除</button>
                  </li>
                )
              })
            }
          </ul>
          <form className='todo-add'>
            <input className='todo-input' ref={r =>this.input = r} />
            <button onClick={this.addTask.bind(this)} className='todo-btn'>添加任务</button>
          </form>
        </div>
      </div>
    )
  }
}

//定义输入，容器组件->UI组件(当前组件)
const mapStateToProps = (state) => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
})

//定义输出，UI组件->容器组件
const mapDispatchToProps = (dispatch) => ({
  todoAction: bindActionCreators(todoAction, dispatch),
  dispatch: dispatch
})

//连接UI组件和容器组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)