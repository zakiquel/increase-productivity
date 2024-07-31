import { classNames } from '@repo/shared/lib';
import { memo, useState } from 'react';

import { SectionSwitcher } from '../SectionSwitcher/ui/SectionSwitcher';

import { Product } from '@/entities/Product';
import { AddProductDrawer } from '@/features/AddProduct';
import { ProductModal } from '@/features/EditProduct';
import { Page } from '@/widgets/Page';

interface CatalogPageProps {
  className?: string;
}

const CatalogPage = (props: CatalogPageProps) => {
  const { className } = props;

  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [isProduct, setProduct] = useState<Product>();

  return (
    <Page className={classNames('', {}, [className])}>
      <SectionSwitcher
        setIsOpenForm={setIsOpenForm}
        setActiveProduct={setProduct}
        setIsModalOpen={setIsOpenModal}
      />
      <AddProductDrawer
        isOpen={isOpenForm}
        onClose={() => setIsOpenForm(false)}
      />
      <ProductModal
        isOpen={isOpenModal}
        setOpen={() => setIsOpenModal(false)}
        product={isProduct}
      />
    </Page>
  );
};

export default memo(CatalogPage);
