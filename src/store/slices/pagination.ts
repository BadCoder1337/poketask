import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  limit: 20,
  offset: 0,
  count: Infinity,
  infinite: false,
};

type State = typeof initialState;

const reducers = {
  reset: (state: State) => {
    state.index = 0;
    state.offset = 0;
  },
  setNext: (state: State) => {
    if (state.offset + state.limit > state.count) return;
    state.offset += state.limit;
    state.index++;
  },
  setPrev: (state: State) => {
    if (state.offset - state.limit < 0) return;
    state.offset -= state.limit;
    state.index--;
  },
  setCount: (state: State, action: PayloadAction<number>) => {
    state.count = action.payload;
  },
  setInfinite: (state: State, action: PayloadAction<boolean>) => {
    state.infinite = action.payload;
  },
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers,
});

export const { setCount, setNext, setPrev, setInfinite, reset } =
  paginationSlice.actions;
export default paginationSlice.reducer;
