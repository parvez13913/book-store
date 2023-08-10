import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBookFilter {
  filterGenre: string;
  filterYear: string;
}

const initialState: IBookFilter = {
  filterGenre: "",
  filterYear: "",
};

const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState,
  reducers: {
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.filterGenre = action.payload;
    },
    setYearFilter: (state, action: PayloadAction<string>) => {
      state.filterYear = action.payload;
    },
  },
});

export const { setGenreFilter, setYearFilter } = bookFilterSlice.actions;

export default bookFilterSlice.reducer;
