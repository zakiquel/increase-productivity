import { classNames } from '@repo/shared/lib';
import { Button, ModalSuccess } from '@repo/shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { EditProductDrawer } from '../..';

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
                      size="l"
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
                      size="l"
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
            <Button
              variant="secondary"
              size="l"
              onClick={() => setIsDelete(false)}
            >
              Оставить
            </Button>
            <Button
              size="l"
              onClick={() => {
                setDeleteSuccess(true);
                setIsDelete(false);
              }}
            >
              Удалить
            </Button>
          </div>
        }
      />
      <ModalSuccess
        isTimer
        title="Товар удален"
        isOpen={deleteSuccess}
        onClose={() => setDeleteSuccess(false)}
        button={
          <Button onClick={() => setDeleteSuccess(false)} size="l">
            Спасибо!
          </Button>
        }
      />
      <EditProductDrawer
        id={product.id.toString()}
        isOpen={isEdit}
        onClose={() => setIsEdit(false)}
      />
    </>
  );
};
