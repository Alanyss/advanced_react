import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import React from 'react';
import Root from 'Root';

const testComment = 'new comment';
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows textarea and button', () => {
  expect(wrapped.find('button').length).toEqual(1);
  expect(wrapped.find('textarea').length).toEqual(1);
});

describe('textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', { target: { value: testComment } });
    wrapped.update();
  });

  it('displays typed input', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(testComment);
  });

  it('clears textarea after submit', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
