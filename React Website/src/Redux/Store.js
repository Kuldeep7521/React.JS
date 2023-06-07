import { configureStore } from "@reduxjs/toolkit";
import shoppingcartSlice from "./CartSlice";

 const store = configureStore({
     reducer:{
        Cart: shoppingcartSlice,
     }
 });
  export default store;
   