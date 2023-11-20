import './App.css';
import Search from './componets/search/Search';
import Navbar from './componets/navbar/Navbar'
import Home from './componets/home/Home';
import Footer from './componets/footer/Footer';
import { Route, Routes } from 'react-router-dom'
import StorePage from './componets/storepage/StorePage';
/*import MusicPage from './musicpage/MusicPage';*/
import Videos from './componets/videos/Videos';
import AppPlay from './componets/player/AppPlay';
import BookData from './componets/data/data.json';
import tachyons from 'tachyons'


function App() {
  return (
      <>
        <div className="container">
              <div className='nav'>
                <Navbar />
              </div>
              <div className='search pl7'>
                <Search placeholder='Enter song or album' data={BookData}/>
              </div>
            

            <div className='home'>
                <Routes> 
                    <Route path='/' element={<Home/>} /> 
                    <Route path='store' element={<StorePage/>} />
                    <Route path='music' element={<ybg/>}  />
                    <Route path='video' element={<Videos/>} />
                    <Route path='player' element={<AppPlay/>} />
                </Routes> 
              </div> 


            <div className='footer'>
                <Footer />
              </div> 
          </div>   
        </>  
  );
}

export default App;
