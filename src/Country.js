import React, { Component } from 'react'

class Country extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li>{ this.props.name }</li>
    )
  }
}

export default Country
