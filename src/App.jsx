import { useEffect, useState } from 'react'
import {Outlet} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData, setImageURL } from './store/movieSlice'

function App() {
  const dispatch = useDispatch();


  const fetchTrendingData = async () => {
    try {
      const res = await axios.get('/trending/all/week');
      dispatch(setBannerData(res.data.results));
    } catch (error) { 
      console.log(error);
    }
  }

  const fetchConfiguration =  async () => {
    try {
      const confRes = await axios.get('/configuration');
      dispatch(setImageURL(confRes.data.images.secure_base_url+ 'original'))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <>
      <Header />
      <div className='min-h-[90vh]'>
            <Outlet/>
        </div>
      <Footer />
      <MobileNavigation/>
    </>
  )
}

export default App
