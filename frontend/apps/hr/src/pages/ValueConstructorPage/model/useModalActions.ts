import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { WarningCase } from './types/warning';

import { Value } from '@/entities/Value';
import { getRouteValues } from '@/shared/const/router';

type Warning = {
  warningCase: WarningCase;
  index?: number;
};

export const useModalActions = (
  checkEmptyQualities: () => number,
  handleSubmit: () => void,
  changeValue: (index: number, value: Value) => void,
  setDisabledPresets: React.Dispatch<React.SetStateAction<string[]>>,
  presets: Value[],
  values: Value[],
  scrollToValue: (index: number) => void,
  focusInput: (index: number) => void,
) => {
  const [currentWarning, setCurrentWarning] = useState<Warning | null>(null);
  const navigate = useNavigate();

  const openWarningModal = useCallback(
    (warningCase: WarningCase, index?: number) => {
      setCurrentWarning({ warningCase, index });
    },
    [],
  );

  const modalActions: Record<
    WarningCase,
    {
      onConfirm?: () => void;
      onCancel: () => void;
    }
  > = {
    onCancel: {
      onConfirm: () => {
        setCurrentWarning(null);
        navigate(getRouteValues());
      },
      onCancel: () => {
        setCurrentWarning(null);
      },
    },
    emptyName: {
      onConfirm: () => {
        const index = checkEmptyQualities();
        if (index < 0) handleSubmit();
        else {
          openWarningModal('emptyQualities', index);
        }
      },
      onCancel: () => {
        setCurrentWarning(null);
        if (currentWarning?.index) {
          scrollToValue(currentWarning.index);
          focusInput(currentWarning.index);
        }
      },
    },
    emptyQualities: {
      onConfirm: () => {
        setCurrentWarning(null);
        handleSubmit();
      },
      onCancel: () => {
        setCurrentWarning(null);
        if (currentWarning?.index) scrollToValue(currentWarning.index);
      },
    },
    disabledName: {
      onCancel: () => {
        setCurrentWarning(null);
        if (currentWarning && currentWarning.index) {
          changeValue(currentWarning?.index, {
            ...values[currentWarning?.index],
            name: '',
          });
          focusInput(currentWarning.index);
        }
      },
    },
    disabledPreset: {
      onCancel: () => {
        if (currentWarning && currentWarning.index) {
          const { index } = currentWarning;
          setDisabledPresets((prev) => [...prev, presets[index].name]);
        }
        setCurrentWarning(null);
      },
    },
    qualitiesMax: {
      onCancel: () => {
        setCurrentWarning(null);
      },
    },
  };
  if (currentWarning) {
    return {
      onCancel: modalActions[currentWarning?.warningCase].onCancel,
      onConfirm: modalActions[currentWarning.warningCase].onConfirm,
      warningCase: currentWarning.warningCase,
      openWarningModal,
    };
  }
  return {
    openWarningModal,
  };
};
