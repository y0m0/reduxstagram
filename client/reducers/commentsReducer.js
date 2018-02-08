// a reducer needs 2 things:

// 1. the action (info about what happend)
// 2. a copy of the current state

function commentsReducer(state = [], action) {
  console.log(state, action);
  return state;
}

export default commentsReducer;
