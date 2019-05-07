import commentsReducer from 'reducers/commentsReducer'
import { ADD_COMMENT } from 'actions/types'

it('handles actions of type ADD_COMMENT', () => {
  const action = {
    type: ADD_COMMENT,
    payload: 'New comment.'
  }

  const newState = commentsReducer([], action)

  expect(newState).toEqual([action.payload])
})

it('handles action of unknown type', () => {
  const newState = commentsReducer([], {})

  expect(newState).toEqual([])
})
