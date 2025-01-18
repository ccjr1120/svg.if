import { forwardRef } from 'react';

interface LeftPanelProps {
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  onMouseDown?: () => void;
}

const LeftPanel = forwardRef<HTMLDivElement, LeftPanelProps>(({
  width = 240,
  minWidth = 160,
  maxWidth = 400,
  onMouseDown,
}, ref) => {
  return (
    <div 
      ref={ref}
      className="left-panel"
      style={{
        width: `${width}px`,
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
      }}
      onMouseDown={onMouseDown}
    >
      {/* 左侧面板内容 */}
    </div>
  );
});

export default LeftPanel;
