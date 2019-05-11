import CommentList from 'components/CommentList'
import Root from 'Root'
import { mount } from 'enzyme'
import React from 'react'

let wrapped

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  )
})

afterEach(() => {
  wrapped.unmount()
})

it('displays an li element for each comment', () => {
  expect(wrapped.find('li').length).toEqual(2)
})

it('displays text correctly for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1')
  expect(wrapped.render().text()).toContain('Comment 2')
})
