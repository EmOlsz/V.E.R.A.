import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
    items: []
}

export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: uniqid(),
                description: action.payload,
                isCompleted: false,
            }

            state.items = [...state.items, newItem];
        },
        removeItem: (state, action) => {
            const filteredItems = state.items
                .filter(item => item.id !== action.payload);

            state.items = filteredItems;
        },
        toggleComplete: (state, action) => {
            const updatedArray = state.items.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isCompleted: !item.isCompleted,
                    };
                } else {
                    return item;
                }
            });

            state.items = updatedArray;
        },
    },
});