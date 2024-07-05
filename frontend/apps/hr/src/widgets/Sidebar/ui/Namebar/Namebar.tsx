import { classNames } from '@repo/shared/lib';
import { Avatar, Button, Icon, Text } from '@repo/shared/ui';

import Logout from '@/shared/assets/icons/logout.svg';

import cls from './Namebar.module.scss';

interface NamebarProps {
  className?: string;
}

export const Namebar = (props: NamebarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Namebar, {}, [className])}>
      <div className={cls.namebar_info}>
        <Avatar size={40} />
        <div className={cls.namebar_info_text}>
          <Text title='Константин' size='xs' />
          <Text text='Компания X' size='xs' />
        </div>
      </div>
      <div className={cls.namebar_buttons}>
        <Button size='s' variant='secondary'>
          Профиль
        </Button>
        <Button size='s' variant='exit' className={cls.logout_button}>
          <Icon Svg={Logout} width={14} height={14} />
        </Button>
      </div>
    </div>
  );
};
