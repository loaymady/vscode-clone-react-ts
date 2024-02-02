import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";
import { doesFileObjectExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { openedFiles } = useSelector((state: RootState) => state.tree);
  const dispatch = useDispatch();
  const { id, isFolder, name, children, content } = fileTree;
  const isFileOpened = doesFileObjectExist(openedFiles, fileTree.id);
  const onFileClicked = () => {
    dispatch(
      setClickedFileAction({
        fileContent: content,
        filename: name,
        activeTabId: id,
      })
    );
    if (isFileOpened) {
      return;
    }
    dispatch(setOpenedFilesAction([...openedFiles, fileTree]));
  };

  return (
    <div className="mb-2 ml-2">
      <div
        className="flex items-center mb-2 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isFolder ? (
          <div className="flex items-center ">
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}
            <span className="mr-1">
              <RenderFileIcon
                filename={name}
                isFolder={isFolder}
                isOpen={isOpen}
              />
            </span>
            <span>{name}</span>
          </div>
        ) : (
          <div className="flex items-center ml-2" onClick={onFileClicked}>
            <span className="mr-1">
              <RenderFileIcon filename={name} />
            </span>
            <span>{name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        children &&
        children.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
