import { classNames } from "@repo/shared/lib";
import { Loader, Drawer } from "@repo/shared/ui";
import { Suspense } from "react";

import { AddEventFormAsync } from "../AddEventForm/AddEventForm.async";

interface AddEventDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const AddEventDrawer = (props: AddEventDrawerProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Drawer
      className={classNames("", {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      removeWhenClosed
    >
      <Suspense fallback={<Loader />}>
        <AddEventFormAsync onSuccess={onClose} onReset={onClose} />
      </Suspense>
    </Drawer>
  );
};
