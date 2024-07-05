import type { MaskitoOptions } from '@maskito/core';

export default {
  mask: ({ value }) => {
    const cleanValue = value.replace(/[^\d]/g, '');
    const digitsMask = Array.from(cleanValue).map(() => /\d/);

    if (!digitsMask.length) {
      return [/\d/];
    }

    return [...digitsMask, ' ', 'т', 'ы', 'с', '.', ' ', 'р', 'у', 'б', '.'];
  },
} as MaskitoOptions;
