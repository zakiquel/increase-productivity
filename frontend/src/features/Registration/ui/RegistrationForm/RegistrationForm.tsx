import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import options from '../../lib/phoneMask';
import {
  RegistrationFormSchema,
  registrationFormSchema,
} from '../../lib/registrationFormSchema';

import Cancel from '@/shared/assets/icons/cancel.svg';
import Visible from '@/shared/assets/icons/visibility.svg';
import Invisible from '@/shared/assets/icons/visibility_off.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

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

  const onSubmit: SubmitHandler<RegistrationFormSchema> = useCallback(
    data => {
      reset();
      onSuccess();
    },
    [reset, onSuccess]
  );

  const checkboxLabel = (
    <>
      Даю согласие на обработку{' '}
      <AppLink to='*' target='_blank' variant='purple'>
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
      <div className={cls.form_header}>
        <Text title='Регистрация' className={cls.form_title} />
        <Icon
          Svg={Cancel}
          width={34}
          height={35}
          clickable
          onClick={onResetClick}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={cls.form_inputs}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label='Имя'
                placeholder='Иван'
                size='l'
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                options={options}
                onFocus={() => {
                  if (field.value === '') {
                    field.onChange('+7 ');
                  }
                }}
                type='tel'
                label='Телефон'
                placeholder='+7 ХХХ ХХХ ХХ-ХХ'
                size='l'
                errorMessage={errors.phone?.message}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label='E-mail'
                placeholder='@e-mail.ru'
                size='l'
                errorMessage={errors.email?.message}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label='Пароль'
                size='l'
                type={showPassword ? 'text' : 'password'}
                errorMessage={errors.password?.message}
                onChange={event => {
                  field.onChange(event.target.value);
                  if (touchedFields.confirmPassword) trigger('confirmPassword');
                }}
                addonRight={
                  <Icon
                    width={22}
                    height={showPassword ? 16 : 20}
                    Svg={showPassword ? Visible : Invisible}
                    clickable
                    onMouseDown={event => event.preventDefault()}
                    onClick={() => handleVisibility(field.name)}
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                label='Пароль еще раз'
                size='l'
                errorMessage={errors.confirmPassword?.message}
                type={showConfirmPassword ? 'text' : 'password'}
                addonRight={
                  <Icon
                    width={22}
                    height={showConfirmPassword ? 16 : 20}
                    Svg={showConfirmPassword ? Visible : Invisible}
                    clickable
                    onMouseDown={event => event.preventDefault()}
                    onClick={() => handleVisibility(field.name)}
                    tabIndex={-1}
                  />
                }
              />
            )}
          />
        </div>
        <Controller
          name='agreement'
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              label={checkboxLabel}
              className={cls.form_checkbox}
            />
          )}
        />
        <Button type='submit' disabled={!isValid} className={cls.form_button}>
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
});

export default RegistrationForm;
