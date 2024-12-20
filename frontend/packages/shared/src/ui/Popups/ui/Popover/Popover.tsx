"use client";
import { Popover as HPopover } from "@headlessui/react";
import { memo, ReactNode } from "react";

import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";

import cls from "./Popover.module.scss";
import { DropdownDirection } from "../../../../types/ui";
import { classNames } from "../../../../lib";

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const { className, trigger, direction = "bottom left", children } = props;

  const menuClasses = [mapDirectionClass[direction], popupCls.menu];

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button as="div" className={popupCls.trigger}>
        {trigger}
      </HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
