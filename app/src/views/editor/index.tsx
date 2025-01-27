import { useRef, useState } from "react";
import LeftPanel from "./components/left-panel/index";
import RightPanel from "./components/right-panel";
import CanvasArea from "./components/canvas-area";
import "./editor.css";

const Editor = () => {
  const [leftWidth, setLeftWidth] = useState(240);
  const [rightWidth, setRightWidth] = useState(240);
  const leftResizerRef = useRef(null);
  const rightResizerRef = useRef(null);

  const startResizing = (
    ref: React.MutableRefObject<HTMLElement | null>,
    setWidth: (width: number) => void
  ) => {
    if (!ref.current) return;

    const isLeft = ref === leftResizerRef;
    const startX = isLeft
      ? ref.current.getBoundingClientRect().right
      : ref.current.getBoundingClientRect().left;
    const startWidth = ref.current.offsetWidth;

    const onMouseMove = (e: MouseEvent) => {
      const newWidth = isLeft
        ? startWidth + (e.clientX - startX)
        : startWidth - (e.clientX - startX);
      setWidth(Math.max(160, Math.min(400, newWidth)));
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="editor-container">
      <LeftPanel
        ref={leftResizerRef}
        width={leftWidth}
        onMouseDown={() => startResizing(leftResizerRef, setLeftWidth)}
      />

      <CanvasArea>Canvas Content</CanvasArea>

      <RightPanel
        ref={rightResizerRef}
        width={rightWidth}
        onMouseDown={() => startResizing(rightResizerRef, setRightWidth)}
      />
    </div>
  );
};

export default Editor;
