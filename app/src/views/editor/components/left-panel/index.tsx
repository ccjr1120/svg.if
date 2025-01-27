import { forwardRef } from "react";
// import { Pages } from "./pages";
// import { Header } from "./header";
import { Layers } from "./layers";
import styles from "./index.module.css";

interface LeftPanelProps {
  width: number;
  onMouseDown: () => void;
}

const LeftPanel = forwardRef<HTMLDivElement, LeftPanelProps>(
  ({ width, onMouseDown }, ref) => {
    return (
      <div className={styles.panel} style={{ width }}>
        {/* <Header /> */}
        {/* <Pages /> */}
        <Layers />
        <div className={styles.resizer} ref={ref} onMouseDown={onMouseDown} />
      </div>
    );
  }
);

export default LeftPanel;
