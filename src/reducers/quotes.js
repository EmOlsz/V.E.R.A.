import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quote: ""
}

export const quotes = createSlice({
    name: "quotes",
    initialState,
    reducers: {
        setQuote: (state, action) => {
            state.quote = action.payload;
        },
    },
});