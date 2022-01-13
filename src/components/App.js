import React, {createContext, useReducer, useEffect} from 'react';
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

const App = () => {
  const inProgress = 'in-progress';
  const initialState = {
    size: window.innerWidth,
    deviceType: 'desktop',
    sort: 'most upvotes',
    roadmap: {planned: 0, [inProgress]: 0, live: 0, suggestion: 0},
    filter: {all: true, ui: false, ux: false, enhancements: false, bug: false, feature: false},
    feedbacks: null
  };
  const reducer = (state, action) =>{
    switch(action.type){
      case 'SIZE':
      case 'SORT':
      case 'FEEDBACKS':
        return {...state, [action.type.toLowerCase()]: action.value};
      case 'DEVICETYPE':
        return {...state, deviceType: action.value};
      case 'ROADMAP':
      return {...state, roadmap:{...state.roadmap, [action.value]: state.roadmap[action.value] + 1}}
      case 'FILTER':
      return {...state, filter: {...state.filter, ...action.value}}

    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetching data
  const {status, data} = useFetch('./data.json');
  //responsive page
  const changeSize = () => dispatch({type: 'SIZE', value: window.innerWidth});

  const checkSize = () =>{
    if(state.size >= 1024){
      dispatch({type: 'DEVICETYPE', value: 'desktop'});
        } 
    else if(state.size >= 768){
      dispatch({type: 'DEVICETYPE', value: 'tablet'});
    }
    else{
      dispatch({type: 'DEVICETYPE', value: 'mobile'});
    }
  };
  useEffect(()=>{
    window.addEventListener('resize', changeSize);
    checkSize();
    return ()=> window.removeEventListener('resize', changeSize);
  }, [window.innerWidth]);
  return (
    <Context.Provider value={{state, dispatch, status, data}}>
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
