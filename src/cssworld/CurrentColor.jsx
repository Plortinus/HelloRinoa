import React from 'react'
import './CurrentColor.css'

class HelloRinoa extends React.Component {
  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this)
    this.state = {
      color: '#333'
    }
  }
  changeColor() {
    // 随机color
    const color = '#' + (Math.random() * 0xffffff << 0).toString(16)
    this.setState({ color })
  }
  render () {
    return (
      <div className="child" style={{ color: this.state.color }}>
        <button style={{ color: this.state.color }} className="rinoa" onClick={this.changeColor}>你好,婉转喵!{this.props.number}</button>
      </div>
    )
  }
}

class CurrentColor extends React.Component {
  render() {
    // jsx列表渲染
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    const listItems = numbers.map((number, index) => <HelloRinoa key={index} number={number} />)
    return (
      <div className="parent">
        {listItems}
      </div>
    )
  }
}

export default CurrentColor
