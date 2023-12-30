import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Suit = "arcana" | "wands" | "swords" | "cups" | "pents"
type SuitStore = {suit: Suit}

export const suitsSlice = createSlice({
  name: "suit",
  initialState: {
    suit: "arcana",
  } as SuitStore,
  reducers: {
    setSuit: (state, action: PayloadAction<Suit>) => {
      state.suit = action.payload;
    },
  },
});

export const { setSuit } = suitsSlice.actions;

export default suitsSlice.reducer;