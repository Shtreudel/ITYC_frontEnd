
//import Welcome from './views/Welcome';
//import Home from './views/Home';

import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './appData/routes';

function App() {

  const router = createBrowserRouter(routes);

 return (

  <div className='app'>
    <header>I'm a header</header>
    <RouterProvider router={router} />
    <footer>I'm a footer</footer>
  </div>

 )
}

export default App;
