import { zodResolver } from '@hookform/resolvers/zod';
import { useMaskito } from '@maskito/react';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, TextArea } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  editEventSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/editEventSchema';
import dateOptions from '../../lib/dateMask';

import cls from './EditEventForm.module.scss';

export interface EditEventFormProps {
  eventId: string;
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const getEventById = (id: string) => {
  return {
    title: 'Заголовок мероприятия',
    format: 'Формат мероприятия',
    date: '01.01.2022',
    reward: '1000',
    description: 'Описание мероприятия',
  };
};

const EditEventForm = memo((props: EditEventFormProps) => {
  const { eventId, className, onSuccess, onReset } = props;
  const [isSuccess, setIsSuccess] = useState(false);

  const event = getEventById(eventId);

  const dobInputRef = useMaskito({ options: dateOptions });

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: event,
    resolver: zodResolver(editEventSchema),
    mode: 'onBlur',
  });

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSaveClick = useCallback(async () => {
    if (isValid) {
      setIsSuccess(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
    }
  }, [isValid]);

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    async (data) => {
      await onSaveClick();
      reset();
      onSuccess();
    },
    [reset, onSuccess, onSaveClick],
  );

  return (
    <form
      className={classNames(cls.EditEventForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title="Редактирование мероприятия" size="m" />
      <Text
        text="Заполните поля ввода и нажмите кнопку «Сохранить». Изменения будут сохранены"
        size="s"
        className={cls.form_description}
      />
      <div className={cls.form_fields}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Название мероприятия"
              size="l"
              errorMessage={errors.title?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.title) trigger('title');
              }}
            />
          )}
        />
        <Controller
          name="format"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Формат"
              size="l"
              errorMessage={errors.format?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.format) trigger('format');
              }}
            />
          )}
        />

        <Controller
          name="date"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={dobInputRef}
              placeholder="Дата проведения (ХХ.ХХ.ХХХХ)"
              size="l"
              errorMessage={errors.date?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.date) trigger('date');
              }}
            />
          )}
        />
        <Controller
          name="reward"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Вознаграждение"
              size="l"
              errorMessage={errors.reward?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.reward) trigger('reward');
              }}
            />
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              placeholder="Описание (до 1000 символов)"
              maxLength={1000}
              errorMessage={errors.description?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.description) trigger('description');
              }}
            />
          )}
        />
      </div>
      {isSuccess ? (
        <div className={cls.success__wrapper}>
          <div className={cls.success}>
            <p className={cls.success__text}>Изменения успешно внесены!</p>
          </div>
          <Button variant="primary" size="l" fullWidth onClick={onResetClick}>
            Закрыть
          </Button>
          <p className={cls.success__footer}>
            Окно автоматически закроется через 5 секунд
          </p>
        </div>
      ) : (
        <div className={cls.form_buttons}>
          <Button variant="secondary" size="l" fullWidth onClick={onResetClick}>
            Отменить
          </Button>
          <Button
            type="submit"
            variant="primary"
            size="l"
            disabled={!isValid}
            fullWidth
          >
            Сохранить
          </Button>
        </div>
      )}
    </form>
  );
});

export default EditEventForm;
