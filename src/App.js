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

  return (
    <Router>
      <div>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />

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
                country="in"
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
                country="in"
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
                country="in"
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
                country="in"
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
                country="in"
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
                country="in"
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
                country="in"
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
                country="in"
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
