import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Text } from '../../Text';

import CheckCircle from '../../../assets/icons/check_circle.svg';
import { classNames } from '../../../lib';

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

  const declensionOfWords = (
    number: number, 
    txt: string[], 
    cases = [2, 0, 1, 1, 1, 2]
  ) =>
    txt[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];

  return (
    <div className={classNames(cls.successMessage, {}, [className])}>
      <Text title={title} size="m" className={cls.message_title} />
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
          text={`Окно автоматически закроется через ${countdown} ${declensionOfWords(
            countdown,
            ['секундy', 'секунды', 'секунд']
          )}`}
          size="s"
          className={cls.message_countdown}
        />
      )}
    </div>
  );
};
