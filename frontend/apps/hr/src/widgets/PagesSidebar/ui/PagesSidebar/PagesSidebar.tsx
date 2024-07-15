import { Button, Icon } from "@repo/shared/ui";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { PagesSidebarItems } from "../PagesSidebarItems/PagesSidebarItems";

import plus from "@/shared/assets/icons/plus.svg";
import { pathNames } from "@/shared/const/router";

import cls from "./PagesSidebar.module.scss";

interface IItems {
  items: (typeof pathNames)[0][];
  textButton?: string;
  onClick?: () => void;
}

export const PageSidebar = (props: IItems) => {
  const { items, textButton, onClick } = props;
  const params = useLocation().pathname.split("/").at(-1);
  const ItemList = useMemo(
    () =>
      items.map((data, key) => (
        <PagesSidebarItems
          text={data.value}
          path={data.path}
          key={key}
          active={params === data.pathName}
        />
      )),
    [items]
  );
  return (
    <aside className={cls.aside}>
      <div className={cls.list}>{ItemList}</div>
      {textButton && (
        <Button onClick={onClick} addonLeft={<Icon Svg={plus} />} size="xs">
          {textButton}
        </Button>
      )}
    </aside>
  );
};
