import './course-info/style.scss';

const Courseabout = () => {
  return (
    <div className="course-info">
      <h1 className="course-info__header">SQL</h1>
      <div className="course-info__description">
        <h2 className="description__header">Что такое SQL?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non
          similique debitis nesciunt enim odit placeat, earum maiores tenetur ex
          at? Unde, ipsa! Nam fugiat, recusandae doloribus saepe quia eum! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non
          similique debitis nesciunt enim odit placeat, earum maiores tenetur ex
          at? Unde, ipsa! Nam fugiat, recusandae doloribus saepe quia eum! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non
          similique debitis nesciunt enim odit placeat, earum maiores tenetur ex
          at? Unde, ipsa! Nam fugiat, recusandae doloribus saepe quia eum! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non
          similique debitis nesciunt enim odit placeat, earum maiores tenetur ex
          at? Unde, ipsa! Nam fugiat, recusandae doloribus saepe quia eum!
        </p>
      </div>
      <div className="what-to-learn">
        <h1 className="what-to-learn__header">Что будет на курсе:</h1>
        <ul className="what-to-learn__list">
          <li>Вы познакомитесь с SQL, Metabase и базами данных</li>
          <li>
            Научитесь получать все данные из таблицы, фильтровать строки,
            сортировать данные, ограничивать выбор
          </li>
          <li>
            Будете работать с повторяющимися значениями, запросами агрегатных
            функций, группировкой и фильтрами агрегированных данных.
          </li>
          <li>
            Сможете объединить таблицы: по ключу, с помощью оператора JOIN (5
            видов). Агрегатные функции в соединениях таблиц.
          </li>
          <li>
            Продолжите объединять таблицы уже с помощью нескольких операторов
            UNION, использования Except, Intersect
          </li>
          <li>
            Научитесь делать подзапросы в WHERE, FROM, SELECT и использовать
            CTE.
          </li>
          <li>
            Разберетесь в условиях получения данных из базы данных, и в работе
            операторов CASE, COALESCE, NULLIF.
          </li>
          <li>
            Получите рабочую задачу, выберете подходящие функции и сформулируете
            необходимые запросы на языке SQL.
          </li>
        </ul>
      </div>
      <div className="course-info__themes themes">
        <h1 className="themes__header">Список тем</h1>
        <ul className="themes__list">
          <li>Основы SQL</li>
          <li>Агрегатные функции</li>
          <li>Соединение таблиц</li>
          <li>Сложные объединения</li>
          <li>Подзапросы</li>
          <li>Условные операторы</li>
        </ul>
      </div>
    </div>
  );
};

export default Courseabout;
