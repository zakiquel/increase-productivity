import { z } from 'zod';

export const addEventSchema = z.object({
  title: z
    .string()
    .max(256, 'Допустимое количество символов 1-256')
    .min(1, 'Заполните обязательные поля'),
  format: z.string().max(256, 'Допустимое количество символов 1-256'),
  date: z
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
    .string()
    .min(1, 'Заполните обязательные поля')
    .regex(/^[0-9]*$/, 'Допустимо использовать символы 0-9')
    .refine(
      (value) => Number(value) > 0,
      'Вознаграждение не может быть равно нулю',
    ),
  description: z.string().max(1000, 'Допустимое количество символов 1-1000'),
});

export type FormInputData = z.input<typeof addEventSchema>;
export type FormOutputData = z.output<typeof addEventSchema>;
