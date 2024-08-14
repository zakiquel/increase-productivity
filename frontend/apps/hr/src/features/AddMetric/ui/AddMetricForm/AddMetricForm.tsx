import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import { Text, Input, Button, Toast } from '@repo/shared/ui';
import { memo, useCallback, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useToaster } from 'rsuite';

import { postMetric } from '../../api/metricApi';
import {
  addMetricSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/addMetricScheme';

import cls from './AddMetricForm.module.scss';

export interface AddMetricFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
}

const AddMetricForm = memo((props: AddMetricFormProps) => {
  const { className, onSuccess, onReset } = props;
  const toaster = useToaster();
  const [saveMetric, { isSuccess }] = postMetric();
  const { id } = useParams<{ id: string }>();

  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      metric_1_mark: 0,
      metric_2_mark: 0,
      metric_3_mark: 0,
    },
    resolver: zodResolver(addMetricSchema),
    mode: 'onBlur',
  });
  useEffect(() => {
    if (isSuccess) {
      reset();
      onSuccess();
      toaster.push(
        <Toast
          text="Изменения сохранены"
          size="l"
          variant="success"
          addOnLeft={
            <span className="material-symbols-outlined">check_circle</span>
          }
        />,
        { placement: 'bottomCenter' },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const onResetClick = useCallback(async () => {
    reset();
    onReset();
  }, [onReset, reset]);

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    async (data) => {
      const currentDate = new Date();
      console.log(currentDate);
      const day =
        currentDate.getDay().toString().length === 1
          ? `0${currentDate.getDay().toString()}`
          : currentDate.getDay().toString();
      const month =
        currentDate.getMonth().toString().length === 1
          ? `0${currentDate.getMonth().toString()}`
          : currentDate.getMonth().toString();

      if (id) {
        const fullData = {
          ...data,
          employee_id: Number(id),
          survey_date: `${currentDate.getFullYear()}-${month}-${day}`,
        };
        saveMetric(fullData);
      }
    },
    [id, saveMetric],
  );

  return (
    <form
      className={classNames(cls.AddMetricForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className={cls.title}>Метрики сотрудника</h2>
      <Text
        text="Укажите значения метрик, используя следующие значения:"
        size="s"
        variant="grey"
      />
      <Text
        text="Оценка вовлеченности — от 1 до 12 баллов;"
        size="s"
        variant="grey"
      />
      <Text
        text="Оценка лояльности — от 1 до 10 баллов;"
        size="s"
        variant="grey"
      />
      <Text
        text="Индекс удовлетворённости — от 1 до 10 баллов."
        size="s"
        variant="grey"
      />
      <Text
        text="Возможность сохранить появится после заполнения всех метрик."
        size="s"
        variant="grey"
        className={classNames(cls.text, {}, [])}
      />
      <div className={cls.form_fields}>
        <Controller
          name="metric_1_mark"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="1-12 баллов"
              labelClassName={classNames(cls.label, {}, [])}
              errorMessage={errors.metric_1_mark?.message}
              label="Оценка вовлеченности персонала (метрика Gallup Q12)"
              size="l"
              onChange={(event) => {
                field.onChange(Number(event.target.value));
                if (errors.metric_1_mark) trigger('metric_1_mark');
              }}
            />
          )}
        />
        <Controller
          name="metric_2_mark"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="1-10 баллов"
              labelClassName={cls.label}
              errorMessage={errors.metric_2_mark?.message}
              label="Оценка лояльности сотрудников (метод eNPS)"
              size="l"
              onChange={(event) => {
                field.onChange(Number(event.target.value));
                if (errors.metric_2_mark) trigger('metric_2_mark');
              }}
            />
          )}
        />
        <Controller
          name="metric_3_mark"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="1-10 баллов"
              labelClassName={cls.label}
              errorMessage={errors.metric_3_mark?.message}
              label="Индекс удовлетворённости сотрудников"
              size="l"
              onChange={(event) => {
                field.onChange(Number(event.target.value));
                if (errors.metric_3_mark) trigger('metric_3_mark');
              }}
            />
          )}
        />
      </div>
      <div className={cls.form_buttons}>
        <Button variant="secondary" size="l" fullWidth onClick={onResetClick}>
          Отменить
        </Button>
        <Button
          variant="primary"
          size="l"
          fullWidth
          type="submit"
          disabled={!isValid}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
});

export default AddMetricForm;
