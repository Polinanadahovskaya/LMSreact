import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/use-auth';

import '../styles/layout/sign-in-up-form.scss';
import '../styles/modules/button.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const users = useAuth();
  const navigate = useNavigate();

  const getUserData = (email) => users.find((user) => user.email === email);

  const userExists = (email) => users.some((user) => user.email === email);

  const passwordIsValid = (password, formValues) => {
    const userData = getUserData(formValues.email);
    return userData?.password === password;
  };

  const onSubmit = (loginData) => {
    const userData = getUserData(loginData.email);
    if (!userData) return;
    if (userData.password === loginData.password) {
      sessionStorage.setItem('currentUser', JSON.stringify(userData));
      navigate('/');
    }
  };

  return (
    <div className="form-container">
      <h2>Вход</h2>
      <form className="form login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            type="text"
            id="email"
            name="email"
            required
            {...register('email', {
              required: 'Введите E-mail',
              validate: {
                checkEmailExists: (v) =>
                  userExists(v) || 'Данный пользователь не зарегистрирован',
              },
            })}
          />
          <label htmlFor="email">E-Mail</label>
          <div className="error">{errors?.email?.message}</div>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            name="password"
            required
            {...register('password', {
              required: 'Введите пароль',
              validate: {
                checkPasswordIsValid: (v) =>
                  passwordIsValid(v, getValues()) || 'Неверный пароль',
              },
            })}
          />
          <label htmlFor="password">Пароль</label>
          <div className="error">{errors?.password?.message}</div>
        </div>
        <Link
          type="submit"
          to="../coursepage"
          className="btn btn-login btn-primary"
        >
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
          Вход
        </Link>
        <Link to="/register" className="form-link">
          Еще не зарегистрированы? Регистрация
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
