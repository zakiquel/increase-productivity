import ErrorIcon from "@/shared/assets/icons/error404.svg";
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './PageError.module.scss';

interface ErrorPageProps {
  className?: string;
}

export const PageError = ({ className }: ErrorPageProps) => {

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <main className={classNames(cls.ErrorPage, {}, [className])}>
      <Icon Svg={ErrorIcon} width={300} height={400} />
      <div className={cls.info}>
        <p>Что-то пошло не так..</p>
        <Button onClick={reloadPage}>Обновить страницу</Button>
      </div>
    </main>
  );
};
