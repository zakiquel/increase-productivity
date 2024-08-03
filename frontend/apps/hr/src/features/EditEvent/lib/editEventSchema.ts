import { z } from 'zod';

const regex = /^[А-яA-z-. ]+$/;

export const editEventSchema = z.object({
  name: z
    .string()
    .min(1, 'Заполните обязательные поля')
    .regex(regex, 'Поле содержит недопустимые символы')
    .max(256, 'Допустимое количество символов 1-256'),
  format: z
    .string()
    .regex(regex, 'Поле содержит недопустимые символы')
    .max(256, 'Допустимое количество символов 1-256')
    .optional()
    .or(z.literal('')),
  imgSrc: z.string().optional(),
  event_date: z
    .string()
    .min(1, 'Заполните обязательные поля')
    .length(10, 'Допустимо использовать символы 0-9. Допустимый вид XX.XX.XXXX')
    .transform((value) => {
      const [day, month, year] = value.split('.');
      return `${year}-${month}-${day}`;
    })

    .refine((date) => {
      const currentDate = new Date().getFullYear();
      return Number(date.split('-')[0]) <= currentDate + 1;
    }, 'Неверный формат даты'),
  reward: z
    .number()
    .min(1, 'Заполните обязательные поля')
    .int()
    .refine(
      (value) => Number(value) > 0,
      'Вознаграждение не может быть равно нулю',
    ),
  description: z
    .string()
    .min(1, 'Заполните обязательные поля')
    .regex(regex, 'Поле содержит недопустимые символы')
    .max(1000, 'Допустимое количество символов 1-1000')
    .optional()
    .or(z.literal('')),
});

export type FormInputData = z.input<typeof editEventSchema>;
export type FormOutputData = z.output<typeof editEventSchema>;
