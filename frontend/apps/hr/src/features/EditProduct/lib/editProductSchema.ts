import { z } from 'zod';

export const editProductSchema = z.object({
  title: z
    .string()
    .max(256, 'Допустимое количество символов 1-256')
    .min(1, 'Необходимо заполнить все поля'),
  price: z
    .string()
    .min(1, 'Необходимо заполнить все поля')
    .regex(/^[0-9]*$/, 'Допустимо использовать символы 0-9')
    .refine((value) => Number(value) > 0, 'Цена не может быть равна нулю'),
  description: z.string().max(1000, 'Допустимое количество символов 1-1000'),
});

export type FormInputData = z.input<typeof editProductSchema>;
export type FormOutputData = z.output<typeof editProductSchema>;
