import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  value: number;
  warrantyDialogOpen: boolean;
}

const initialState: AppState = {
  value: 0,
  warrantyDialogOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setWarrantyDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.warrantyDialogOpen = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setWarrantyDialogOpen,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
