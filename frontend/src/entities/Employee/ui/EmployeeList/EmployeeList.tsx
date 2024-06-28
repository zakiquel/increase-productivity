import React, { memo, useState } from 'react'

import { EmployeeCardInfo } from '../../model/types/employee';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { ShowEmployeeModal } from '../EmployeeStats/ShowEmployeeModal/ShowEmployeeModal';

import employee from '@/shared/assets/images/employee.jpg';

import cls from './EmployeeList.module.scss'

const staff: EmployeeCardInfo[] = [
  {
    id: 1,
    name: 'Пётр Петров',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 70,
    metrics: [
      {
        id: 1,
        name: 'Лояльность',
        value: 50,
        change: 26,
      },
      {
        id: 2,
        name: 'Индекс счастья',
        value: 85,
        change: 5,
      },
      {
        id: 3,
        name: 'Внутренний карьерный рост',
        value: 50,
        change: 0,
      },
      {
        id: 4,
        name: 'Удовлетворенность работой',
        value: 30,
        change: -5,
      },
      {
        id: 5,
        name: 'Абсентеизм',
        value: 20,
        change: -10,
      },
      {
        id: 6,
        name: 'Развитие человеческого капитала',
        value: 60,
        change: 0,
      },
      {
        id: 7,
        name: 'Удовлетворённость сотрудниковзм',
        value: 50,
        change: 40,
      },
      {
        id: 8,
        name: 'Текучесть кадров',
        value: 50,
        change: 16,
      }
    ],
  },
  {
    id: 2,
    name: 'Пётр Пётр',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 45,
    metrics: [
      {
        id: 7,
        name: 'Удовлетворённость сотрудниковзм',
        value: 50,
        change: 40,
      },
      {
        id: 8,
        name: 'Текучесть кадров',
        value: 50,
        change: 16,
      }
    ],
  },
  {
    id: 3,
    name: 'dFYZ Пётр',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 20,
    metrics: [
      {
        id: 1,
        name: 'Лояльность',
        value: 50,
        change: 26,
      },
      {
        id: 2,
        name: 'Индекс счастья',
        value: 85,
        change: 5,
      },
      {
        id: 3,
        name: 'Внутренний карьерный рост',
        value: 50,
        change: 0,
      },
      {
        id: 4,
        name: 'Удовлетворенность работой',
        value: 30,
        change: -5,
      },
      {
        id: 5,
        name: 'Абсентеизм',
        value: 20,
        change: -10,
      },
      {
        id: 6,
        name: 'Развитие человеческого капитала',
        value: 60,
        change: 0,
      }
    ],
  },
  {
    id: 4,
    name: 'Пётр Петров',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 90,
    metrics: [
      {
        id: 1,
        name: 'Лояльность',
        value: 50,
        change: 26,
      },
      {
        id: 2,
        name: 'Индекс счастья',
        value: 85,
        change: 5,
      },
      {
        id: 3,
        name: 'Внутренний карьерный рост',
        value: 50,
        change: 0,
      },
      {
        id: 4,
        name: 'Удовлетворенность работой',
        value: 30,
        change: -5,
      },
      {
        id: 5,
        name: 'Абсентеизм',
        value: 20,
        change: -10,
      },
      {
        id: 6,
        name: 'Развитие человеческого капитала',
        value: 60,
        change: 0,
      }
    ],
  },
  {
    id: 5,
    name: 'Пётр Петров',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 100,
    metrics: [
      {
        id: 1,
        name: 'Лояльность',
        value: 50,
        change: 26,
      },
      {
        id: 2,
        name: 'Индекс счастья',
        value: 85,
        change: 5,
      },
      {
        id: 3,
        name: 'Внутренний карьерный рост',
        value: 50,
        change: 0,
      },
      {
        id: 4,
        name: 'Удовлетворенность работой',
        value: 30,
        change: -5,
      },
      {
        id: 5,
        name: 'Абсентеизм',
        value: 20,
        change: -10,
      },
      {
        id: 6,
        name: 'Развитие человеческого капитала',
        value: 60,
        change: 0,
      }
    ],
  },
  {
    id: 6,
    name: 'Пётр Петров',
    personRole: 'UX/UI дизайнер',
    image: employee,
    standard: 15,
    metrics: [
      {
        id: 1,
        name: 'Лояльность',
        value: 50,
        change: 26,
      },
      {
        id: 2,
        name: 'Индекс счастья',
        value: 85,
        change: 5,
      },
      {
        id: 3,
        name: 'Внутренний карьерный рост',
        value: 50,
        change: 0,
      },
      {
        id: 4,
        name: 'Удовлетворенность работой',
        value: 30,
        change: -5,
      },
      {
        id: 5,
        name: 'Абсентеизм',
        value: 20,
        change: -10,
      },
      {
        id: 6,
        name: 'Развитие человеческого капитала',
        value: 60,
        change: 0,
      }
    ],
  },
];

export const EmployeeList = memo(() => {
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeCardInfo | null>(null);
  const [isShowEmployee, setIsShowEmployee] = useState(false);

  const handleCardClick = (employee: EmployeeCardInfo) => {
    setIsShowEmployee(true);
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

  return (
    <div className={cls.EmployeeList}>
      <ul>
        {staff.map((employee, index) => (
          <li key={employee.id} >
            <div
              role='button'
              onClick={() => handleCardClick(employee)}
              tabIndex={index}>
              <EmployeeCard
                id={employee.id}
                name={employee.name}
                personRole={employee.personRole}
                image={employee.image}
                standard={employee.standard}
              />
            </div>
          </li>
        ))}
      </ul>
      {isShowEmployee && selectedEmployee && (
        <ShowEmployeeModal
          isOpen={isShowEmployee}
          employee={selectedEmployee}
          onClose={() => setIsShowEmployee(false)}
        />
      )}
    </div>
  )
});

