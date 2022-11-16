import { useNavigate } from 'react-router-dom';
import React from 'react';
import logo from '../img/learnhub.svg';
import '../styles/layout/header.scss';

const Header = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <header className="header">
      <div className="div__header_logo">
        <button className="btn btn-logout" type="button" onClick={goBack}>
          Go back
        </button>
        <img src={logo} alt="learnhub logo" className="logo" />
      </div>
      <div className="user-container">
        <p className="username">{}</p>
        <button to="./logout" type="button" className="btn btn-logout">
          Выход
        </button>
      </div>
    </header>
  );
};

export default Header;
