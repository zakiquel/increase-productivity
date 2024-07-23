import { Button } from '@repo/shared/ui';

import { WarningCase } from '../../../model/types/warning';
import { modalContent } from '../model/constants';

export const getWarningModalContent = (
  warningCase: WarningCase,
  onClose: () => void,
  onConfirm?: () => void,
) => {
  const { title, text } = modalContent[warningCase];
  const buttons = modalContent[warningCase].onConfirm ? (
    <div style={{ display: 'flex', gap: 8 }}>
      <Button variant="secondary" size="s" fullWidth onClick={onClose}>
        Вернуться в конструктор
      </Button>
      <Button variant="primary" size="s" fullWidth onClick={onConfirm}>
        {modalContent[warningCase].confirmText}
      </Button>
    </div>
  ) : (
    <Button variant="primary" size="s" fullWidth onClick={onClose}>
      Понятно, спасибо
    </Button>
  );

  return {
    title,
    text,
    buttons,
  };
};
