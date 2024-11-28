import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Not } from './components/Not';
import { ViewNot } from './components/ViewNot';
import './index.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: '/Nots',
      element: (
        <div>
          <Navbar />
          <Not />
        </div>
      ),
    },
    {
      path: '/Nots/:id',
      element: (
        <div>
          <Navbar />
          <ViewNot />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
