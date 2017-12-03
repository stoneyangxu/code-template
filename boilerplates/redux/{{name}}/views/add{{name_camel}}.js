import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add{{name_camel}} } from '../actions'

class Add{{name_camel}} extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const value = this.state.value
    if (!value.trim()) {
      return
    }

    this.props.onAdd(value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onInputChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAdd: (text) => {
      dispatch(add{{name_camel}}(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(Add{{name_camel}});
