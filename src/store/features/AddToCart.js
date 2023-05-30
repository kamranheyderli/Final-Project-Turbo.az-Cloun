import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

export const addFavorite = createSlice({
    name: 'Card',
    initialState,
    reducers: {
        addCard: (state, action) => {
            const cardExists = state.cart.find(item => item.id === action.payload.id);
            if (!cardExists) {
                state.cart.push(action.payload)
            } 
        }
    }

})

// Action creators are generated for each case reducer function
export const { addCard } = addFavorite.actions;

export default addFavorite.reducer;