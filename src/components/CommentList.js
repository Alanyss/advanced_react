import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <div className="comment">{comment}</div>;
    });
  }
  render() {
    return <div className="comment-list">{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(
  mapStateToProps,
  null
)(CommentList);
