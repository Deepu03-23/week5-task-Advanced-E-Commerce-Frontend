import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../services/api";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: productsData,
  },
  reducers: {},
});

export default productSlice.reducer;