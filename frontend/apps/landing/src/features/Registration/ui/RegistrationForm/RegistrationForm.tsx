// 'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { classNames } from '@repo/shared/lib';
// import { Button, Card, Icon, Input, Text } from '@repo/shared/ui';
// import Link from 'next/link';
// import { memo, useCallback, useState } from 'react';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// import {
//   RegistrationFormSchema,
//   registrationFormSchema,
// } from '../../lib/registrationFormSchema';

// import Visible from '@/shared/assets/icons/visibility.svg';
// import Invisible from '@/shared/assets/icons/visibility_off.svg';

// import cls from './RegistrationForm.module.scss';

// export interface RegistrationFormProps {
//   className?: string;
// }

// export const RegistrationForm = memo((props: RegistrationFormProps) => {
//   const { className } = props;

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const {
//     handleSubmit,
//     reset,
//     control,
//     trigger,
//     formState: { errors, touchedFields, isValid },
//   } = useForm<RegistrationFormSchema>({
//     defaultValues: {
//       name: '',
//       lastname: '',
//       patronymic: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     resolver: zodResolver(registrationFormSchema),
//     mode: 'onBlur',
//   });

//   const onResetClick = useCallback(async () => {
//     reset();
//   }, [reset]);

//   const onSubmit: SubmitHandler<RegistrationFormSchema> = useCallback(() => {
//     reset();
//   }, [reset]);

//   const handleVisibility = (name: string) => {
//     if (name === 'password') setShowPassword(!showPassword);
//     if (name === 'confirmPassword')
//       setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <Card
//       className={classNames(cls.RegistrationForm, {}, [className])}
//       variant="light"
//       padding="32"
//     >
//       <Text title="Регистрация " />

//       <form onSubmit={handleSubmit(onSubmit)} noValidate className={cls.form}>
//         <Controller
//           name="name"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               placeholder="Имя"
//               size="l"
//               errorMessage={errors.name?.message}
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (errors.name) trigger('name');
//               }}
//             />
//           )}
//         />
//         <Controller
//           name="lastname"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               placeholder="Фамилия"
//               size="l"
//               errorMessage={errors.lastname?.message}
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (errors.lastname) trigger('lastname');
//               }}
//             />
//           )}
//         />
//         <Controller
//           name="patronymic"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               placeholder="Отчество"
//               size="l"
//               errorMessage={errors.patronymic?.message}
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (errors.patronymic) trigger('patronymic');
//               }}
//             />
//           )}
//         />
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               placeholder="Email"
//               size="l"
//               type="email"
//               errorMessage={errors.email?.message}
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (errors.email) trigger('email');
//               }}
//             />
//           )}
//         />
//         <Controller
//           name="password"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               size="l"
//               type={showPassword ? 'text' : 'password'}
//               errorMessage={errors.password?.message}
//               placeholder="Пароль"
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (touchedFields.confirmPassword) trigger('confirmPassword');
//                 if (errors.password) trigger('password');
//               }}
//               addonRight={
//                 <Icon
//                   Svg={showPassword ? Invisible : Visible}
//                   clickable
//                   width={18}
//                   height={12}
//                   onMouseDown={(event) => event.preventDefault()}
//                   onClick={() => handleVisibility(field.name)}
//                   tabIndex={-1}
//                 />
//               }
//             />
//           )}
//         />
//         <Controller
//           name="confirmPassword"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               size="l"
//               errorMessage={errors.confirmPassword?.message}
//               onChange={(event) => {
//                 field.onChange(event.target.value);
//                 if (errors.confirmPassword) trigger('confirmPassword');
//               }}
//               type={showConfirmPassword ? 'text' : 'password'}
//               placeholder="Новый пароль"
//               addonRight={
//                 <Icon
//                   Svg={showConfirmPassword ? Invisible : Visible}
//                   clickable
//                   width={18}
//                   height={12}
//                   onMouseDown={(event) => event.preventDefault()}
//                   onClick={() => handleVisibility(field.name)}
//                   tabIndex={-1}
//                 />
//               }
//             />
//           )}
//         />

//         <Button
//           type="submit"
//           disabled={!isValid}
//           className={cls.form_button}
//           fullWidth
//           size="l"
//         >
//           Зарегистрироваться
//         </Button>
//         <p className={cls.text}>
//           Нажимая на кнопку, вы даете согласие на обработку
//           <span> персональных данных</span> и соглашаетесь с
//           <span> политикой конфиденциальности</span>
//         </p>
//         <p className={cls.text2}>
//           Зарегистрированы?{' '}
//           <Link href="/login" className={cls.link}>
//             Войти
//           </Link>
//         </p>
//       </form>
//     </Card>
//   );
// });
