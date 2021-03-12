/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../../components/pages/home/HomePage';
import DetailsPage from '../../components/pages/details/DetailsPage';
import MyPlantsPage from '../pages/my-plants/MyPlantsPage';
import SearchPage from '../pages/search/SearchPage';
import MyCareHistoryPage from '../pages/care-history/MyCareHistoryPage';
import Header from '../reusable/header/Header';
import AboutUs from '../pages/about-us/AboutUsPage';
import { AuthProvider } from '../../providers/AuthContext';
import { DetailsProvider } from '../../providers/DetailsContext';
import { SearchProvider } from '../../providers/SearchContext';
import { CareLogProvider } from '../../providers/CareLogContext';
import { PhotoUploadProvider } from '../../providers/PhotoUploadContext';
import { DetailsPageContainer } from '../pages/details/DetailsPageContainer';

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <SearchProvider>
            <PhotoUploadProvider>
              <DetailsProvider>
                <CareLogProvider>
                  <Header />
                  <Switch>
                    <Route 
                      exact 
                      path="/" 
                      component={HomePage} 
                    />
                    <Route 
                      exact 
                      path="/details/:id" 
                      component={DetailsPageContainer} 
                    />
                    <Route 
                      exact 
                      path="/my-plants" 
                      component={MyPlantsPage} 
                    />
                    <Route 
                      exact 
                      path="/search" 
                      component={SearchPage} 
                    />
                    <Route
                      exact
                      path="/my-plants/:id"
                      component={MyCareHistoryPage}
                    />
                    <Route 
                      exact 
                      path="/about-us" 
                      component={AboutUs} 
                    />
                  </Switch>
                </CareLogProvider>
              </DetailsProvider>
            </PhotoUploadProvider>
          </SearchProvider>
        </AuthProvider>
      </Router>
    </>
  );
}
