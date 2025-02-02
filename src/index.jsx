import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import HomeView from './pages/Home/HomeView'; 
import ArtistView from './pages/Artist/ArtistView';
import MovieView from './pages/Movie/MovieView';
import SearchView from './pages/Search/SearchView';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route path='/' element={<HomeView />} />
          <Route path='artist' element={<ArtistView />} />
          <Route path='movie/:id' element={<MovieView />} />
          <Route path='search' element={<SearchView />} />
        </Route>
      </Routes> 
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
