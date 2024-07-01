import { memo } from 'react';


import { OpportunityCard } from '../OpportunityCard/OpportunityCard';

import cls from './OpportunityList.module.scss';

const cards = [
    { id: '01', title: 'Динамика ценностей и метрик' },
    { id: '02', title: 'Подробная аналитика и отчёты' },
    { id: '03', title: 'Управлениe рисками в коллективе' },
    { id: '04', title: 'Рекомендация мероприятий для компании' }
]

export const OpportunityList = memo(() => (
    <section className={cls.OpportunityList}>
      <ul>
        {cards.map((item, index) => (
          <li key={index}>
            <OpportunityCard id={item.id} title={item.title}/>
          </li>
        ))}
      </ul>
    </section>
));
