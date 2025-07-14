const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  modalHomeOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    isModalHomeOpen: (state, action) => {
      state.modalHomeOpen = action.payload;
      state.loading = false;
    },
  },
});

export default modalSlice.reducer;

export const { isModalHomeOpen } = modalSlice.actions;
