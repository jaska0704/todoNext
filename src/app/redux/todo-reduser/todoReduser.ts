import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";

interface CounterState {
  value: {};
}

const initialState: CounterState = {
  value: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todoValue: string }>) => {
      return { ...state, value: action.payload.todoValue };
    },

  },


});

export const {addTodo} = todoSlice.actions
export const todoReducer = todoSlice.reducer
