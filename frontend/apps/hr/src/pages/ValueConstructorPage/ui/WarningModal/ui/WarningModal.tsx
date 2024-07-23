import { ModalSuccess } from '@repo/shared/ui';

import { WarningCase } from '../../../model/types/warning';
import { getWarningModalContent } from '../lib/getWarningModalContent';

interface WarningModalProps {
  warningCase: WarningCase;
  onClose: () => void;
  onConfirm?: () => void;
}

export const WarningModal = (props: WarningModalProps) => {
  const { onClose, onConfirm, warningCase } = props;

  const { text, title, buttons } = getWarningModalContent(
    warningCase,
    onClose,
    onConfirm,
  );

  return (
    <ModalSuccess
      variant="constructor"
      isOpen={Boolean(warningCase)}
      onClose={onClose}
      text={text}
      title={title}
      button={buttons}
    />
  );
};
