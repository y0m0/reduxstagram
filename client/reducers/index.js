import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import postsReducer from './postsReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  routing: routerReducer
});

export default rootReducer;
