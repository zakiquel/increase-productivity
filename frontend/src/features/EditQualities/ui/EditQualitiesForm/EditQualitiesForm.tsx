import { useCallback, useEffect, useMemo, useState } from 'react';

import { Quality, Value } from '@/entities/Value';
import { Button } from '@/shared/ui/Button';
import { FormHeader } from '@/shared/ui/Form/FormHeader';
import { SuccessMessage } from '@/shared/ui/Form/SuccessMessage';

import cls from './EditQualitiesForm.module.scss';

export interface EditQualitiesFormProps {
  value: Value;
  onClose: () => void;
}

const allQualities: Quality[] = [
  { id: 1, name: 'Командный дух (команда-семья)' },
  { id: 2, name: 'Обучаемость' },
  { id: 3, name: 'Честность' },
  { id: 4, name: 'Умение говорить' },
  { id: 5, name: 'Системность мышления' },
  { id: 6, name: 'Надежность' },
  { id: 7, name: 'Инициативность' },
  { id: 8, name: 'Этичность' },
  { id: 9, name: 'Серьезность' },
  { id: 10, name: 'Коммуникабельность' },
  { id: 11, name: 'Тайм-менеджмент и пунктуальность' },
  { id: 12, name: 'Стрессоустойчивость и терпение' },
  { id: 13, name: 'Самостоятельность' },
  { id: 15, name: 'Амбициозность' },
  { id: 16, name: 'Умение заниматься рутинной работой' },
  { id: 17, name: 'Ответсвенность' },
  { id: 18, name: 'Профессионализм и компетентность ' },
  { id: 19, name: 'Адаптивность' },
  { id: 20, name: 'Стремление к качественному результату' },
  { id: 21, name: 'Чувство юмора' },
  { id: 22, name: 'Нацеленность на результат' },
  { id: 24, name: 'Безопасность' },
  { id: 25, name: 'Непрерывное развитие и новаторство' },
  { id: 26, name: 'Лидерство' },
  { id: 27, name: 'Умение слушать' },
  { id: 28, name: 'Позитивное мышление' },
];

const EditQualitiesForm = (props: EditQualitiesFormProps) => {
  const { value, onClose } = props;

  const [qualities, setQualities] = useState<Quality[]>(value.qualities);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null) {
      if (countdown === 0) {
        handleClose();
      } else {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown, handleClose]);

  const onSuccess = () => {
    setSubmitSuccess(true);
    setCountdown(5);
  };

  const handleQualityClick = (quality: Quality) => {
    let newQualities: Quality[];
    if (qualities.some(item => item.id === quality.id)) {
      newQualities = qualities.filter(item => item.id !== quality.id);
    } else if (qualities.length < 5) {
      newQualities = [...qualities, quality];
    } else return;
    setQualities(newQualities);
  };

  const sortedQualities = useMemo(
    () =>
      allQualities.toSorted((a, b) => {
        const aSelected = qualities.some(item => item.id === a.id);
        const bSelected = qualities.some(item => item.id === b.id);
        if (aSelected && !bSelected) return -1;
        if (!aSelected && bSelected) return 1;
        return 0;
      }),
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSuccess();
  };

  const title =
    value.qualities.length > 0
      ? `Качества для ценности "${value.name}"`
      : 'Добавление качеств';
  const buttonText =
    value.qualities.length > 0 ? 'Сохранить изменения' : 'Добавить качества';
  const successMessageText =
    value.qualities.length > 0
      ? 'Изменения успешно сохранены'
      : 'Качества успешно добавлены';

  return !submitSuccess ? (
    <div className={cls.EditQualitiesForm}>
      <FormHeader
        title={title}
        onClose={handleClose}
        className={cls.form_header}
      />
      <form onSubmit={handleSubmit}>
        <ul className={cls.values}>
          {sortedQualities.map(quality => (
            <li key={quality.id}>
              <Button
                variant={
                  qualities.some(item => item.id === quality.id)
                    ? 'primary'
                    : 'outline'
                }
                selected
                onClick={() => handleQualityClick(quality)}
              >
                {quality.name}
              </Button>
            </li>
          ))}
        </ul>
        <Button
          type='submit'
          fullWidth
          disabled={qualities.length === 0}
          className={cls.form_button}
        >
          {buttonText}
        </Button>
      </form>
    </div>
  ) : (
    <SuccessMessage
      title={successMessageText}
      onClose={handleClose}
      countdown={countdown}
      className={cls.success_message}
    />
  );
};

export default EditQualitiesForm;
