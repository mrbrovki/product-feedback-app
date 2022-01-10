import React, {createContext, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Comments from './pages/Comments';
import NoPage from './pages/NoPage';
import {useFetch} from './useFetch';
import '../styles/App.css';

export const Context = createContext();

function App() {
  const [size, setSize] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState('desktop');
  const {status, data} = useFetch('./data.json');
  const [feedbacks, setFeedbacks] = useState();
  const checkSize = () =>{
    if(size > 1024){
      setDeviceType('desktop');
        } 
    else if(size >= 768){
      setDeviceType('tablet');
    }
    else{
      setDeviceType('mobile');
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',() => setSize(window.innerWidth));
    checkSize();
    return () => window.addEventListener('resize',() => setSize(window.innerWidth));
  },);

  return (
    <Context.Provider value={{status, data, feedbacks, setFeedbacks,deviceType}}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path=':id/comments' element={<Comments />} />
        <Route path='*' element={<NoPage />} />
        </Route>
        </Routes>   
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
