import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IInitialState {}

const initialState: IInitialState = {};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {},
});

export const {} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
