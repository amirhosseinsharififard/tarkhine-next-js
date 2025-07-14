import { configureStore } from "@reduxjs/toolkit";
  
import  modalSlice from '@/components/features/modalSlice'

export default configureStore({
  reducer: {
    modal: modalSlice,
  },
});
