import React, { Component } from 'react'
import Form from './components/Form.js'

export default class App extends Component {
state = {
  inputValue: "",

}

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    return (
      <div>
        {/* <input type="text" id="searchInput" value={this.state.value} onChange={this.handleInputChange}/> */}
        <Form value={this.state.inputValue} change={this.handleInputChange} />
        
        <div id="map"></div>
      </div>
    )
  }
}
