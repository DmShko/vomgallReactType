import { createSlice } from '@reduxjs/toolkit'
import Notiflix from 'notiflix';

import singUpAPI  from '../API/singUpAPI';

const singUpSliceInitialState = {
  items: [],
  isLoading: false,
  error: '',
  token: '',
  email: [],
  usersId: [],
};

const singUpSlice = createSlice({
  name: 'singUp',
  initialState: singUpSliceInitialState,

  reducers: {
  },

  extraReducers:  
    builder => {
      builder.addCase(singUpAPI.pending, (state) => {
        state.isLoading = true; state.error = null;
      });
            
      builder.addCase(singUpAPI.fulfilled, (state, action) => {

        state.isLoading = false;
        state.token = action.payload.user.accessToken;
        // state.email = state.email.push(action.payload.user.email);
        // state.usersId.push(action.payload.user.uid);
        // console.log(state.items);
        Notiflix.Notify.success(`User '${action.payload.user.email}' created.`, {width: '450px', position: 'center-top', fontSize: '24px',});
        // some actions with 'action'...
      });
            
      builder.addCase(singUpAPI.rejected, (state, action) => {
                    
        state.isLoading = false;
        state.error = action.payload;
                
        Notiflix.Notify.warning(`${state.error}`, {width: '450px', position: 'center-top', fontSize: '24px',});
        
      });
    },
  }
);

export default singUpSlice.reducer;

