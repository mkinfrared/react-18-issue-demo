import useOutsideClick from "hooks/useOutsideClick";
import React, { memo, useEffect, useRef } from "react";

import css from "./Modal.module.scss";
import { ModalProps } from "./Modal.type";

const Modal = ({ className, children, onClose }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, onClose);

  useEffect(() => {
    console.log("modal mounted");
  }, []);

  return (
    <div className={css.Modal}>
      <div className={css.container} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export { Modal };

export default memo(Modal);
