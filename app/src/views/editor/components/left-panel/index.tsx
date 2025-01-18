import { forwardRef } from 'react';
import Header from './header';
import Body from './body';
import styles from './index.module.css';

interface LeftPanelProps {
  width: number;
  onMouseDown: () => void;
}

const LeftPanel = forwardRef<HTMLDivElement, LeftPanelProps>(
  ({ width, onMouseDown }, ref) => {
    return (
      <div 
        className={styles.panel}
        style={{ width }}
      >
        <Header />
        <Body />
        <div 
          className={styles.resizer}
          ref={ref}
          onMouseDown={onMouseDown}
        />
      </div>
    );
  }
);

export default LeftPanel;
