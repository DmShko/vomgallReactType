import { createSlice } from '@reduxjs/toolkit'

const galleryInitialState = {

  users: [
    {
      name: 'Admin',
      arts:{
        lirics:{name: 'Lirics', style: []},
        music:{name: 'Music', style: []},
        draw: {name: 'Drawing', style: ['Oil', 'Watercolor', 'Digital', 'Mix']}
      }
    },
  ], 

  buttonTargetName: '',
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: galleryInitialState,
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