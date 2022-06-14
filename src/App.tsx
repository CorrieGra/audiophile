import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavigationModel, keysOfNavigationModel } from '@components/navigation/navigation-model';

function App() {
  return (
    <React.Fragment>
     <Router>
      <Routes>
        {
          keysOfNavigationModel.map((key: string, _i: number) => (
            <React.Fragment>
              <Route caseSensitive key={ _i } path={ NavigationModel[key]['path']['parent'] } element={ NavigationModel[key]['element']['parent'] } />
              {
                !!NavigationModel[key]['path']['child'] && (<Route key={ _i * 10 } path={ NavigationModel[key]['path']['child']! } element={ NavigationModel[key]['element']['child'] } />)
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
