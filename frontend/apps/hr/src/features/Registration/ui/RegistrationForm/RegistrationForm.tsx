import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import {
  AppLink,
  Button,
  Checkbox,
  FormHeader,
  Icon,
  Input,
} from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import options from '../../lib/phoneMask.js';
import {
  RegistrationFormSchema,
  registrationFormSchema,
} from '../../lib/registrationFormSchema';

import Visible from '@/shared/assets/icons/visibility.svg';
import Invisible from '@/shared/assets/icons/visibility_off.svg';

import cls from './RegistrationForm.module.scss';

export interface RegistrationFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onSuccess, onReset } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, touchedFields, isValid },
  } = useForm<RegistrationFormSchema>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreement: false,
    },
    resolver: zodResolver(registrationFormSchema),
    mode: 'onBlur',
  });

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSubmit: SubmitHandler<RegistrationFormSchema> = useCallback(() => {
    reset();
    onSuccess();
  }, [reset, onSuccess]);

  const checkboxLabel = (
    <>
      Даю согласие на обработку{' '}
      <AppLink to="*" target="_blank">
        персональных данных
      </AppLink>
    </>
  );

  const handleVisibility = (name: string) => {
    if (name === 'password') setShowPassword(!showPassword);
    if (name === 'confirmPassword')
      setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      <FormHeader
        title="Регистрация"
        onClose={onResetClick}
        className={cls.form_header}
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={cls.form_inputs}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Имя"
                placeholder="Иван"
                size="s"
                autoComplete="given-name"
                errorMessage={errors.name?.message}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (errors.name) trigger('name');
                }}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                // @ts-ignore
                options={options}
                onFocus={() => {
                  if (field.value === '') {
                    field.onChange('+7 ');
                  }
                }}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (errors.phone) trigger('phone');
                }}
                type="tel"
                label="Телефон"
                placeholder="+7 ХХХ ХХХ ХХ-ХХ"
                size="s"
                autoComplete="tel"
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Почта"
                placeholder="@e-mail.ru"
                size="s"
                type="email"
                autoComplete="email"
                errorMessage={errors.email?.message}
                onChange={(event) => {
                  field.onChange(event.target.value);
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
                label="Пароль"
                size="s"
                autoComplete="new-password"
                type={showPassword ? 'text' : 'password'}
                errorMessage={errors.password?.message}
                placeholder="**********"
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (touchedFields.confirmPassword) trigger('confirmPassword');
                  if (errors.password) trigger('password');
                }}
                addonRight={
                  <Icon
                    Svg={showPassword ? Invisible : Visible}
                    clickable
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleVisibility(field.name)}
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label="Пароль еще раз"
                size="s"
                errorMessage={errors.confirmPassword?.message}
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (errors.confirmPassword) trigger('confirmPassword');
                }}
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="**********"
                addonRight={
                  <Icon
                    Svg={showConfirmPassword ? Invisible : Visible}
                    clickable
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleVisibility(field.name)}
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
        </div>
        <Controller
          name="agreement"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              label={checkboxLabel}
              className={cls.form_checkbox}
            />
          )}
        />
        <Button type="submit" disabled={!isValid} className={cls.form_button}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
});

export default RegistrationForm;
