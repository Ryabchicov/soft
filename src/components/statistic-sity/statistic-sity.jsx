import classes from './statistic-sity.module.scss';

const StatSity = () => {

      const { 
            'stat-sity': statSity,
            scale
      } = classes;

      return (
            <article className={statSity}>
                  <span>ГОК г.Мирный</span>
                  <div className={scale}></div>
                  <div>Сотрудников<span>300</span></div>
                  <div>Прошли успешно<span>150</span></div>
                  <div>Не сдали<span>100</span></div>
                  <div>Проигнорировали<span>50</span></div>
            </article>
      )
}

export default StatSity;