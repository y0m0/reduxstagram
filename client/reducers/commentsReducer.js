// this reducer uses reducer composition pattern

function commentsReducer(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
          user: action.author,
          text: action.comment
        }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      return state;
    default:
      return state;
  }
}
export default commentsReducer;
