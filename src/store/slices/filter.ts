import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  abilities: [] as string[],
};

type State = typeof initialState;

const reducers = {
  setAbilities: (state: State, action: PayloadAction<string[]>) => {
    state.abilities = action.payload;
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers,
});

export const { setAbilities } = filterSlice.actions;
export default filterSlice.reducer;
