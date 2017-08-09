import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function (state = {}, action) {
  switch (action.type) {
    case DELETE_POST :
      // delete actions return the id of the record in the payload
      // lodash omit will look at the id and will omit the post with id if it's present in the state object
      return _.omit(state, action.payload)
    case FETCH_POSTS :
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POST :
      // const post = action.payload.data
      // const newState = { ...state }
      // newState[post.id] = post
      // return newState
      // the above is the same as the es6 syntax below

      return {...state, [action.payload.data.id]: action.payload.data}
    default:
      return state
  }
}
