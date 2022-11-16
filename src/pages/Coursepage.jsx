import { Link } from 'react-router-dom';
import logo from '../img/learnhub.svg';
import './courses-page/courses.scss';

const Coursepage = () => {
  return (
    <main className="main">
      <div className="available-courses courses">
        <h1 className="courses__header">Открытые курсы</h1>
        <section className="course course-active">
          <img src={logo} className="course__image" alt="logo" />
          <h1 className="course__title">Название курса</h1>
          <Link to="/modulepage" className="btn btn-primary">
            Продолжить изучение
            <span />
            <span />
            <span />
            <span />
          </Link>
        </section>
      </div>
      <div className="similar-courses courses">
        <h1>Похожие курсы</h1>
        <section className="course-secondary course">
          <img src={logo} className="course__image" alt="logo" />
          <div className="course-description">
            <h1>Название курса</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus aspernatur cum quod corrupti cupiditate nobis sit
              voluptatibus atque totam corporis non, aliquam explicabo
              accusantium eaque, sint nostrum impedit voluptates? Cupiditate,
              numquam. Eligendi unde explicabo, magni aliquam eaque ratione?
              Accusamus, mollitia autem eligendi nulla atque neque consequuntur.
              Veniam laborum cupiditate doloremque dicta, amet natus, similique
            </p>
            <Link to="/courseabout" className="btn">
              Подробнее о курсе
            </Link>
          </div>
        </section>
        <section className="course-secondary course">
          <img src={logo} className="course__image" alt="logo" />
          <div className="course-description">
            <h1>Название курса</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus aspernatur cum quod corrupti cupiditate nobis sit
              voluptatibus atque totam corporis non, aliquam explicabo
              accusantium eaque, sint nostrum impedit voluptates? Cupiditate,
              numquam. Eligendi unde explicabo, magni aliquam eaque ratione?
              Accusamus, mollitia autem eligendi nulla atque neque consequuntur.
              Veniam laborum cupiditate doloremque dicta, amet natus, similique
            </p>
            <Link to="./Подробнее_о_курсе" className="btn">
              Подробнее о курсе
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Coursepage;
