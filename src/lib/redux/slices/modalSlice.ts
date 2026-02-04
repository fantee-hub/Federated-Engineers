import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalType = "join" | "hire" | null;

interface ModalState {
  view: ModalType;
  isOpen: boolean;
}

const initialState: ModalState = {
  view: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      state.view = action.payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.view = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
