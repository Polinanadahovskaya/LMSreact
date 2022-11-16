import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <p>Здесь будет что-то интересное</p>
      <Link to="/login">next</Link>
    </div>
  );
};

export default Home;
