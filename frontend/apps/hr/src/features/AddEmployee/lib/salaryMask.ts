import type { MaskitoOptions } from '@maskito/core';
import { maskitoCaretGuard } from '@maskito/kit';

export default {
  mask: ({ value }) => {
    const cleanValue = value.replace(/[^\d]/g, '');
    const digitsMask = Array.from(cleanValue).map(() => /\d/);

    if (!digitsMask.length) {
      return [/\d/];
    }

    return [...digitsMask, ' ', 'т', 'ы', 'с', '.', ' ', 'р', 'у', 'б', '.'];
  },
  plugins: [maskitoCaretGuard(value => [0, value.search(/\d /) + 1])],
} as MaskitoOptions;
