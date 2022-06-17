import classes from './statistic-safety.module.scss';
import Icons from '../icons/icons';

import chart from '../../img/chart2.png';

const StatSafety = () => {

      const {
            'stat-safety': statSafety,
            'chart-container': chartContainer,
            'stat-container': statContainer
      } = classes;

      return (
            <article className={statSafety}>
                  <div className={chartContainer}>
                        <div>
                              <span>95%</span>
                              <span>Сотрудников прошли технику безопасности</span>
                        </div>
                        <img src={chart} alt="chart"/>
                  </div>
                  <div className={statContainer}>
                        <Icons size='20' name='people'/>
                        <span>14 из 20</span>
                        <span>Сотрудников прошли аттестацию по технический безопасности во время работы за оборудованием</span>
                  </div>
            </article>
      )
}

export default StatSafety;