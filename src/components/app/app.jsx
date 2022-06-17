import Header from '../header/header';
import News from '../news/news';
import StatPeoples from '../statistic-peoples/statistic-peoples';
import StatSafety from '../statistic-safety/statistic-safety';
import StatSity from '../statistic-sity/statistic-sity';
import classes from './app.module.scss';

function App() {

  const {app} = classes;

  return (
    <div className={app}>
      <Header/>
        <main>
          <News/>
          <section>
            <StatPeoples/>
            <StatSafety/>
            <StatSity/>
          </section>
        </main>
    </div>
  );
}

export default App;
