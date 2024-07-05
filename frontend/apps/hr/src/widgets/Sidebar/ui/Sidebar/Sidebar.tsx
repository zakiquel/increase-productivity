import { classNames } from '@repo/shared/lib';
import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { Namebar } from '../Namebar/Namebar';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const sidebarItemsList = useSelector(getSidebarItems);

  const itemsList = useMemo(
    () =>
      sidebarItemsList.map((item, key) => (
        <SidebarItem item={item} key={key} />
      )),
    [sidebarItemsList]
  );

  return (
    <aside className={classNames(cls.Sidebar, {}, [className])}>
      <Namebar className={classNames(cls.namebar, {}, [cls.sidebar_block])} />
      <div
        role='navigation'
        className={classNames(cls.items, {}, [cls.sidebar_block])}
      >
        {itemsList}
      </div>
    </aside>
  );
});
