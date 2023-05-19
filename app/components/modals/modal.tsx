"use client";

import { useCallback, useEffect, useState } from "react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSumbit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disalbed?: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSumbit,
  title,
  body,
  footer,
  actionLabel,
  disalbed,
  secondaryAction,
  secondaryLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disalbed) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 3000);
  }, [disalbed, onClose]);
  return <div className=""></div>;
};

export default Modal;
