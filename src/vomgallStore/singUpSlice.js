import { createSlice } from '@reduxjs/toolkit'

const singUpSliceInitialState = {
  items: [],

};


const singUpSlice = createSlice({
  name: 'singUp',
  initialState: singUpSliceInitialState,
  reducers: {
  }
}
);

export default singUpSlice.reducer;