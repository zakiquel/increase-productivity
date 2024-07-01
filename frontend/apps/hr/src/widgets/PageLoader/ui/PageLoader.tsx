import { classNames } from "@repo/shared/lib";
import { Loader } from '@repo/shared/ui';


import cls from './PageLoader.module.scss';


interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
