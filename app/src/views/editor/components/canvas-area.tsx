import { FC, ReactNode } from "react";
import Toolbar from "./toolbar.js";

interface CanvasAreaProps {
  children?: ReactNode;
}

const CanvasArea: FC<CanvasAreaProps> = ({ children }) => {
  return (
    <div className="canvas-area">
      <Toolbar />
      {children}
    </div>
  );
};

export default CanvasArea;
