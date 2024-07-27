import { zodResolver } from '@hookform/resolvers/zod';
import { useMaskito } from '@maskito/react';
import { classNames } from '@repo/shared/lib';
import { Button, Input, Text, Toast } from '@repo/shared/ui';
import { memo, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useToaster } from 'rsuite';

import {
  addEmployeeSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/addEmployeeSchema';
import dateOptions from '../../lib/dateMask';
import firstLetterOptions from '../../lib/firstLetterMask';
import salaryOptions from '../../lib/salaryMask';

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
      first_name: '',
      last_name: '',
      middle_name: '',
      birth_date: '',
      email: '',
      position: '',
      status: 'working',
      salary: '',
      date_of_hiring: '',
      password: '',
    },
    resolver: zodResolver(addEmployeeSchema),
    mode: 'onBlur',
  });

  const toaster = useToaster();

  const ToasterShow = useCallback(() => {
    toaster.push(
      <Toast
        text="Сотрудник добавлен!"
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

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    (data) => {
      reset();
      onSuccess();
      ToasterShow();
    },
    [reset, onSuccess, ToasterShow],
  );

  return (
    <form
      className={classNames(cls.AddEmployeeForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Text title="Добавление сотрудника" size="m" className={cls.form_title} />
      <Text
        text="Заполните поля ввода и нажмите кнопку «Сохранить». Новый сотрудник появится на главной странице."
        size="s"
        className={cls.form_description}
      />
      <div className={cls.form_fields}>
        <Controller
          name="first_name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={firstNameInputRef}
              placeholder="Имя"
              size="l"
              errorMessage={errors.first_name?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.first_name) trigger('first_name');
              }}
            />
          )}
        />
        <Controller
          name="middle_name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={patronimycInputRef}
              placeholder="Отчество"
              size="l"
              errorMessage={errors.middle_name?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.middle_name) trigger('middle_name');
              }}
            />
          )}
        />
        <Controller
          name="last_name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={lastnameInputRef}
              placeholder="Фамилия"
              size="l"
              errorMessage={errors.last_name?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.last_name) trigger('last_name');
              }}
            />
          )}
        />
        <Controller
          name="birth_date"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={dobInputRef}
              placeholder="Дата рождения (ХХ.ХХ.ХХХХ)"
              size="l"
              errorMessage={errors.birth_date?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.birth_date) trigger('birth_date');
              }}
            />
          )}
        />
        <Controller
          name="position"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={positionInputRef}
              placeholder="Должность"
              size="l"
              errorMessage={errors.position?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.position) trigger('position');
              }}
            />
          )}
        />
        <Input
          value="Работает"
          disabled
          size="l"
          helperText="Статус «Работает/Уволен» влияет на текучесть кадров"
        />
        <Controller
          name="salary"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={salaryInputRef}
              placeholder="З/П, тыс. руб."
              size="l"
              errorMessage={errors.salary?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.salary) trigger('salary');
              }}
            />
          )}
        />
        <Controller
          name="date_of_hiring"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              maskedInputRef={doeInputRef}
              placeholder="Дата трудоустройства (ХХ.ХХ.ХХХХ)"
              size="l"
              errorMessage={errors.date_of_hiring?.message}
              onInput={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.date_of_hiring) trigger('date_of_hiring');
              }}
            />
          )}
        />
        <Text
          text="По этим данным сотрудник сможет войти в систему"
          size="s"
          className={cls.form_registration}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Логин (Электронная почта)"
              size="l"
              errorMessage={errors.email?.message}
              onChange={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.email) trigger('email');
              }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="Пароль"
              size="l"
              errorMessage={errors.password?.message}
              onChange={(event) => {
                field.onChange(event.currentTarget.value);
                if (errors.password) trigger('password');
              }}
              helperText="В пароле должно содержаться минимум 6 символов, одна буква латинского алфавита и одна цифра"
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
          Сохранить
        </Button>
      </div>
    </form>
  );
});

export default AddEmployeeForm;
