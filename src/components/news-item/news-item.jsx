import classes from './news-item.module.scss';

const NewsItem = ({date, title, descr}) => {

      const {
            article
      } = classes;

      return (
            <div className={article}>
                  <span>{date}</span>
                  <span>{title}</span>
                  <span>{descr}</span>
                  <button>Смотреть подробнее</button>
            </div>
      )
}

export default NewsItem;