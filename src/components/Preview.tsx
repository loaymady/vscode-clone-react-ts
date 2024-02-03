import { useSelector } from "react-redux";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";
import { RootState } from "../app/store";
import OpenedFilesBar from "./OpenedFilesBar";

const Preview = () => {
  const { clickedFile } = useSelector((state: RootState) => state.tree);

  return (
    <div>
      <OpenedFilesBar />
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  );
};

export default Preview;
