import { ADD_COMMENT, FETCH_COMMENTS } from './types'
import axios from 'axios'

export const addComment = comment => {
  return {
    type: ADD_COMMENT,
    payload: comment
  }
}

export const fetchComments = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENTS,
    payload: result.data
  }
}
