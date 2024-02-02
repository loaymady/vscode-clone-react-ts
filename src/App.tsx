import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex m-3 h-screen ">
      <div className="w-64 p-2 border-r-[1px] border-[#ffffff1f]">
        <RecursiveComponent fileTree={fileTree} />
      </div>
      <OpenedFilesBar />
    </div>
  );
};

export default App;
