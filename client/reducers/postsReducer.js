// a reducer needs 2 things:

// 1. the action (info about what happend)
// 2. a copy of the current state

function postsReducer(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES':
      const index = action.index;

      return [
        ...state.slice(0, index),
        {...state[index], likes: state[index].likes + 1},
        ...state.slice(index + 1)
      ]
    default:
      return state;
  }
}

export default postsReducer;
