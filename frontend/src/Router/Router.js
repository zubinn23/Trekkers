import React from 'react'

import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home';
import Treks from '../pages/Treks';
import TrekDetails from '../pages/TrekDetails';
import SearchResultList from '../pages/SearchResultList';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ThankYou from '../pages/ThankYou';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import About from '../pages/About';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/treks' element={<Treks/>} />
        <Route path='/treks/:id' element={<TrekDetails/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
        <Route path='/gallery' element={<MasonryImagesGallery/>} />
        <Route path='/treks/search' element={<SearchResultList/>} />
        <Route path='/About' element={<About/>} />
    </Routes>
  )
}

export default Router