import StarRating from 'react-svg-star-rating';
import './Starsrating/style.scss';

const Starsrating = () => {
  return (
    <>
      <h1 className="h1">Оставь свой отзыв!</h1>
      <div className="rating-area">
        <StarRating unit="half" />
      </div>
      <form action="textarea1.php" method="post">
        <p>
          <b>Введите ваш отзыв:</b>
        </p>
        <p>
          <textarea rows="10" cols="45" name="text" />
        </p>
        <p>
          <input type="submit" className="btn" value="Отправить" />
        </p>
      </form>
    </>
  );
};

export default Starsrating;
