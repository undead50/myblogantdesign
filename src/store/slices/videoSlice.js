import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name:'video',
    initialState: {
        videoId: ''
    },
    reducers: {
        setvideoId: (state,action) => {
          state.videoId = action.payload;
        }
    }
})

export const { setvideoId} = videoSlice.actions;
export const videoReducer = videoSlice.reducer;