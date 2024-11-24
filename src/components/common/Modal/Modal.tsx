import { FC, ReactNode } from "react";
import style from "./style.module.scss";

interface Props {
  open: boolean;
  closeModal: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ open, closeModal, children }) => {
  return (
    <div
      className={`${style.overlay} ${open ? style.visible : ""}`}
      onClick={closeModal}
    >
      <div
        className={`${style.modalWrapper} ${open ? style.modalVisible : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children} {/* Render children here */}
        <button className={style.closeButton} onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};
