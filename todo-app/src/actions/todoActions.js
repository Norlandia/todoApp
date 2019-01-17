import { ADD_TODO, DELETE_TODO, MARK_DONE } from '../constants';

export const add = (text) => ({
  type: ADD_TODO,
  text,
});

export const delete = (index) => ({
  type: DELETE_TODO,
  index,
});

export const isDone = (index) => ({
  type: MARK_DONE,
  index,
});
