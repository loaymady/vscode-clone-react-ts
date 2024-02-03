import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import { useState } from "react";
import ContextMenu from "./ui/ContextMenu";
import {
  setClickedFileAction,
  setOpenedFilesAction,
} from "../app/features/fileTreeSlice";

// interface IProps {}

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );
  const [showMenu, setShowMenu] = useState(false);
  const [positionsMenu, setPositionsMenu] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch();

  const onRemove = (fileId: string | null) => {
    // Find the index of the file
    const indexofId = openedFiles.findIndex((f) => f.id === fileId);
    // Remove the file from the opened files
    const filtered = openedFiles.filter((f) => f.id !== fileId);
    // Find the next tab to be opened
    let nextTab = filtered[indexofId];
    // If there is no next tab, then find the previous tab
    nextTab = nextTab ? nextTab : filtered[indexofId - 1];
    if (!nextTab) {
      dispatch(setOpenedFilesAction([]));
      dispatch(
        setClickedFileAction({ fileContent: "", filename: "", activeTabId: "" })
      );
      return;
    }

    // Set the opened files after removing the file
    dispatch(setOpenedFilesAction(filtered));

    // If the removed file is the active tab, then set the next tab as the active tab
    if (fileId === clickedFile.activeTabId) {
      dispatch(
        setClickedFileAction({
          fileContent: nextTab.content,
          filename: nextTab.name,
          activeTabId: nextTab.id,
        })
      );
    }
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center border-b-[1px] border-[#ffffff1f]"
        onContextMenu={(e) => {
          e.preventDefault();
          setPositionsMenu({ x: e.clientX, y: e.clientY });
          setShowMenu(true);
        }}
      >
        {openedFiles.map((file, idx) => (
          <OpenedFilesBarTab key={idx} file={file} onRemove={onRemove} />
        ))}
      </div>
      {showMenu && (
        <ContextMenu
          positions={positionsMenu}
          setShowMenu={setShowMenu}
          onRemove={onRemove}
        />
      )}
    </div>
  );
};

export default OpenedFilesBar;
