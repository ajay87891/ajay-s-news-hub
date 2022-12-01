import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {
    articles: [],
    a: false
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    add: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.articles = action.payload
    },
    addmore:(state, action) =>{

        state.value.articles = state.value.articles.concat(action.payload)

    },
    remove:(state)=>{
        state.value.articles = []
    },
    refresh:(state)=>{
      state.value.a = !state.value.a 

    }
    
  },
})

// Action creators are generated for each case reducer function
export const { add , addmore, remove,refresh} = newsSlice.actions

export default newsSlice.reducer