import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const apiKey = 'b0b1de14457e4cf89fd4d163ede57e05';
  const [progress, setProgress] = useState(10);
  const [country, setCountry] = useState('in');
  const setCountryCode = (code) => {
    setCountry(code.target.value);
  };

  return (
    <Router>
      <div>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar setCountryCode={setCountryCode} countryCode={country} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
                country={country}
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Business"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Business"
                pageSize={pageSize}
                country={country}
                category="Business"
              />
            }
          />
          <Route
            exact
            path="/Entertainment"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Entertainment"
                pageSize={pageSize}
                country={country}
                category="Entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                pageSize={pageSize}
                country={country}
                category="General"
              />
            }
          />
          <Route
            exact
            path="/Health"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key=""
                pageSize={pageSize}
                country={country}
                category="Health"
              />
            }
          />
          <Route
            exact
            path="/Science"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Health"
                pageSize={pageSize}
                country={country}
                category="Science"
              />
            }
          />
          <Route
            exact
            path="/Sports"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Sports"
                pageSize={pageSize}
                country={country}
                category="Sports"
              />
            }
          />
          <Route
            exact
            path="/Technology"
            element={
              <News
                News
                setProgress={setProgress}
                apiKey={apiKey}
                key="Technology"
                pageSize={pageSize}
                country={country}
                category="Technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
