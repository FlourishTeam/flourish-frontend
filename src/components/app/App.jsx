/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../../components/pages/home/HomePage';
import DetailsPage from '../../components/pages/details/DetailsPage';
import MyPlantsPage from '../pages/my-plants/MyPlantsPage';
import SearchPage from '../pages/search/SearchPage';
import MyCareHistoryPage from '../pages/care-history/MyCareHistoryPage';
import Header from '../reusable/header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/myPlants" component={MyPlantsPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route
            exact
            path="/myCareHistoryPage"
            component={MyCareHistoryPage}
          />
        </Switch>
      </Router>
    </>
  );
}
