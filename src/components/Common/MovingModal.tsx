import * as Dialog from "@radix-ui/react-dialog";
import React, { useEffect, useRef, useState } from "react";
import "./moving-modal.scss";

interface MovingModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: number;
  defaultPosition?: { x: number; y: number };
}

const MovingModal: React.FC<MovingModalProps> = ({
  open,
  onClose,
  title,
  children,
  width = 320,
  defaultPosition = { x: 0, y: 0 },
}) => {
  const [position, setPosition] = useState(defaultPosition);
  const dragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent) => {
    dragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const onMove = (e: MouseEvent) => {
    if (!dragging.current) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  };

  const stopDrag = () => {
    dragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="window-overlay" />

        <Dialog.Content
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="window-modal"
          style={{
            width,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          {/* Title Bar (drag handle) */}
          <div className="window-titlebar" onMouseDown={startDrag}>
            <span>{title}</span>

            <Dialog.Close className="window-close">
              ✕
            </Dialog.Close>
          </div>

          <div className="window-body">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MovingModal;