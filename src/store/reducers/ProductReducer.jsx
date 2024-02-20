import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
}

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default ProductSlice.reducer;