import { ADD_COMMENT } from 'actions/types'
import { addComment } from 'actions'

describe('addComment', () => {
  it('has correct type', () => {
    const comment = addComment('new comment')
    expect(comment.type).toEqual(ADD_COMMENT)
  })

  it('has correct payload', () => {
    const comment = addComment('new comment')

    expect(comment.payload).toEqual('new comment')
  })
})
