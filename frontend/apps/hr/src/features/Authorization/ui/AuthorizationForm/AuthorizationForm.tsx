import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import { AppLink, Button, FormHeader, Icon, Input } from '@repo/shared/ui';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import {
  AuthorizationFormSchema,
  authorizationFormSchema,
} from '../../lib/authorizationFormSchema';

import Visible from '@/shared/assets/icons/visibility.svg';
import Invisible from '@/shared/assets/icons/visibility_off.svg';

import cls from './AuthorizationForm.module.scss';

export interface AuthorizationFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const AuthorizationForm = memo((props: AuthorizationFormProps) => {
  const { className, onSuccess, onReset } = props;
  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<AuthorizationFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(authorizationFormSchema),
    mode: 'onBlur',
  });

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSubmit: SubmitHandler<AuthorizationFormSchema> = useCallback(
    () => {
      reset();
      onSuccess();
    },
    [reset, onSuccess],
  );

  const handleVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classNames(cls.AuthorizationForm, {}, [className])}>
      <FormHeader
        title="Авторизация"
        onClose={onResetClick}
        className={cls.form_header}
      />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={cls.form_inputs}>
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
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                errorMessage={errors.password?.message}
                placeholder="**********"
                onChange={(event) => {
                  field.onChange(event.target.value);
                  if (errors.password) trigger('password');
                }}
                addonRight={
                  <Icon
                    Svg={showPassword ? Invisible : Visible}
                    clickable
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => handleVisibility()}
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
        </div>
        <AppLink
          to="*"
          target="_blank"
          size="s"
          className={cls.forgot_password}
        >
          Забыли пароль?
        </AppLink>
        <Button type="submit" disabled={!isValid} className={cls.form_button}>
          Войти
        </Button>
      </form>
    </div>
  );
});

export default AuthorizationForm;
