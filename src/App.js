import React from 'react';

//import Students from './pages/Students/Students'
//import Courses from './pages/Courses/Courses';
import Dogs from './pages/Dogs/Dogs';
import Menu from './pages/Menu/Menu';
import DogsDashBoard from "./pages/testApi/DogsDashBoard";



import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Menu}/>
          <Route path="/Dogs" component={Dogs}/>
          <Route path="/HandleData" component={DogsDashBoard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
