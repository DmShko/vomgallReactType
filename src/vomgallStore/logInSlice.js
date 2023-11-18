import { createSlice } from '@reduxjs/toolkit'
import { Notiflix } from 'notiflix';

import GetUser from 'API/getUserAPI';

const logInSliceInitialState = {
  items: [],

};


const logInSlice = createSlice({
  name: 'logIn',
  initialState: logInSliceInitialState,
  reducers: {
  },
  extraReducers: 

        builder => {
            builder.addCase(GetUser.pending, (state) => {
                state.isLoading = true; 
                state.error = null;
            });
            
            builder.addCase(GetUser.fulfilled, (state, action) => {
                state.isLoading = false;
                
                state.token = action.payload.data.token;
                state.statusText = action.payload.StTx

                if(action.payload.status === 200) Notiflix.Notify.success('User is logged in.', {width: '450px', position: 'center-top', fontSize: '24px',});
                // some actions with 'action'...
            });
            
            builder.addCase(GetUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

                switch(state.error) {
                    case 400:
                        Notiflix.Notify.warning('Login error.', {width: '450px', position: 'center-top', fontSize: '24px',});
                    break;
                    default:;
                };
            });

        },
}
);

export default logInSlice.reducer;