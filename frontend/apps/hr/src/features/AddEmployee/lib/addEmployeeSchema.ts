import { z } from 'zod';

export const addEmployeeSchema = z.object({
  first_name: z
    .string()
    .max(50, 'Допустимое количество символов 1-50')
    .min(1, 'Необходимо заполнить все обязательные поля')
    .regex(/^[a-zA-Zа-яёА-ЯЁ-]+$/, 'Допустимо использовать А-я, A-z, символ -')
    .transform((value) => value.trim()),
  last_name: z
    .string()
    .max(50, 'Допустимое количество символов 1-50')
    .min(1, 'Необходимо заполнить все обязательные поля')
    .regex(/^[a-zA-Zа-яёА-ЯЁ-]+$/, 'Допустимо использовать А-я, A-z, символ -')
    .transform((value) => value.trim()),
  middle_name: z
    .string()
    .max(50, 'Допустимое количество символов 1-50')
    .refine((value) => /^[a-zA-Zа-яёА-ЯЁ-]*$/.test(value), {
      message: 'Допустимо использовать А-я, A-z, символ -',
    })
    .transform((value) => value.trim())
    .optional(),
  birth_date: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .length(10, 'Допустимо использовать символы 0-9. Допустимый вид XX.XX.XXXX')
    .transform((value) => {
      const [day, month, year] = value.split('.');
      return `${year}-${month}-${day}`;
    }),
  email: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .max(256, 'Адрес электронной почты не должен содержать больше 256 символов')
    .email('Некорректный адрес электронной почты'),
  position: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .max(50, 'Допустимое количество символов 1-50')
    .regex(
      /^[a-zA-Zа-яёА-ЯЁ\s-]+$/,
      'Допустимо использовать А-я, A-z, символ -',
    )
    .transform((value) => value.trim()),
  status: z.string(),
  salary: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .transform((value) => Number(value.split(' ')[0]))
    .refine((val) => val > 0 && val < 1000, {
      message: 'Допустимо использовать 1-3 символа, 0-9',
    }),
  date_of_hiring: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .length(10, 'Допустимо использовать символы 0-9. Допустимый вид XX.XX.XXXX')
    .transform((value) => {
      const [day, month, year] = value.split('.');
      return `${year}-${month}-${day}`;
    }),
  password: z
    .string()
    .min(1, 'Необходимо заполнить все обязательные поля')
    .max(24, 'Пароль не должен содержать больше 24 символов')
    .refine((value) => value.length >= 6, {
      message: 'Пароль должен включать минимум 6 символов',
    })
    .refine((value) => /^[A-Za-z\d]{6,}$/.test(value), {
      message: 'Допустимо использовать цифры и буквы латинского алфавита',
    })
    .refine((value) => /^(?=.*[A-Za-z])(?=.*\d)/.test(value), {
      message:
        'Пароль должен включать хотя бы одну букву латинского алфавита, хотя бы одну цифру',
    }),
});

export type FormInputData = z.input<typeof addEmployeeSchema>;
export type FormOutputData = z.output<typeof addEmployeeSchema>;
