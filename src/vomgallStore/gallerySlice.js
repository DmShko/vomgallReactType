import { createSlice } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';
// import { nanoid } from 'nanoid';

import { getUser } from '../API/getUserAPI';
import { addContact } from '../API/addContactAPI';
import { deleteContact } from '../API/delContactAPI';
import { changeContact } from '../API/changeContactAPI';

const galleryInitialState = {
  items: [],
  filter: '',
  isLoading: false,
  errorChange: null,
  errorGet: null,
  errorAdd: null,
  errorDel: null,
  changeMode: false,
  visibility: false,
  currentId: '',
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: galleryInitialState,
 
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isLoading = true;
      state.errorGet = null;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;

      if (state.items.length !== action.payload.data.length) {
        action.payload.data.map(value => {
          return state.items.push({
            name: [value.name, value.number].join(' '),
            id: value.id,
            activeInstruction: false,
            active: false,
          });
        });

        if (action.payload.status === 200)
          Notiflix.Notify.success('Contacts found.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
      }

      // some actions with 'action'...
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorGet = action.payload;
      switch (state.errorGet) {
        case 401:
          Notiflix.Notify.warning('Missing header with authorization token.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 404:
          Notiflix.Notify.warning('There is no such user collection.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 500:
          Notiflix.Notify.warning('Server error.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        default:
      }
    });

    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
      state.errorAdd = null;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;

      // state.token = action.payload.token;
      if (action.payload.status === 201)
        Notiflix.Notify.success('The contact was successfully created.', {
          width: '450px',
          position: 'center-top',
          fontSize: '24px',
        });
      // some actions with 'action'...
    });

    builder.addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.errorAdd = action.payload;

      switch (state.errorAdd) {
        case 400:
          Notiflix.Notify.warning('Error creating contact.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 401:
          Notiflix.Notify.warning('Missing header with authorization token.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        default:
      }
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
      state.errorDel = null;
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;

      // state.token = action.payload.token;
      if (action.payload === 200)
        Notiflix.Notify.success('The contact was successfully deleted.', {
          width: '450px',
          position: 'center-top',
          fontSize: '24px',
        });
      // some actions with 'action'...
    });

    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.errorDel = action.payload;
      switch (state.errorDel) {
        case 401:
          Notiflix.Notify.warning('Missing header with authorization token.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 404:
          Notiflix.Notify.warning('There is no such user collection.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 500:
          Notiflix.Notify.warning('Server error.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        default:
      }
    });

    builder.addCase(changeContact.pending, state => {
      state.isLoading = true;
      state.errorDel = null;
    });

    builder.addCase(changeContact.fulfilled, (state, action) => {
      state.isLoading = false;

      // state.token = action.payload.token;
      if (action.payload === 200)

        Notiflix.Notify.success('The contact was successfully updated.', {
          width: '450px',
          position: 'center-top',
          fontSize: '24px',
        });
      // some actions with 'action'...
    });

    builder.addCase(changeContact.rejected, (state, action) => {
      state.isLoading = false;
      state.errorChange = action.payload;
      switch (state.errorChange) {
        case 400:
          Notiflix.Notify.warning('Contact update failed.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        case 401:
          Notiflix.Notify.warning('Missing header with authorization token.', {
            width: '450px',
            position: 'center-top',
            fontSize: '24px',
          });
          break;
        default:
      }
    });
  },
});

export const {
  add,
  deluser,
  changeVisibility,
  changeFilter,
  changeButtonActive,
  changeContactStore,
  clearContact,
  changeActiveInstruction,
} = phonebookSlice.actions;
export default gallerySlice.reducer;
