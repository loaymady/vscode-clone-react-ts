import { IFile } from "../interfaces";

export const fileTree: IFile = {
  name: "Vs Code Clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            {
              name: "Hello.js",
              isFolder: false,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "src",
          isFolder: true,
          children: [
            {
              name: "Button.tsx",
              isFolder: false,
            },
            {
              name: "index.txt",
              isFolder: false,
            },
          ],
        },
      ],
    },
  ],
};
