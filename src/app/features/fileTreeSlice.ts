import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFile {
  activeTabId: string | null;
  filename: string;
  fileContent: string | undefined;
}
interface IInitialState {
  openedFiles: IFile[];
  clickedFile: IClickedFile;
  tabIdToClose: string | null;
}

const initialState: IInitialState = {
  openedFiles: [],
  clickedFile: {
    activeTabId: null,
    filename: "",
    fileContent: "",
  },
  tabIdToClose: null,
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFilesAction: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFileAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTabToCloseAction: (state, action: PayloadAction<string | null>) => {
      state.tabIdToClose = action.payload;
    },
  },
});

export const {
  setOpenedFilesAction,
  setClickedFileAction,
  setTabToCloseAction,
} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;
