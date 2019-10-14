import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
// link展示组件的父组件是 footer展示组件
 // ownProps.filter 就是 其父组件的属性值

 // button 按钮点击的时候 dispatch action 里面的setVisibilityFilter
 //并将 自己的 filter传递给这个方法
 //然后 调用 reducers里面的方法 返回 state的值
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
