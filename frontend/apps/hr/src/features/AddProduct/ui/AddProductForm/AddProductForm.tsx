import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, TextArea, Toast } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToaster } from 'rsuite';

import {
  addProductSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/addProductSchema';

import cls from './AddProductForm.module.scss';

export interface AddProductFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const AddProductForm = memo((props: AddProductFormProps) => {
  const { className, onSuccess, onReset } = props;
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      title: '',
      price: '',
      description: '',
    },
    resolver: zodResolver(addProductSchema),
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
    if (isValid) setIsSuccess(true);
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
      className={classNames(cls.AddProductForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title="Добавление товара" size="m" />
      <Text
        text="Заполните поля ввода и нажмите кнопку «Добавить». Новый товар появится в каталоге."
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
              placeholder="Название товара"
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
          name="price"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Цена товара в баллах"
              size="l"
              errorMessage={errors.price?.message}
              onChange={(event) => {
                field.onChange(event.target.value);
                if (errors.price) trigger('price');
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
              placeholder="Описание"
              minRows={1}
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
          Добавить
        </Button>
      </div>
    </form>
  );
});

export default AddProductForm;
