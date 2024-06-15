import { createAction, createReducer, nanoid } from '@reduxjs/toolkit';

export const actionNewItem = createAction('items/newItem', value => {
  return {
    payload: { ...value, createdAt: new Date(), isAdmin: false, id: nanoid() },
  };
});

export const actionRemoveItem = createAction('items/removeItem');

const initalState = { item: {} };

export const itemsReducer = createReducer(initalState, builder => {
  builder
    .addCase(actionNewItem.type, (state, action) => ({
      ...state,
      item: action.payload,
    }))
    .addCase(actionRemoveItem.type, (state, action) => ({
      ...state,
      item: action.payload,
    }));
});
