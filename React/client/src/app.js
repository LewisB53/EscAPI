import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './container/MainContainer.jsx'



window.addEventListener('load', function () {
  ReactDOM.render(
    <MainContainer />,
    document.getElementById('app')
  );
});
