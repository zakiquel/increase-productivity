import { zodResolver } from '@hookform/resolvers/zod';
import { useMaskito } from '@maskito/react';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, TextArea, Toast } from '@repo/shared/ui';
import { memo, useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToaster } from 'rsuite';

import { EventScheme, postEvent } from '../../api/addEventApi';
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
  const toaster = useToaster();
  const [createPost, { isSuccess }] = postEvent();
  const dobInputRef = useMaskito({ options: dateOptions });

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      name: '',
      event_date: '',
      imgSrc: '',
      format: '',
      reward: 0,
      description: '',
    },
    resolver: zodResolver(addEventSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isSuccess) {
      reset();
      onSuccess();
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);
  useEffect(() => {
    if (isSuccess) {
      reset();
      onSuccess();
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    async (data) => {
      const filterData = Object.fromEntries(
        Object.entries(data).filter(([_, v]) => v !== ''),
      );
      createPost(filterData as EventScheme);
    },
    [createPost],
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
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Название мероприятия"
              size="l"
              errorMessage={errors.name?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.name) trigger('name');
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
          name="event_date"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={dobInputRef}
              placeholder="Дата создания (ХХ.ХХ.ХХХХ)"
              size="l"
              errorMessage={errors.event_date?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.event_date) trigger('event_date');
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
                field.onChange(Number(event.target.value));
                field.onChange(Number(event.target.value));
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
              }}
            />
          )}
        />
      </div>

      <div className={cls.form_buttons}>
        <Button variant="secondary" size="l" fullWidth onClick={onResetClick}>
          Отменить
        </Button>
        <Button
          variant="primary"
          size="l"
          fullWidth
          type="submit"
          disabled={!isValid}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
});

export default AddEventForm;
