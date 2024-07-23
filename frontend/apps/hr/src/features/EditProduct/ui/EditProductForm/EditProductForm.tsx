import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import {
  Button,
  Drawer,
  Input,
  Loader,
  ModalSuccess,
  Text,
  TextArea,
  Toast,
} from '@repo/shared/ui';
import { memo, Suspense, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToaster } from 'rsuite';

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

interface EditProductDrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  id: string;
}
const getProductById = (id: string) => ({
  title: 'Название',
  price: '32',
  description: 'Описание',
});

const EditProductForm = memo(
  (props: EditProductFormProps & EditProductDrawerProps) => {
    const { id, className, onSuccess, onReset, isOpen, onClose } = props;
    const [isSuccess, setIsSuccess] = useState(false);
    const product = getProductById(id);
    const [isCancel, setIsCancel] = useState(false);

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
      setIsCancel(false);
      onClose();
    }, [reset, setIsCancel, onClose]);

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

    if (isCancel)
      return (
        <ModalSuccess
          isOpen={isCancel}
          onClose={() => setIsCancel(false)}
          title="Хотите покинуть форму?"
          text="Данные не будут сохранены"
          button={
            <div className={cls.btn}>
              <Button
                variant="secondary"
                size="l"
                onClick={() => setIsCancel(false)}
              >
                Остаться
              </Button>
              <Button size="l" onClick={onResetClick}>
                Покинуть
              </Button>
            </div>
          }
        />
      );

    return (
      <Drawer
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        position="right"
        removeWhenClosed
      >
        <Suspense fallback={<Loader />}>
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

            <div className={cls.form_buttons}>
              <Button
                variant="secondary"
                size="l"
                fullWidth
                onClick={() => setIsCancel(true)}
              >
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
          </form>
        </Suspense>
      </Drawer>
    );
  },
);

export default EditProductForm;
