import { createSlice } from '@reduxjs/toolkit'

const gallerySliceInitialState = {
  items: [], 
  buttonTargetName: '',
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: gallerySliceInitialState,
  reducers: {

    change(state, action) {
      switch(action.payload.operation){
        case 'changeButtonTargetName':
         
          state.buttonTargetName = action.payload.data;
          break;
        default: break;
      }
    },
  }

}
);

export const {
  change
} = gallerySlice.actions;
export default gallerySlice.reducer;