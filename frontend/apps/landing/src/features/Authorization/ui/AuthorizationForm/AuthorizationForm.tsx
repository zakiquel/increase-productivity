// 'use  client';

// import { zodResolver } from '@hookform/resolvers/zod';
// import { classNames } from '@repo/shared/lib';
// import { Button, Card, Icon, Input, Text } from '@repo/shared/ui';
// import Link from 'next/link';
// import { memo, useCallback, useState } from 'react';
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';

// import {
//   AuthorizationFormSchema,
//   authorizationFormSchema,
// } from '../../lib/authorizationFormSchema';

// import Visible from '@/shared/assets/icons/visibility.svg';
// import Invisible from '@/shared/assets/icons/visibility_off.svg';

// import cls from './AuthorizationForm.module.scss';

// export interface AuthorizationFormProps {
//   className?: string;
// }

// export const AuthorizationForm = memo((props: AuthorizationFormProps) => {
//   const { className } = props;
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     handleSubmit,
//     reset,
//     control,
//     trigger,
//     formState: { errors, isValid },
//   } = useForm<AuthorizationFormSchema>({
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//     resolver: zodResolver(authorizationFormSchema),
//     mode: 'onBlur',
//   });

//   const onResetClick = useCallback(async () => {
//     reset();
//   }, [reset]);

//   const onSubmit: SubmitHandler<AuthorizationFormSchema> = useCallback(() => {
//     reset();
//   }, [reset]);

//   const handleVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <Card
//       className={classNames(cls.AuthorizationForm, {}, [className])}
//       variant="light"
//       padding="32"
//     >
//       <Text title="Авторизация" />
//       <form onSubmit={handleSubmit(onSubmit)} noValidate className={cls.form}>
//         <Controller
//           name="email"
//           control={control}
//           render={({ field }) => (
//             <Input
//               {...field}
//               placeholder="email"
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
//                 if (errors.password) trigger('password');
//               }}
//               addonRight={
//                 <Icon
//                   Svg={showPassword ? Invisible : Visible}
//                   clickable
//                   width={18}
//                   height={12}
//                   onMouseDown={(event) => event.preventDefault()}
//                   onClick={() => handleVisibility()}
//                   tabIndex={-1}
//                 />
//               }
//             />
//           )}
//         />
//         <Link href="/" className={cls.link}>
//           Забыли пароль?
//         </Link>
//         <Button
//           type="submit"
//           disabled={!isValid}
//           className={cls.form_button}
//           fullWidth
//           size="l"
//         >
//           Войти
//         </Button>
//       </form>
//     </Card>
//   );
// });
