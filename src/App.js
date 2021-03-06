import React, {useState} from 'react';
import './scss/App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Post from './components/Blog/Post';
import Navbar from './components/Navbar/Navbar';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';

function App() {
    const [showMenu, setShowMenu] = useState(false);
    const revealMenu = () => setShowMenu(true);
    const hideMenu = () => setShowMenu(false);
  return (
    <div>
        <Navbar revealMenu={revealMenu} />
        {showMenu && <Menu hideMenu={hideMenu} />}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/post/:title' element={<Post />} />
      </Routes>
        <div style={{ marginTop: '20px', width: '100%' }}>
            <Footer />
        </div>
    </div>
  );
}

export default App;
