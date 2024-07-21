import { Button, Icon, SegmentedControl } from '@repo/shared/ui';
import { memo, useState } from 'react';

import { ProductInfiniteList } from '../../ProductInfiniteList';
import products from '../model/data/tempData.json';

import { Product } from '@/entities/Product';
import plus from '@/shared/assets/icons/plus.svg';

import cls from './SectionSwitcher.module.scss';

const Segments = [
  {
    value: 'products',
    label: 'Товары',
  },
  {
    value: 'requests',
    label: 'Заявки на товар',
  },
];

interface ProductsSwitcherProps {
  setIsOpenForm: (value: boolean) => void;
  setActiveProduct: (value: Product) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const SectionSwitcher = memo((props: ProductsSwitcherProps) => {
  const { setActiveProduct, setIsModalOpen, setIsOpenForm } = props;

  const [isActive, setActive] = useState('products');
  // TODO: Дополнить case, когда появятся макеты
  const getSection = () => {
    switch (isActive) {
      case 'products':
        return (
          <ProductInfiniteList
            products={products}
            setActiveProduct={setActiveProduct}
            setIsModalOpen={setIsModalOpen}
            setIsOpenForm={setIsOpenForm}
          />
        );

      default:
        break;
    }
    return false;
  };

  return (
    <>
      <nav className={cls.nav}>
        <SegmentedControl
          name=""
          segments={Segments}
          defaultIndex={0}
          callback={(value) => setActive(value)}
          size="xs"
        />
        <Button
          addonLeft={<Icon Svg={plus} />}
          size="s"
          onClick={() => setIsOpenForm(true)}
        >
          Добавить товар
        </Button>
      </nav>
      {getSection()}
    </>
  );
});
