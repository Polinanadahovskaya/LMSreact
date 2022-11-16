import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const makeValidationSchema = (users) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Введите имя').min(3, 'Минимум 3 символа'),
    lastName: Yup.string()
      .required('Введите фамилию')
      .min(3, 'Минимум 3 символа'),
    phone: Yup.string()
      .required('Поле обязательно к заполнению')
      .min(18, 'Неверный формат телефона')
      .test('is-phone-available', 'Данный номер уже занят', (value) =>
        users.every(({ phone }) => phone !== value)
      ),
    email: Yup.string()
      .required('Введите E-mail')
      .email('Неверный формат E-Mail')
      .test('is-email-available', 'Данный E-mail уже занят', (value) =>
        users.every(({ email }) => email !== value)
      ),
    password: Yup.string()
      .required('Введите пароль')
      .min(8, 'Минимум 8 символов'),
    passwordConfirm: Yup.string()
      .required('Повторите пароль')
      .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
  });

  return { resolver: yupResolver(validationSchema) };
};

export default makeValidationSchema;
