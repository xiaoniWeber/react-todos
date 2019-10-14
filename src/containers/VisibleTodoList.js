import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
// 将 todos做为props传递给 TodoList 
// (state, ownProps) ownProps与 Redux 的store与state完全无关。
// ownProps 是 todolist 展示组件自身的props
// 当state变化，或者ownProps变化的时候，mapStateToProps都会被调用
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
// 将action作为props绑定到展示组件上
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)  
// mapStateToProps 就是将store中的数据作为props绑定到展示相关的组件上
// mapDispatchToProps 将action作为props绑定到组件上
// Todolist 是展示组件  VisibleTodoList 就是有 redux通过 connect 方法生成的容器组件