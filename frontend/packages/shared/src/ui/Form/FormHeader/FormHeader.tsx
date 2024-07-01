import { Icon } from '../../Icon';
import { Text } from '../../Text';

import Cancel from '../../../assets/icons/cancel-default.svg';
import { classNames } from '../../../../src';

import cls from './FormHeader.module.scss';

interface FormHeaderProps {
  title: string;
  onClose: () => void;
  className?: string;
}

export const FormHeader = ({ title, onClose, className }: FormHeaderProps) => (
  <div className={classNames(cls.formHeader, {}, [className])}>
    <Text title={title} size='s' className={cls.form_title} />
    <Icon
      className={cls.close_button}
      Svg={Cancel}
      buttonHeight={56}
      buttonWidth={56}
      width={24}
      height={24}
      clickable
      onClick={onClose}
    />
  </div>
);
