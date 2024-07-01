import { ProductItem } from '@/entities/ProductItem';
import cls from './Products.module.scss';

const products = [
    {
        id: 1,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '
    },
    {
        id: 2,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 3,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 4,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 5,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 6,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 7,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
    {
        id: 8,
        title: 'Сертификат OZON',
        price: 10,
        img: "https://s3-alpha-sig.figma.com/img/51cf/6ceb/0d1a1a830cce1de1ac4d7a9fb4372d20?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GXm9TgeBrHKP95EhBEufebIin-BjK3rJ~5yxlpJzSRuij65MOTZxiaNmEVYStfdP6uBE--lasJAcdeqtWE4qVYC8T~BwNCKHxGoH3U6Hvy5kuNHUACHeXwVtBsXqOauN7bxQF0A1mMbEzEEcWDqNspvw7fkfgQs6zXxhkLwEWGerSLDRnwFt8E2wonVWbeQ~Y76NE06AAyU1CTdTyPyMvU7fVdTHAKg8xEPDvr8VdZgWIK8-wzY8XCAP6OcRiOx37Er5OnMEx4SdSZYacohq-oPaKnT2do7sKdql2avu0KCCK2uMI0jiMLi7eLhi4ykrlwvVOSlQ17GI5VM2Z5K1zg__",
        description: 'Подарочный сертификат Ozon - это прекрасный способ порадовать близких и друзей возможностью выбора подарка по своему вкусу из широкого ассортимента товаров на популярном интернет-маркетплейсе. Сертификат представляет собой уникальный код, который можно использовать для оплаты покупок на Ozon. Позвольте им насладиться шопингом и выбрать то, что именно им хочется приобрести. Подарочный сертификат Ozon - это возможность сделать подарок, который точно понравится! '

    },
]

const Products = () => {
    return ( <div className={cls.Products}>
        {products.map((product, index) => (
            <ProductItem key={index} {...product} />
        ))}
    </div> );
}
 
export default Products;