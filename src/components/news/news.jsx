import { useState } from 'react';
import NewsItem from '../news-item/news-item';

import classes from './news.module.scss'

const News = () => {

      const {
            news,
            container
      } = classes;

      const [state] = useState([
            {date: '06.06.22',
            title: '1 инцидент на производстве',
            descr: 'Сотрудник не прислушался к технике безопасности и получил серьезную травму локтевого сустава....'
            },
            {date: '03.06.22',
            title: '5 сотрудников уходят в отпуск',
            descr: 'С 10.06.22 сотрудники уходт в запланированный отпуск'
            },
            {date: '02.06.22',
            title: '135 сотрудников прошли инструктаж по технике безопасности',
            descr: '95% сотрудников прошли успешно технику безопасности'
            },
            {date: '28.05.22',
            title: 'Открыт набор сотрудников',
            descr: 'После создания нового отдела, мы открыли набор сотрудников. Кол-во вакансий составляет 35 предложений'
            },
      ])

      const newsItems = state.map(({date, title, descr}) => {
            return <NewsItem
                  date = {date}
                  title = {title}
                  descr = {descr}
                  key={`${date}${descr[1]}`}
            />

      })

      return (
            <aside className={news}>
                  <div className={container}>
                        {newsItems}
                  </div>
            </aside>
      )
}

export default News;