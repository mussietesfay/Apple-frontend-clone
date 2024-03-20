import React, { Component } from 'react'

 class Headerl extends Component {
  render() {
    return (
        <li><a href={this.props.Linkname}>{this.props.name}</a></li>
    )
  }
}
export default Headerl;