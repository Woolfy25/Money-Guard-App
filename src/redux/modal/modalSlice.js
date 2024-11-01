import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalAddOpen: false, isModalEditOpen: false },
  reducers: {
    openAddModal: (state) => {
      state.isModalAddOpen = true;
    },
    closeAddModal: (state) => {
      state.isModalAddOpen = false;
    },
    openEditModal: (state) => {
      state.isModalEditOpen = true;
    },
    closeEditModal: (state) => {
      state.isModalEditOpen = false;
    },
  },
});

export const { openAddModal, closeAddModal, openEditModal, closeEditModal } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
