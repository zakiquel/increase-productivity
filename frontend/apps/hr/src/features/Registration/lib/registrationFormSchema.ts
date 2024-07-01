import { z } from 'zod';

export const registrationFormSchema = z
  .object({
    name: z
      .string()
      .max(25, 'Максимальное количество символов - 25')
      .min(1, 'Необходимо заполнить все поля')
      .regex(
        /^[a-zA-Zа-яёА-ЯЁ-]+$/,
        'Допустимо использовать буквы латинского алфавита и кириллицы, дефис'
      ),
    phone: z
      .string()
      .min(1, 'Необходимо заполнить все поля')
      .length(
        16,
        'Необходимо записать номер телефона в формате +7 XXX XXX XX-XX'
      ),
    email: z
      .string()
      .min(1, 'Необходимо заполнить все поля')
      .max(
        256,
        'Адрес электронной почты не должен содержать больше 256 символов'
      )
      .email('Недействительный адрес электронной почты'),
    password: z
      .string()
      .max(24, 'Пароль не должен содержать больше 24 символов')
      .min(6, 'Пароль должен включать минимум 6 символов')
      .refine(value => /^(?=.*[A-Za-z])(?=.*\d)/.test(value), {
        message:
          'Пароль должен включать хотя бы одну букву латинского алфавита, хотя бы одну цифру',
      })
      .refine(value => /^[A-Za-z\d._*!]{6,}$/.test(value), {
        message: 'Допустимые символы: A-Z, a-z, 0-9, . _ * !',
      }),
    confirmPassword: z.string(),
    agreement: z.boolean().refine(value => value === true),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  });

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>;
