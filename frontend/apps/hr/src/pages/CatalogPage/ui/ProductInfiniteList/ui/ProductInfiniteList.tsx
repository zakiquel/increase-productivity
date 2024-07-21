import { Product, ProductList } from '@/entities/Product';

interface ProductsListProps {
  products: Product[];
  setIsOpenForm: (value: boolean) => void;
  setActiveProduct: (value: Product) => void;
  setIsModalOpen: (value: boolean) => void;
}

export const ProductInfiniteList = (props: ProductsListProps) => {
  const { products, setActiveProduct, setIsModalOpen, setIsOpenForm } = props;

  return (
    <ProductList
      products={products}
      setIsOpenForm={setIsOpenForm}
      setActiveProduct={setActiveProduct}
      setIsModalOpen={setIsModalOpen}
    />
  );
};
