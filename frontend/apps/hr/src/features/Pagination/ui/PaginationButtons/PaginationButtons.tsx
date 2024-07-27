import { classNames } from '@repo/shared/lib';
import { Button } from '@repo/shared/ui';

import cls from './PaginationButtons.module.scss';

interface PaginationButtonsProps {
  buttonsNumber: number;
  currentIndex: number;
  handleClick: (index: number) => void;
  buttonsMax?: number;
  className?: string;
}

export const PaginationButtons = (props: PaginationButtonsProps) => {
  const {
    buttonsNumber,
    currentIndex,
    handleClick,
    buttonsMax = 5,
    className,
  } = props;

  const arr = Array.from({ length: buttonsNumber }, (element, index) => index);

  const getButtons = () => {
    if (buttonsNumber > buttonsMax) {
      if (currentIndex < buttonsMax - 2) return arr.slice(1, buttonsMax - 1);
      if (currentIndex > buttonsNumber - buttonsMax + 1)
        return arr.slice(buttonsNumber - 4, -1);
      return arr.slice(currentIndex - 1, currentIndex + 2);
    }

    return arr.slice(1, -1);
  };

  const paginationButton = (index: number) => (
    <Button
      onClick={() => handleClick(index)}
      className={classNames(
        cls.pagination_button,
        { [cls.selected]: currentIndex === index },
        [],
      )}
    >
      {index + 1}
    </Button>
  );
  if (buttonsNumber > 1)
    return (
      <div className={classNames(cls.Pagination, {}, [className])}>
        <Button
          variant="ghost"
          size="l"
          addonLeft={
            <span className="material-symbols-outlined">chevron_left</span>
          }
          className={cls.chevron_button}
          disabled={currentIndex === 0}
          onClick={() => handleClick(currentIndex - 1)}
        />
        <div className={cls.pagination_buttons}>
          {paginationButton(0)}
          {buttonsNumber > buttonsMax && currentIndex >= buttonsMax - 2 && (
            <Button className={cls.pagination_button} disabled>
              ...
            </Button>
          )}
          {getButtons().map((item) => paginationButton(item))}
          {buttonsNumber > buttonsMax &&
            currentIndex < buttonsNumber - buttonsMax + 2 && (
              <Button className={cls.pagination_button} disabled>
                ...
              </Button>
            )}
          {paginationButton(buttonsNumber - 1)}
        </div>
        <Button
          variant="ghost"
          size="l"
          addonLeft={
            <span className="material-symbols-outlined">chevron_right</span>
          }
          className={cls.chevron_button}
          disabled={currentIndex === buttonsNumber - 1}
          onClick={() => handleClick(currentIndex + 1)}
        />
      </div>
    );
  return null;
};
