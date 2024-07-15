import { memo, useEffect, useState } from 'react';

import cls from './Breadcrumbs.module.scss';
import { getPathName, IAllPath } from '../model/selectors/getPathName';
import { AppLink } from '@repo/shared/ui';
import { useLocation } from 'react-router-dom';

export const Breadcrumbs = memo(() => {
  const [pathObj, setPathObj] = useState<IAllPath[]>([]);
  const params = useLocation().pathname;
  useEffect(() => {
    if (params) {
      setPathObj(getPathName(params));
    }
  }, [params]);
  return (
    <div className={cls.wrapper}>
      {pathObj.map((value) => {
        const node =
          value.value !== pathObj[pathObj.length - 1].value ? (
            <>
              <AppLink
                to={value.path}
                key={value.path}
                size="m"
                className={cls.defaultBreadcrumb}
              >
                {value.value}
              </AppLink>
              <span>/</span>
            </>
          ) : (
            <>
              <AppLink
                to={value.path}
                key={value.path}
                size="m"
                className={cls.greyBreadcrumb}
              >
                {value.value}
              </AppLink>
              <span className={cls.greyBreadcrumb}>/</span>
            </>
          );

        return node;
      })}
    </div>
  );
});
