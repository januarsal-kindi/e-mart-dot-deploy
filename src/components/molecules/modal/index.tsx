import React from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative animate-fadeInUp">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

Modal.Title = function ModalTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold mb-4 text-gray-900">{children}</h2>;
};

Modal.Content = function ModalContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mb-4">{children}</div>;
};

Modal.Footer = function ModalFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-end space-x-2">{children}</div>;
};

export default Modal as typeof Modal & {
  Title: typeof Modal.Title;
  Content: typeof Modal.Content;
  Footer: typeof Modal.Footer;
};
