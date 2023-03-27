// const ClassBased =
import React from "react";

class ClassBased extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    // this.state.counter += 1
    this.setState({counter: this.state.counter + 1, newMessage: 'this is new state'})
  }

  render() {
    return(
      <div>
        <h1>Hello</h1>
        <p>Message: {this.props.message}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default ClassBased;