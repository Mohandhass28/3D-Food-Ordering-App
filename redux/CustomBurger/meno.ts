import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectCustom = (state: RootState) => state.custom;

export const selectBurger = createSelector(
  [selectCustom],
  (Burger) => Burger.CustomData
);
