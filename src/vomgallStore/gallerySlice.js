import { createSlice } from '@reduxjs/toolkit'

const gallerySliceInitialState = {
  items: [],

};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: gallerySliceInitialState,
  reducers: {
  }

}
);

export default gallerySlice.reducer;