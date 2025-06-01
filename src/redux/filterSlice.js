import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeFilter } = filterSlice.actions

export const selectFilter = (state) => state.filter.name

export default filterSlice.reducer