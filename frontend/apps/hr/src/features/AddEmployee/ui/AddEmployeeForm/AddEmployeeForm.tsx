import { zodResolver } from '@hookform/resolvers/zod';
import { useMaskito } from '@maskito/react';
import { classNames } from '@repo/shared/lib';
import { Button, Icon, Input, Text } from '@repo/shared/ui';
import { memo, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  addEmployeeSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/addEmployeeSchema';
import dateOptions from '../../lib/dateMask';
import firstLetterOptions from '../../lib/firstLetterMask';
import salaryOptions from '../../lib/salaryMask';

import Lock from '@/shared/assets/icons/lock.svg';

import cls from './AddEmployeeForm.module.scss';

export interface AddEmployeeFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const AddEmployeeForm = memo((props: AddEmployeeFormProps) => {
  const { className, onSuccess, onReset } = props;

  const dobInputRef = useMaskito({ options: dateOptions });
  const doeInputRef = useMaskito({ options: dateOptions });
  const salaryInputRef = useMaskito({ options: salaryOptions });
  const firstNameInputRef = useMaskito({ options: firstLetterOptions });
  const patronimycInputRef = useMaskito({ options: firstLetterOptions });
  const lastnameInputRef = useMaskito({ options: firstLetterOptions });
  const positionInputRef = useMaskito({ options: firstLetterOptions });

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      patronimyc: '',
      dateOfBirth: '',
      email: '',
      position: '',
      status: 'Работает',
      salary: '',
      dateOfEmployment: '',
    },
    resolver: zodResolver(addEmployeeSchema),
    mode: 'onBlur',
  });

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    data => {
      reset();
      onSuccess();
    },
    [reset, onSuccess]
  );

  return (
    <form
      className={classNames(cls.AddEmployeeForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title='Добавление сотрудника' size='m' />
      <Text
        text='Заполните поля ввода и нажмите кнопку «Сохранить». Новый сотрудник появится на главной странице.'
        size='s'
        className={cls.form_description}
      />
      <div className={cls.form_fields}>
        <Controller
          name='firstName'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={firstNameInputRef}
              placeholder='Имя'
              size='l'
              errorMessage={errors.firstName?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.firstName) trigger('firstName');
              }}
            />
          )}
        />
        <Controller
          name='patronimyc'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={patronimycInputRef}
              placeholder='Отчество'
              size='l'
              errorMessage={errors.patronimyc?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.patronimyc) trigger('patronimyc');
              }}
            />
          )}
        />
        <Controller
          name='lastName'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={lastnameInputRef}
              placeholder='Фамилия'
              size='l'
              errorMessage={errors.lastName?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.lastName) trigger('lastName');
              }}
            />
          )}
        />
        <Controller
          name='dateOfBirth'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={dobInputRef}
              placeholder='Дата рождения (ХХ.ХХ.ХХХХ)'
              size='l'
              errorMessage={errors.dateOfBirth?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.dateOfBirth) trigger('dateOfBirth');
              }}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder='Электронная почта'
              size='l'
              errorMessage={errors.email?.message}
              onChange={event => {
                field.onChange(event.currentTarget.value);
                if (errors.email) trigger('email');
              }}
            />
          )}
        />
        <Controller
          name='position'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={positionInputRef}
              placeholder='Должность'
              size='l'
              errorMessage={errors.position?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.position) trigger('position');
              }}
            />
          )}
        />
        <Controller
          name='status'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              readonly
              size='l'
              helperText='Статус «Работает/Уволен» влияет на текучесть кадров'
              addonRight={<Icon Svg={Lock} />}
            />
          )}
        />
        <Controller
          name='salary'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={salaryInputRef}
              placeholder='З/П, тыс. руб.'
              size='l'
              errorMessage={errors.salary?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.salary) trigger('salary');
              }}
            />
          )}
        />
        <Controller
          name='dateOfEmployment'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={doeInputRef}
              placeholder='Дата трудоустройства (ХХ.ХХ.ХХХХ)'
              size='l'
              errorMessage={errors.dateOfEmployment?.message}
              onInput={event => {
                field.onChange(event.currentTarget.value);
                if (errors.dateOfEmployment) trigger('dateOfEmployment');
              }}
            />
          )}
        />
      </div>
      <div className={cls.form_buttons}>
        <Button variant='secondary' size='l' fullWidth onClick={onResetClick}>
          Отменить
        </Button>
        <Button
          type='submit'
          variant='primary'
          size='l'
          disabled={!isValid}
          fullWidth
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
});

export default AddEmployeeForm;
