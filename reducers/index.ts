import { combineReducers, AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import userSlice, { UserReducerState } from './user';
import postSlice, { PostReducerState } from './post';

export interface IState {
  user: UserReducerState;
  post: PostReducerState;
}

const rootReducer = (state: IState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user: userSlice.reducer,
        post: postSlice.reducer
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
