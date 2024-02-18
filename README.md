# vscode-clone-react-ts

## Overview

vscode-clone-react-ts is a project that recreates the Visual Studio Code (VSCode) interface using React and TypeScript. The project includes various features and components to mimic the functionality of VSCode.

## Technologies Used

- Vite
- React
- TypeScript
- React DOM
- Redux Toolkit
- Tailwind CSS
- uuid

## Demo

[Explore Vscode Clone App](https://vscode-clone-react-ts.vercel.app/)

## How to Run

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the application in your web browser.

## Project Structure

- `src/`: Source code directory.
  - `app/`: Main application directory.
    - `store.ts`: Redux store configuration.
    - `features/`: Directory containing application features.
      - `fileTreeSlice.ts`: Redux slice for file tree management.
  - `components/`: React components used in the project.
    - `FileSyntaxHighlighter.tsx`: Component for syntax highlighting files.
    - `IconImg.tsx`: Component for displaying image icons.
    - `OpenedFilesBar.tsx`: Component for the opened files bar.
    - `OpenedFilesBarTab.tsx`: Component for individual tabs in the opened files bar.
    - `Preview.tsx`: Component for file preview.
    - `RecursiveComponent.tsx`: Recursive component for rendering file tree.
    - `RenderFileIcon.tsx`: Component for rendering file icons.
    - `ResizablePanel.tsx`: Resizable panel component.
    - `WelcomeTab.tsx`: Component for the welcome tab.
    - `SVG/`: Directory containing SVG components.
      - `Bottom.tsx`: SVG component for the bottom arrow.
      - `CloseIcon.tsx`: SVG component for the close icon.
      - `File.tsx`: SVG component for representing a file.
      - `Folder.tsx`: SVG component for representing a folder.
      - `Right.tsx`: SVG component for the right arrow.
    - `ui/`: Directory containing UI components.
      - `ContextMenu.tsx`: UI component for the context menu.
  - `constants/`: Directory containing constants.
    - `index.ts`: File exporting constants.
  - `data/`: Directory containing data-related files.
    - `fileTree.ts`: File exporting the file tree data.
  - `interfaces/`: Directory containing TypeScript interfaces.
    - `index.ts`: File exporting interfaces used throughout the project.
  - `styles/`: Directory containing stylesheets and styling-related files.
    - `index.ts`: File exporting styles.
  - `utils/`: Directory containing utility functions.
    - `functions.ts`: File exporting utility functions.

## Usage

1. **Exploring the VSCode Clone App:**
   Visit the [VSCode Clone App](https://vscode-clone-react-ts.vercel.app/) to experience the recreated Visual Studio Code interface.

2. **Opening Files:**

   - Click on the file icons or file names in the file tree to open files.
   - The opened files will be displayed as tabs in the "Opened Files Bar" at the top.

3. **Viewing File Content:**

   - Click on the tabs in the "Opened Files Bar" to switch between opened files.
   - The file content will be displayed in the main workspace, complete with syntax highlighting.

4. **Closing Tabs:**

   - Close opened tabs by clicking the close icon on the tab or using the provided options.

5. **Resizable Workspace:**
   - Adjust the layout of the workspace by using the resizable panel.

Explore the app and interact with the VSCode-like features to get a feel for the functionality and layout provided by the project.
