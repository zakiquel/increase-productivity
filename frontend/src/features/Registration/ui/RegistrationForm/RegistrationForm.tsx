import { memo, useCallback, useEffect } from 'react';

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from './RegistrationForm.module.scss';

export interface RegistrationFormProps {
  className?: string;
  onSuccess: () => void;
}

const RegistrationForm = memo((props: RegistrationFormProps) => {
  const { className, onSuccess } = props;

  const onRegistrationClick = useCallback(async () => {
    onSuccess();
  }, [onSuccess]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onRegistrationClick();
      }
    },
    [onRegistrationClick],
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return (
    <div className={classNames(cls.RegistrationForm, {}, [className])}>
      ..
    </div>
  );
});

export default RegistrationForm;
