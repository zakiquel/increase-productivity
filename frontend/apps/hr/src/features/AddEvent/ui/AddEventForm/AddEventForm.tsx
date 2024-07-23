import { zodResolver } from '@hookform/resolvers/zod';
import { useMaskito } from '@maskito/react';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, TextArea, Toast } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToaster } from 'rsuite';

import {
  addEventSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/addEventSchema';
import dateOptions from '../../lib/dateMask';

import cls from './AddEventForm.module.scss';

export interface AddEventFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const AddEventForm = memo((props: AddEventFormProps) => {
  const { className, onSuccess, onReset } = props;
  const [isSuccess, setIsSuccess] = useState(false);

  const dobInputRef = useMaskito({ options: dateOptions });

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      title: '',
      date: '',
      format: '',
      reward: '',
      description: '',
    },
    resolver: zodResolver(addEventSchema),
    mode: 'onBlur',
  });
  const toaster = useToaster();

  const ToasterShow = useCallback(() => {
    toaster.push(
      <Toast
        text="Изменения успешно сохранены"
        size="l"
        variant="success"
        addOnLeft={
          <span className="material-symbols-outlined">check_circle</span>
        }
      />,
      { placement: 'bottomCenter' },
    );
  }, [toaster]);

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSaveClick = useCallback(async () => {
    if (isValid) {
      setIsSuccess(true);
    }
  }, [isValid]);

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    async (data) => {
      await onSaveClick();
      reset();
      onSuccess();
      ToasterShow();
    },
    [reset, onSuccess, onSaveClick, ToasterShow],
  );

  return (
    <form
      className={classNames(cls.AddEventForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title="Добавление мероприятия" size="m" />
      <Text
        text="Заполните поля ввода и нажмите кнопку «Сохранить». Новое мероприятие появится в разделе «Мероприятия»"
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
              className={cls.textarea}
              errorMessage={errors.description?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.description) trigger('description');
                if (errors.description) trigger('description');
              }}
            />
          )}
        />
      </div>

      <div className={cls.form_buttons}>
        <Button variant="secondary" size="l" fullWidth onClick={onResetClick}>
          Отменить
        </Button>
        <Button variant="primary" size="l" fullWidth type="submit">
          Сохранить
        </Button>
      </div>
    </form>
  );
});

export default AddEventForm;
