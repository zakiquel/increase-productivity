import { Button, ModalSuccess } from '@repo/shared/ui';
import { useState } from 'react';

interface FireEmployeeProps {
  id: number;
  className?: string;
}

export const FireEmployee = (props: FireEmployeeProps) => {
  const { id, className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleFire = () => {
    setIsOpen(false);
    // запрос на сервер
  };

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
