import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IRoute, routes } from '@routes/index';

function App() {
  return (
    <React.Fragment>
     <Router>
      <Routes>
        {
          routes.map((route: IRoute, _i: number) => (
            <React.Fragment>
              <Route caseSensitive key={ _i } path={ route.path.parent } element={ route.element.parent } />
              {
                !!route.path.child && (<Route key={ _i * 10 } path={ route.path.child } element={ route.element.child } />)
              }
            </React.Fragment>
          ))
        }
      </Routes>
     </Router>
    </React.Fragment>
  );
}

export default App;
