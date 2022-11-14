import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeTemplate from './HomeTemplate/HomeTemplate';
import Home from './ShoesStore/ShoesStore.jsx';
import Shop from './ShoesStore/Shop.jsx';
import './style.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <BrowserRouter>
      <Routes>
      <Route path='' element={<HomeTemplate />}> 
      <Route index element={<Home />} ></Route>
      <Route path='home' element={<Home />} ></Route>
      <Route path='shop' element={<Shop />} ></Route>
      <Route path='*' element={<Navigate to="" />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
 </>
);


