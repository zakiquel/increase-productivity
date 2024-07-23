import { classNames } from '@repo/shared/lib';
import { Button, ModalSuccess, Toast } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useToaster } from 'rsuite';

import EditProductForm from '../EditProductForm/EditProductForm';

import { Product } from '@/entities/Product';
import ozon from '@/shared/assets/images/ozon.png';

import cls from './ProductItemModal.module.scss';

interface IProductItemModal {
  product?: Product;
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
}

export const ProductItemModal = (props: IProductItemModal) => {
  const { product, isOpen, setOpen } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const userBalance = 200;

  const toaster = useToaster();

  const ToasterShow = () => {
    toaster.push(
      <Toast
        text="Товар удален"
        size="l"
        variant="success"
        addOnLeft={
          <span className="material-symbols-outlined">check_circle</span>
        }
      />,
      { placement: 'bottomCenter' },
    );
  };

  if (!product) {
    return null;
  }
  return (
    <>
      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={() => {
              setOpen(false);
            }}
            className={cls.background}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className={cls.ProductItemModal}
            >
              <img
                className={cls.img}
                src={ozon}
                alt={product.title}
                width={480}
                height={320}
              />
              <div className={cls.body}>
                <div className={cls.header}>
                  <h3 className={cls.title}>{product.title}</h3>
                  <div className="">
                    <p className={cls.description}>{product.description}</p>
                    {userBalance < product.price && (
                      <p className={cls.error}>
                        Недостаточное количество баллов для совершения покупки
                      </p>
                    )}
                  </div>
                </div>
                <div className={cls.footer}>
                  <p className={cls.price}>{product.price} Б</p>
                  <div className={cls.buttons}>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsDelete(true);
                        setOpen(false);
                      }}
                    >
                      Удалить
                    </Button>
                    <Button
                      onClick={() => {
                        setIsEdit(true);
                        setOpen(false);
                      }}
                      variant="primary"
                    >
                      Изменить
                    </Button>
                  </div>
                </div>
                <Button
                  className={cls.close}
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <span
                    className={classNames('material-symbols-outlined', {}, [
                      cls.close_btn,
                    ])}
                  >
                    close
                  </span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
      <ModalSuccess
        title="Удалить товар?"
        text="Восстановить его будет нельзя"
        isOpen={isDelete}
        onClose={() => {
          setIsDelete(false);
        }}
        button={
          <div className={cls.btn_wrapper}>
            <Button variant="secondary" onClick={() => setIsDelete(false)}>
              Оставить
            </Button>
            <Button
              onClick={() => {
                setDeleteSuccess(true);
                setIsDelete(false);
                ToasterShow();
              }}
            >
              Удалить
            </Button>
          </div>
        }
      />
      <EditProductForm
        id={product.id.toString()}
        isOpen={isEdit}
        onClose={() => setIsEdit(false)}
        onSuccess={() => setIsEdit(false)}
        onReset={() => setIsEdit(false)}
      />
    </>
  );
};
