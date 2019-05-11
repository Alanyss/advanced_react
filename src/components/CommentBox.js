import React from 'react'
import { connect } from 'react-redux'

import { addComment, fetchComments } from 'actions'

class CommentBox extends React.Component {
  state = { value: '' }
  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.value.trim()) {
      this.props.addComment(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h4>Write a comment!</h4>
          <textarea onChange={this.handleChange} value={this.state.value} />
          <button>Submit</button>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch comments
        </button>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  { addComment, fetchComments }
)(CommentBox)
