

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
// import Spner from './components/Spner';

function App() {

const pagesize= 6;

  let Apikey = process.env.REACT_APP_NEWS_API    // hum apna khufia data .env.local folder bana kr us me rakty hai.
  // const Apikey = "82f127589ffc4243b56d94ea757d756b";
  


  const router= createBrowserRouter(
       createRoutesFromElements(
         <Route path='/' element={ <Navbar   />}> 
           <Route index               element={<News  key={'home'}          pageSize={pagesize} apikey={Apikey} country="us" category='sports'/>}  />
          <Route path='business'      element={<News  key={'business'}      pageSize={pagesize} apikey={Apikey} country="us" category='business'/>}  />
          <Route path='Entertainment' element={<News  key={'entertainment'} pageSize={pagesize} apikey={Apikey} country="us" category='entertainment'/>}  />
          <Route path='general'       element={<News  key={'general'}       pageSize={pagesize} apikey={Apikey} country="us" category='general'/>}  />
          <Route path='health'        element={<News  key={'health'}        pageSize={pagesize} apikey={Apikey} country="us" category='health'/>}  />
          <Route path='science'       element={<News  key={'science'}       pageSize={pagesize} apikey={Apikey} country="us" category='science'/>}  />
          <Route path='sports'        element={<News  key={'sports'}        pageSize={pagesize} apikey={Apikey} country="us" category='sports'/>}  />
          <Route path='technology'    element={<News  key={'technology'}    pageSize={pagesize} apikey={Apikey} country="us" category='technology'/>}  /> 
        </Route>
       )
  )
  return (
    <>
    

        <RouterProvider router={router}/>

        {/* <Navbar/>
        <News  pageSize={pagesize} Apikey={Apikey} country="us" category='sports'/> */}

       
     
    </>
  );
}

export default App;
// NewsApp API 
// 82f127589ffc4243b56d94ea757d756b
