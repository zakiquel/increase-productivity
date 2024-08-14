import { z } from 'zod';

const regex = /^[0-9,]+$/;

export const addAbsenteismSchema = z.object({
  absenteism: z
    .string()
    .regex(regex)
    .refine(
      (num) => num.split(',')[1].length <= 4,
      'Количество знаков после запятой: 4',
    ),
});

export type FormInputData = z.input<typeof addAbsenteismSchema>;
export type FormOutputData = z.output<typeof addAbsenteismSchema>;
