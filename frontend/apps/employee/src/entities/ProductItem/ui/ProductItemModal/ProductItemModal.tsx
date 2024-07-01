import { classNames } from "@repo/shared/lib";
import cls from './ProductItemModal.module.scss'
import { Button } from "@repo/shared/ui";
import Image from "next/image";
import close from '@/shared/assets/icons/close.svg'
import { AnimatePresence, motion } from "framer-motion";

interface IProductItemModal {
    title: string,
    img?: string,
    description: string,
    price: number
    isOpen: boolean
    setOpen: (arg: boolean) => void
}


const ProductItemModal: React.FC<IProductItemModal> = ({
    title,
    img = '',
    description,
    price,
    isOpen,
    setOpen
} )=> {
    return ( 
        <AnimatePresence>
            
            {
            isOpen &&
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onClick={() => setOpen(false)}  className={cls.background}>
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()} className={cls.ProductItemModal}>
                <Image  className={cls.close} src={close} alt='close' width={24} height={24} onClick={() => setOpen(false)} />
                <Image className={cls.img} src={img} alt={title} width={490} height={315} />
                <div className={cls.body}>
                    <div className={cls.header}>
                        <h3 className={cls.title}>{title}</h3>
                        <p className={cls.description}>{description}</p>
                    </div>
                    <div className={cls.footer}>
                        <p className={cls.price}>{price} Б</p>
                        <Button
                            variant='primary' size='s'>Приобрести</Button>
                    </div>
                </div>
        </motion.div>
            </motion.div>}
            </AnimatePresence>
     );
}
 
export default ProductItemModal;