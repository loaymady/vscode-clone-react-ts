import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setClickedFileAction,
  setTabToCloseAction,
} from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
  onRemove: (fileId: string | null) => void;
}

const OpenedFilesBarTab = ({ file, onRemove }: IProps) => {
  const { id, name, content } = file;
  const dispatch = useDispatch();
  const { clickedFile } = useSelector((state: RootState) => state.tree);

  const onclick = () => {
    dispatch(
      setClickedFileAction({
        fileContent: content,
        filename: name,
        activeTabId: id,
      })
    );
  };

  return (
    <div
      className={`max-w-screen-md flex p-2 min-w-[175px] items-center border-t-2 ${
        file.id === clickedFile.activeTabId
          ? "border-[#cf6ccf]"
          : "border-transparent"
      }`}
      onClick={onclick}
      onContextMenu={(e) => {
        e.preventDefault();
        dispatch(setTabToCloseAction(file.id));
      }}
    >
      <span>
        <RenderFileIcon filename={file.name} />
      </span>
      <span className="cursor-pointer duration-300 flex justify-center  w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span
        className="cursor-pointer  hover:bg-[#64646473] duration-300 flex w-fit ml-auto p-1 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(file.id);
        }}
      >
        <CloseIcon />
      </span>
    </div>
  );
};

export default OpenedFilesBarTab;
