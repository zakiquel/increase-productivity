import { z } from 'zod';

export const addQualitiesSchema = z.object({
  quality1: z
    .number()
    .int()
    .refine((num) => num >= 0 && num <= 10, 'Недопустимое количество баллов'),
  quality2: z
    .number()
    .int()
    .refine((num) => num >= 0 && num <= 10, 'Недопустимое количество баллов'),
  quality3: z
    .number()
    .int()
    .refine((num) => num >= 0 && num <= 10, 'Недопустимое количество баллов'),
  quality4: z
    .number()
    .int()
    .refine((num) => num >= 0 && num <= 10, 'Недопустимое количество баллов'),
  quality5: z
    .number()
    .int()
    .refine((num) => num >= 0 && num <= 10, 'Недопустимое количество баллов'),
});

export type FormInputData = z.input<typeof addQualitiesSchema>;
export type FormOutputData = z.output<typeof addQualitiesSchema>;
