import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type DivinationType = "common" | "health" | "love" | "career";
type DivinationStore = { divination: DivinationType };

export const divinationsSlice = createSlice({
  name: "divination",
  initialState: {
    divination: "common",
  } as DivinationStore,
  reducers: {
    setDivinationType: (state, action: PayloadAction<DivinationType>) => {
      state.divination = action.payload;
    },
  },
});

export const { setDivinationType } = divinationsSlice.actions;

export default divinationsSlice.reducer;
