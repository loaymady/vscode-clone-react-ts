import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";

// interface IProps {}

const OpenedFilesBar = () => {
  const { openedFiles, clickedFile } = useSelector(
    (state: RootState) => state.tree
  );

  return (
    <div className="w-full">
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {openedFiles.map((file, idx) => (
          <OpenedFilesBarTab key={idx} file={file} />
        ))}
      </div>
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
};

export default OpenedFilesBar;
