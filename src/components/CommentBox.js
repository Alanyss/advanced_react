import React from 'react';
import { connect } from 'react-redux';

import { addComment } from 'actions';

class CommentBox extends React.Component {
  state = { value: '' };
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Write a comment!</h4>
        <textarea onChange={this.handleChange} value={this.state.value} />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect(
  null,
  { addComment }
)(CommentBox);
