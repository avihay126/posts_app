import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PagesStyle/NotFoundPage.css';
import {ERROR_CODE, PAGE_NOT_FOUND_MESSAGE, GO_HOME_BUTTON} from '../Utils/Constants'

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="message-page-container">
      <h1 className="message-page-title">{ERROR_CODE}</h1>
      <p className="message-page-message ">{PAGE_NOT_FOUND_MESSAGE}</p>
      <button className="go-home-button" onClick={handleGoHome}>
        {GO_HOME_BUTTON}
      </button>
    </div>
  );
}

export default NotFoundPage;
