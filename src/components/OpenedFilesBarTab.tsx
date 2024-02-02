import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const OpenedFilesBarTab = ({ file }: IProps) => {
  const { id, name, content } = file;
  const dispatch = useDispatch();
  const { clickedFile, openedFiles } = useSelector(
    (state: RootState) => state.tree
  );

  const onclick = () => {
    dispatch(
      setClickedFileAction({
        fileContent: content,
        filename: name,
        activeTabId: id,
      })
    );
  };

  const onRemove = () => {
    const filtered = openedFiles.filter((f) => f.id !== file.id);
    const lastTab = filtered[filtered.length - 1];
    if (!lastTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({ fileContent: "", filename: "", activeTabId: "" })
      );
      return;
    }
    dispatch(setOpenedFilesAction(filtered));
    dispatch(
      setClickedFileAction({
        fileContent: lastTab.content,
        filename: lastTab.name,
        activeTabId: lastTab.id,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex p-2 items-center border-t-2 ${
        file.id === clickedFile.activeTabId
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onclick}
    >
      <span>
        <RenderFileIcon filename={file.name} />
      </span>
      <span className="cursor-pointer duration-300 flex justify-center  w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center  w-fit mr-2 p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
