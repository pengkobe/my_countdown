import React, { Component, PropTypes } from 'react';
import Countdowns from './Countdowns/Countdowns';
import AddCountdown from './Countdowns/AddCountdown';
import MainLayout from '../layouts/MainLayout/MainLayout';
//  <Countdowns location={location} />
const App = ({ location }) => {
  return (
    <MainLayout>
     <Countdowns location={location}  />
    </MainLayout>
  );
};

App.propTypes = {
};

export default App;
