import { createSlice } from '@reduxjs/toolkit';

import { breastValueLeft } from 'constants/feeding';

const initialState = {
    selectedBreastValue: breastValueLeft,
    breastLeft: {
        timer: 0,
        isActive: false,
        isPaused: false,
    },
    breastRight: {
        timer: 0,
        isActive: false,
        isPaused: false,
    },
    dailyFeedingList: [],
}

export const feeding = createSlice({
    name: "feeding",
    initialState,
    reducers: {
        incrementCount: (state, action) => {
            state[state.selectedBreastValue].timer = state[state.selectedBreastValue].timer + 1;
        },
        resetCount: (state, action) => {
            state[state.selectedBreastValue].timer = 0;
        },
        setIsActive: (state, action) => {
            state[state.selectedBreastValue].isActive = action.payload
        },
        setIsPaused: (state, action) => {
            state[state.selectedBreastValue].isPaused = action.payload
        },
        setBreast: (state, action) => {
            state.selectedBreastValue = action.payload;
        },
        setDailyFeedingList: (state, action) => {
            state.dailyFeedingList = action.payload;
        }
    },
});