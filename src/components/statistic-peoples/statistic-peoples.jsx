import { useState } from 'react';

import classes from './statistic-peoples.module.scss';

import chart from '../../img/chart.png';

const StatPeoples = () => {

      const{
            stat,
            'data-container': dataContainer,
            'value-container': valueContainer,
            'chart-container': chartContainer
      } = classes;

      const [state] = useState([
            {text: 'Человека собеседуются',
            value: 3},
            {text: 'Сотрудников находятся на стажеровке',
            value: 150},
            {text: 'Сотрудников проходят испытательный срок',
            value: 35},
            {text: 'Сотрудников приступают к работе',
            value: 35},
            {text: 'Повышают квалификацию',
            value: 15},
      ])

      const statValues = state.map(({text, value}) => {
            return (
                  <div className={valueContainer} key={`${value}${text[20]}`}>
                        <span>{value}</span>{text}
                  </div>
            )
      })

      return(
            <article className={stat}>
                  <div className={dataContainer}>
                        <span>Сводка по компании</span>
                        <div>{statValues}</div>
                  </div>
                  <div className={chartContainer}>
                        <img src={chart} alt="chart"/>
                  </div>
            </article>
      )
}

export default StatPeoples;