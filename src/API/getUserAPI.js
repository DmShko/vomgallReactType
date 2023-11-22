import { onAuthStateChanged   } from "firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../firebase";

const getUserAPI = createAsyncThunk(
  'getUser/getUserAPI', 
  
  async function ({ email, password }) {
 
   return await onAuthStateChanged  (auth, email, password)
    .then((userCredential) => {
      // Signed up 

      return userCredential;
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      return error.message;
      // ..
    });
});

export default getUserAPI
