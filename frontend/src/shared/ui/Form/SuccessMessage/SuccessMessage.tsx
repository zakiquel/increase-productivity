import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

import CheckCircle from '@/shared/assets/icons/check_circle.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SuccessMessage.module.scss';

interface SuccessMessageProps {
  title: string;
  onClose?: () => void;
  className?: string;
  countdown?: number | null;
}

export const SuccessMessage = ({
  title,
  onClose,
  countdown,
  className,
}: SuccessMessageProps) => {
  const getCountdownText = (countdown: number) => {
    switch (countdown) {
      case 4:
      case 3:
      case 2:
        return 'секунды';
      case 1:
        return 'секунду';
      default:
        return 'секунд';
    }
  };

  return (
    <div className={classNames(cls.successMessage, {}, [className])}>
      <Text title={title} size='s' className={cls.message_title} />
      <Icon
        className={cls.message_icon}
        Svg={CheckCircle}
        width={117}
        height={117}
      />
      <Button className={cls.message_button} onClick={onClose} fullWidth>
        Закрыть
      </Button>
      {countdown && (
        <Text
          text={`Окно автоматически закроется через ${countdown} ${getCountdownText(
            countdown
          )}`}
          size='xs'
          className={cls.message_countdown}
        />
      )}
    </div>
  );
};
