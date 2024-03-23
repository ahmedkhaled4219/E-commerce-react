import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: { formValues: {} },
  reducers: {
    addFormValues: (state, action) => {
      state.formValues = { ...state.formValues, ...action.payload };
    },
  },
});

export const { addFormValues } = formSlice.actions;
export default formSlice.reducer;
