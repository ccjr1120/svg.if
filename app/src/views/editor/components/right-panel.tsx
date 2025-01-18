import { forwardRef } from 'react';

interface RightPanelProps {
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  onMouseDown?: () => void;
}

const RightPanel = forwardRef<HTMLDivElement, RightPanelProps>(({
  width = 240,
  minWidth = 160,
  maxWidth = 400,
  onMouseDown,
}, ref) => {
  return (
    <div 
      ref={ref}
      className="right-panel"
      style={{
        width: `${width}px`,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
      onMouseDown={onMouseDown}
    >
      {/* 右侧面板内容 */}
    </div>
  );
});

export default RightPanel;
