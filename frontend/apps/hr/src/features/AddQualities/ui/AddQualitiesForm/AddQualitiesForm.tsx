/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod';
import { classNames } from '@repo/shared/lib';
import { Input, Button, Toast } from '@repo/shared/ui';
import { memo, useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useToaster } from 'rsuite';

import { postQualityValue } from '../../api/qualityApi';
import {
  addQualitiesSchema,
  FormInputData,
  FormOutputData,
} from '../../lib/AddQualitiesScheme';
import { Quality } from '../../model/types/quality';
import { ActiveValue } from '../ValueList/ValueList';
import { ValueSwitcher } from '../ValuesSwitcher/ValuesSwitcher';

import cls from './AddQualitiesForm.module.scss';

export interface AddMetricFormProps {
  className?: string;
  onSuccess: () => void;
  onReset: () => void;
  activeValue: ActiveValue;
  setOpenModal: (value: boolean) => void;
  values: string[];
  valuesAndQualities: Quality[];
}

const AddMetricForm = memo((props: AddMetricFormProps) => {
  const { className, activeValue, values, valuesAndQualities, setOpenModal } =
    props;
  const [value, setValue] = useState<string>(activeValue.name);
  const toaster = useToaster();
  const [postQuality, { isSuccess }] = postQualityValue();
  const { id } = useParams<{ id: string }>();
  const {
    handleSubmit,
    reset,
    control,
    trigger,
    formState: { errors, isValid },
  } = useForm<FormInputData, any, FormOutputData>({
    defaultValues: {
      quality1: 0,
      quality2: 0,
      quality3: 0,
      quality4: 0,
      quality5: 0,
    },
    resolver: zodResolver(addQualitiesSchema),
    mode: 'onBlur',
  });

  const handleClick = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    if (isSuccess) {
      reset();
      toaster.push(
        <Toast
          text="Изменения успешно сохранены"
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

  const onSubmit: SubmitHandler<FormOutputData> = useCallback(
    async (data) => {
      const formatedData = {
        value_id: activeValue.id,
        employee_id: Number(id),
        quality1: {
          id: valuesAndQualities[0].quality_id
            ? valuesAndQualities[0].quality_id
            : 1,
          mark: data.quality1 === 0 ? 1 : data.quality1,
        },
        quality2: {
          id: valuesAndQualities[1] ? valuesAndQualities[1].quality_id : 1,
          mark: data.quality2 === 0 ? 1 : data.quality2,
        },
        quality3: {
          id: valuesAndQualities[2] ? valuesAndQualities[2].quality_id : 1,
          mark: data.quality3 === 0 ? 1 : data.quality3,
        },
        quality4: {
          id: valuesAndQualities[3] ? valuesAndQualities[3].quality_id : 1,
          mark: data.quality4 === 0 ? 1 : data.quality4,
        },
        quality5: {
          id: valuesAndQualities[4] ? valuesAndQualities[4].quality_id : 1,
          mark: data.quality5 === 0 ? 1 : data.quality5,
        },
      };

      await postQuality(formatedData);
    },
    [activeValue.id, id, postQuality, valuesAndQualities],
  );

  return (
    <form
      className={classNames(cls.AddQualityForm, {}, [className])}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <ValueSwitcher value={value} setValue={setValue} values={values} />
      <div className={cls.form_fields}>
        {valuesAndQualities[0] && (
          <Controller
            name="quality1"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1-10 баллов"
                labelClassName={classNames(cls.label, {}, [])}
                label={valuesAndQualities[0].quality_name}
                errorMessage={errors.quality1?.message}
                size="l"
                onChange={(event) => {
                  field.onChange(Number(event.target.value));
                  if (errors.quality1) trigger('quality1');
                }}
              />
            )}
          />
        )}
        {valuesAndQualities[1] && (
          <Controller
            name="quality2"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1-10 баллов"
                labelClassName={classNames(cls.label, {}, [])}
                label={valuesAndQualities[1].quality_name}
                errorMessage={errors.quality2?.message}
                size="l"
                onChange={(event) => {
                  field.onChange(Number(event.target.value));
                  if (errors.quality2) trigger('quality2');
                }}
              />
            )}
          />
        )}
        {valuesAndQualities[2] && (
          <Controller
            name="quality3"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1-10 баллов"
                labelClassName={classNames(cls.label, {}, [])}
                label={valuesAndQualities[2].quality_name}
                errorMessage={errors.quality3?.message}
                size="l"
                onChange={(event) => {
                  field.onChange(Number(event.target.value));
                  if (errors.quality3) trigger('quality3');
                }}
              />
            )}
          />
        )}
        {valuesAndQualities[3] && (
          <Controller
            name="quality4"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1-10 баллов"
                labelClassName={classNames(cls.label, {}, [])}
                label={valuesAndQualities[3].quality_name}
                errorMessage={errors.quality4?.message}
                size="l"
                onChange={(event) => {
                  field.onChange(Number(event.target.value));
                  if (errors.quality4) trigger('quality4');
                }}
              />
            )}
          />
        )}
        {valuesAndQualities[4] && (
          <Controller
            name="quality5"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="1-10 баллов"
                labelClassName={classNames(cls.label, {}, [])}
                label={valuesAndQualities[4].quality_name}
                errorMessage={errors.quality5?.message}
                size="l"
                onChange={(event) => {
                  field.onChange(Number(event.target.value));
                  if (errors.quality5) trigger('quality5');
                }}
              />
            )}
          />
        )}
      </div>
      <div className={cls.form_buttons}>
        <Button variant="secondary" size="l" fullWidth onClick={handleClick}>
          Назад
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
