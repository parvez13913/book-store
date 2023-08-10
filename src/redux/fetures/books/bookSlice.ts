import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IBookFilter {
  filterGenre: string;
  filterYear: string;
  searchQuery: string;
}

const initialState: IBookFilter = {
  filterGenre: "",
  filterYear: "",
  searchQuery: "",
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
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setGenreFilter, setYearFilter, setSearchQuery } =
  bookFilterSlice.actions;

export default bookFilterSlice.reducer;
