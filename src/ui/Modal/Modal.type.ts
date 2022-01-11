import { ReactNode } from "react";

export type ModalProps = {
  className?: string;
  children?: ReactNode;
  onClose: () => void;
};
