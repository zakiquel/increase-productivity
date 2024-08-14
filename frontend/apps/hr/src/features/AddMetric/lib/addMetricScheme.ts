import { z } from 'zod';

export const addMetricSchema = z.object({
  metric_1_mark: z
    .number()
    .min(1, 'Заполните обязательные поля')
    .int()
    .refine((num) => num >= 1 && num <= 12, 'Недопустимое количество баллов'),
  metric_2_mark: z
    .number()
    .int()
    .min(1, 'Заполните обязательные поля')
    .refine((num) => num >= 1 && num <= 10, 'Недопустимое количество баллов'),
  metric_3_mark: z
    .number()
    .int()
    .min(1, 'Заполните обязательные поля')
    .refine((num) => num >= 1 && num <= 10, 'Недопустимое количество баллов'),
});

export type FormInputData = z.input<typeof addMetricSchema>;
export type FormOutputData = z.output<typeof addMetricSchema>;
