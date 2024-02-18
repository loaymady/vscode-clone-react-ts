import { IFile } from "../interfaces";

export const doesFileObjectExist = (arr: IFile[], id: string): boolean => {
  return arr.some((FileObject) => FileObject.id === id);
};
