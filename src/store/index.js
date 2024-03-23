import { configureStore } from "@reduxjs/toolkit";
import formValues from "./slices/formValues";

export default configureStore({
  reducer: {
    form: formValues,
  },
});
