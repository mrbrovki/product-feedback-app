import React, {createContext, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useFetch} from './useFetch';
//pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import RoadmapView from './pages/RoadmapView';
import Comments from './pages/Comments';
import NoPage from './pages/NoPage';
import NewFeedback from './pages/NewFeedback';
//styles
import '../styles/App.css';

export const Context = createContext();

function App() {
  const inProgress = 'in-progress';
  const [size, setSize] = useState(window.innerWidth);
  const [deviceType, setDeviceType] = useState('desktop');
  const [feedbacks, setFeedbacks] = useState();
  const [roadmap, setRoadmap] = useState({planned: 0, [inProgress]: 0, live: 0, suggestion: 0});
  const {status, data} = useFetch('./data.json');

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
    <Context.Provider value={{roadmap, setRoadmap, status, data, feedbacks, setFeedbacks,deviceType}}>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='roadmapview' element={<RoadmapView />} />
        <Route path='feedback/new' element={<NewFeedback />} />
        <Route path='feedback/comments/:id' element={<Comments />} />
        <Route path='' element={<Comments />} />
        <Route path='*' element={<NoPage />} />
        </Route>
        </Routes>   
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
