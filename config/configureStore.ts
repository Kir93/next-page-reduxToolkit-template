import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from 'store/index';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
  const store = configureStore({ reducer: rootReducer, devTools: isDev });
  return store;
};

export const store = createStore();

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<typeof store.getState>;

const wrapper = createWrapper<AppStore>(createStore);

export default wrapper;
