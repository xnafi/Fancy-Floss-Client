import logo from './logo.svg';
import './App.css';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './router/Routes';
import 'react-photo-view/dist/react-photo-view.css';


function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
