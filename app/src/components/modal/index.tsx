import { forwardRef } from "react";
import styles from "./index.module.css";
import type { ModalProps, ModalStyleProps } from "./types";

export const Modal = forwardRef<HTMLDivElement, ModalProps & ModalStyleProps>(
  ({ isOpen, onClose, children, width, height, maxWidth, maxHeight }, ref) => {
    if (!isOpen) return null;

    return (
      <div className={styles.overlay} onClick={onClose}>
        <div
          ref={ref}
          className={styles.modal}
          style={{
            width,
            height,
            maxWidth,
            maxHeight,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";
