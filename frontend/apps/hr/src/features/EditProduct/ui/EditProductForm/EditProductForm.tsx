import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, TextArea } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  editProductSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/editProductSchema';

import cls from './EditProductForm.module.scss';

export interface EditProductFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
  id: string;
}
const getProductById = (id: string) => ({
  title: 'Название',
  price: '32',
  description: 'Описание',
});

const EditProductForm = memo((props: EditProductFormProps) => {
  const { id, className, onSuccess, onReset } = props;
  const [isSuccess, setIsSuccess] = useState(false);
  const product = getProductById(id);
  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: product,
    resolver: zodResolver(editProductSchema),
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
      className={classNames(cls.EditProductForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title="Редактирование товара" size="m" />
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

export default EditProductForm;
