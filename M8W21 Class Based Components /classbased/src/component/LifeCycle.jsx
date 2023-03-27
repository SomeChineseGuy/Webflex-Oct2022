import React, { useEffect } from "react";

class LifeCycle extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      interval: null
    }
  }
  // useEffect(() =>{})
  componentDidMount() {
    console.log('Component Did Mount');
    // const interval = setInterval(() => {
    //   console.log('hello');
    // }, 500)

    // this.setState((prev) => {
    //   return {
    //     ...prev,
    //     interval
    //   }
    // })
    // this.setState({interval})
  }

  // useEffect(() => {}, [input])
  // useEffect(() => {}, [])
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    console.log('component did update');
    if(prevState.input !== this.state.input) {
      console.log('this has been updated');
    } 
    // if(prevState.input !== this.state.input) {}
  }

  // useEffect(() => {return {do something to unmount}}, [])
  componentWillUnmount () {
    this.setState({interval: clearInterval()})
    console.log('Component Unmounted');
  }


  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" 
          value={this.state.input}
          onChange={(e) => this.setState({input: e.target.value})}
        />
      </div>
    )
  }
}

export default LifeCycle;