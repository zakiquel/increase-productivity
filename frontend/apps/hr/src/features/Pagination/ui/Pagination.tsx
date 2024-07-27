import { useCallback, useEffect, useState } from 'react';

import { PaginationButtons } from './PaginationButtons/PaginationButtons';

interface PaginationProps<T> {
  list: Array<T>;
  interval: number;
  callback: (list: Array<T>) => void;
  className?: string;
}

export const Pagination = <T,>(props: PaginationProps<T>) => {
  const { list, interval, callback, className } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const intervalsNumber = Math.ceil(list.length / interval);

  const handleClick = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      const itemsToDraw = list.slice(
        index * interval,
        index * interval + interval,
      );
      callback(itemsToDraw);
    },
    [callback, interval, list],
  );

  useEffect(() => {
    if (list.length <= interval) {
      handleClick(0);
    } else handleClick(currentIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, handleClick, interval]);

  return (
    <PaginationButtons
      buttonsNumber={intervalsNumber}
      currentIndex={currentIndex}
      handleClick={handleClick}
      className={className}
    />
  );
};
