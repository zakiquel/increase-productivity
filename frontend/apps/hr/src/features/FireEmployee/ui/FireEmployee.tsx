import { Button, ModalSuccess } from '@repo/shared/ui';
import { useEffect, useState } from 'react';

import { Employee, editEmployee } from '@/entities/Employee';

interface FireEmployeeProps {
  employee: Employee;
  className?: string;
}

export const FireEmployee = (props: FireEmployeeProps) => {
  const { employee, className } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [fireEmployee, { isSuccess }] = editEmployee();

  const handleFire = async () => {
    await fireEmployee({ ...employee, status: 'fired' });
  };

  useEffect(() => {
    if (isSuccess) setIsOpen(false);
  }, [isSuccess]);

  return (
    <>
      <Button
        size="xs"
        variant="ghost"
        className={className}
        onClick={(event) => {
          event.stopPropagation();
          setIsOpen(true);
        }}
      >
        Уволить
      </Button>
      <ModalSuccess
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Подтвердите действие"
        text="Вы действительно хотите уволить сотрудника? Его данные будут заблокированы для вас"
        variant="constructor"
        button={
          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              variant="secondary"
              onClick={() => setIsOpen(false)}
              fullWidth
            >
              Отменить
            </Button>
            <Button onClick={handleFire} fullWidth>
              Уволить
            </Button>
          </div>
        }
      />
    </>
  );
};
