import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { IMaskInput } from 'react-imask';
import makeValidationSchema from '../tools/validateSchema';
import useAuth from '../hooks/use-auth';

import '../styles/layout/sign-in-up-form.scss';
import '../styles/modules/button.scss';

const SignUp = () => {
  const users = useAuth();
  const validationSchema = makeValidationSchema(users);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ ...validationSchema, mode: 'onBlur' });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    users.push(data);
    sessionStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Регистрация</h2>
      <form className="form signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            {...register('firstName')}
          />
          <label htmlFor="firstName">Имя</label>
          <div className="error">{errors?.firstName?.message}</div>
        </div>
        <div className="input-container">
          <input
            {...register('lastName')}
            type="text"
            name="lastName"
            id="lastName"
            required
          />
          <label htmlFor="lastName">Фамилия</label>
          <div className="error">{errors?.lastName?.message}</div>
        </div>
        <div className="input-container">
          <Controller
            control={control}
            name="phone"
            render={({ field: { ...field } }) => (
              <IMaskInput
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                mask="+{7} (000) 000-00-00"
                required
                autofix
                radix="."
                type="tel"
                id="tel"
              />
            )}
          />
          <label htmlFor="phone">Номер телефона</label>
          <div className="error">{errors?.phone?.message}</div>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="email"
            id="email"
            required
            {...register('email')}
          />
          <label htmlFor="email">Почта</label>
          <div className="error">{errors?.email?.message}</div>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            id="password"
            required
            {...register('password')}
          />
          <label htmlFor="password">Пароль</label>
          <div className="error">{errors?.password?.message}</div>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
            {...register('passwordConfirm')}
          />
          <label htmlFor="password2">Повторите пароль</label>
          <div className="error">{errors?.passwordConfirm?.message}</div>
        </div>
        <button className="btn btn-primary btn-signup" type="submit">
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
          <span>{}</span>
          регистрация
        </button>
        <Link to="/login" className="form-link">
          Уже зарегистрированы? Вход
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
