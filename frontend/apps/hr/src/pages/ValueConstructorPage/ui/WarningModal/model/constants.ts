import { WarningCase } from '../../../model/types/warning';

export const modalContent: Record<
  WarningCase,
  { title: string; text: string; onConfirm?: boolean; confirmText?: string }
> = {
  onCancel: {
    title: 'Отменить редактирование?',
    text: 'Данные не будут сохранены',
    onConfirm: true,
    confirmText: 'Отменить',
  },
  emptyName: {
    title: 'Не выбрано название',
    text: 'В конструкторе присутствует ценность без названия, она будет удалена при сохранении.',
    onConfirm: true,
    confirmText: 'Сохранить',
  },
  emptyQualities: {
    title: 'Качества не выбраны',
    text: 'В конструкторе присутствует ценность без качеств, она будет удалена при сохранении. Чтобы сохранить ценность, добавьте к ней минимум одно качество.',
    onConfirm: true,
    confirmText: 'Сохранить',
  },
  qualitiesMax: {
    title: 'Достигнут максимум качеств',
    text: 'К каждой ценности можно добавить не более 5 качеств',
  },
  disabledName: {
    title: 'Название недоступно',
    text: 'У вас уже есть пресет с таким названием, выберите другой пресет, либо смените название ценности',
  },
  disabledPreset: {
    title: 'Пресет недоступен',
    text: 'У вас уже есть ценность с таким названием, выберите другой пресет, либо смените название ценности',
  },
};
