import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Contact from './conponents/Contact/Contact';
import Home from './conponents/Home/Home';
import Projects from './conponents/Projects/Projects';
import SingleProject from './conponents/SingleProject/SingleProject';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://personal-portfolio-server-phi.vercel.app/projects'),
          element: <Home></Home>
        },
        {
          path: '/projects/:id',
          element: <SingleProject></SingleProject>,
          loader: ({params}) => fetch(`https://personal-portfolio-server-phi.vercel.app/projects/${params.id}`),
        },
        {
          path: '/',
          element: <Contact></Contact>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
