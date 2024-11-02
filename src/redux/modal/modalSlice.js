import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalAddOpen: false,
    isModalEditOpen: false,
    transactionId: null,
  },
  reducers: {
    openAddModal: (state) => {
      state.isModalAddOpen = true;
    },
    closeAddModal: (state) => {
      state.isModalAddOpen = false;
    },
    openEditModal: (state, action) => {
      state.isModalEditOpen = true;
      state.transactionId = action.payload;
    },
    closeEditModal: (state) => {
      state.isModalEditOpen = false;
      state.transactionId = null;
    },
  },
});

export const { openAddModal, closeAddModal, openEditModal, closeEditModal } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
