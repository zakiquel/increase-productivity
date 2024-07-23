'use client';

import { memo, useState } from 'react';

import { PageSwitcher } from '../PageSwitcher/PageSwitcher';

import { Product } from '@/entities/Product';
import { ProductItemModal } from '@/features/Product';
import { Page } from '@/widgets/Page';

const CatalogPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [isProduct, setProduct] = useState<Product>();
  return (
    <Page>
      <PageSwitcher onOpen={setOpen} onProduct={setProduct} />
      <ProductItemModal
        setOpen={() => setOpen(false)}
        isOpen={isOpen}
        product={isProduct}
      />
    </Page>
  );
};

export default memo(CatalogPage);
