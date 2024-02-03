import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenedFilesAction } from "../../app/features/fileTreeSlice";
import { RootState } from "../../app/store";

interface IProps {
  setShowMenu: (show: boolean) => void;
  positions: {
    x: number;
    y: number;
  };
  onRemove: (fileId: string | null) => void;
}

const ContextMenu = ({
  positions: { x, y },
  setShowMenu,
  onRemove,
}: IProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { tabIdToClose } = useSelector((state: RootState) => state.tree);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        console.log("click outside");
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setShowMenu]);

  //Handlers

  const OnCloseTab = () => {
    onRemove(tabIdToClose);
    setShowMenu(false);
  };
  const OnCloseAllTabs = () => {
    dispatch(setOpenedFilesAction([]));
    setShowMenu(false);
  };

  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-2"
        role="menu"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          onClick={OnCloseTab}
        >
          Close
        </li>
        <li
          className="text-gray-400 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 duration-300 rounded-sm"
          onClick={OnCloseAllTabs}
        >
          Close All
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
