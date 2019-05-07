import { ADD_COMMENT } from 'actions/types'
import { addComment } from 'actions'

describe('addComment', () => {
  it('handles payload correctly', () => {
    const comment = addComment('new comment')

    expect(comment.payload).toEqual('new comment')
  })

  it('has the proper type', () => {
    const comment = addComment('new comment')
    expect(comment.type).toEqual(ADD_COMMENT)
  })
})
