import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import SearchBox from './components/Search/Search';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />        {/* header is done */}
      <Navigation />    {/* Social Icons and part navigation done */}
      <Content />       {/* Contant done */}
      <SearchBox />
    </div>
  );
}

export default App; 
