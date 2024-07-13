 import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import DataContextProvider from './Context/Data';
import Graph from './Graph/Graph';
import Nav from './Nav/Nav';
import Table from './Table/Table';
import LayOut from './LayOut/Layout';
 
let routes = createBrowserRouter([
  { path: '/', element: <LayOut />, children: [
    {path:'graph' , element:<Graph/> },
    {path:'table' , element:<Table/> }
  ]}
  ])
function App() {
  return <>
  <DataContextProvider> 
     <RouterProvider router={routes}>  </RouterProvider>

  </DataContextProvider>
   </>
}

export default App;
