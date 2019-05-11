import React from 'react'
import { connect } from 'react-redux'

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map((comment, i) => {
      return (
        <li className="comment" key={i}>
          {comment}
        </li>
      )
    })
  }
  render() {
    return <ul className="comment-list">{this.renderComments()}</ul>
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  }
}

export default connect(
  mapStateToProps,
  null
)(CommentList)
