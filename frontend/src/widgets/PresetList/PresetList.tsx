import React, { memo } from 'react'

import { PresetCard } from '@/entities/PresetCard';

import cls from './PresetList.module.scss'

const presets = [{
    title: 'Самоотдача',
    qualities: [
        'Обучаемость',
        'Серьезность',
        'Умение заниматься рутинной работой',
        'Чувство юмора',
        'Лидерство',
    ]
}, {
    title: 'Страсть',
    qualities: [
        'Командный дух',
        'Серьезность',
        'Амбициозность',
        'Чувство юмора',
        'Лидерство',
    ]
}, {
    title: 'Честность',
    qualities: [
        'Честность',
        'Серьезность',
        'Ответсвенность',
        'Умение говорить',
        'Умение слушать',
    ]
}, {
    title: 'Открытость',
    qualities: [
        'Умение говорить',
        'Коммуникабельность',
        'Этичность',
        'Умение слушать',
    ]
}, {
    title: 'Динамика ценностей',
    qualities: [
        'Обучаемость',
        'Серьезность',
        'Умение заниматься рутинной работой',
        'Чувство юмора',
    ]
}]

export const PresetList = memo(() => (
    <div className={cls.PresetList}>
        <ul className={cls.preset_cards}>
            {presets.map((item, index) => (
                <li key={index}>
                    <PresetCard title={item.title} qualities={item.qualities} />
                </li>
            ))}
        </ul>
    </div>
));
