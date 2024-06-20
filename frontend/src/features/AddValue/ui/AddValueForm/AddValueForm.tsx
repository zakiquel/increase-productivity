import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { FormHeader } from '@/shared/ui/Form/FormHeader';
import { SuccessMessage } from '@/shared/ui/Form/SuccessMessage/SuccessMessage';
import { Input } from '@/shared/ui/Input';

import cls from './AddValueForm.module.scss';

export interface AddValueFormProps {
  onClose: () => void;
}

const AddValueForm = (props: AddValueFormProps) => {
  const { onClose } = props;
  const [value, setValue] = useState<string>('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null) {
      if (countdown === 0) {
        handleClose();
      } else {
        timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      }
    }
    return () => clearTimeout(timer);
  }, [countdown, handleClose]);

  const onSuccess = () => {
    setSubmitSuccess(true);
    setCountdown(5);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSuccess();
  };

  return !submitSuccess ? (
    <div className={cls.AddValueForm}>
      <FormHeader
        title='Добавление ценности'
        onClose={handleClose}
        className={cls.form_header}
      />
      <form onSubmit={handleSubmit}>
        <div className={cls.form_inputs}>
          <Input
            value={value}
            placeholder='Например, ответственность'
            onChange={event => setValue(event.target.value)}
            size='s'
            autofocus
          />
        </div>
        <Button
          type='submit'
          disabled={value === ''}
          className={cls.form_button}
        >
          Добавить ценность
        </Button>
      </form>
    </div>
  ) : (
    <SuccessMessage
      title='Ценность успешно добавлена!'
      onClose={handleClose}
      countdown={countdown}
      className={cls.success_message}
    />
  );
};

export default AddValueForm;
