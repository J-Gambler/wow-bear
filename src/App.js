import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Call from './pages/Call';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Nftlist from './pages/Nftlist';
import Lookup from './pages/Lookup';
import Coins from './pages/Coins';
import LeaderBoards from './pages/LeaderBoards';
import customTheme from './config/theme';
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }
  
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <BrowserRouter>
          <Sidebar handleDrawerOpen={handleDrawer} drawerOpen={open} />
          <Header handleDrawerOpen={handleDrawer} drawerOpen={open} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/call" element={<Call />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nftlist" element={<Nftlist />} />
            <Route path="/lookup" element={<Lookup />} />
            <Route path="/coins" element={<Coins />} />
            <Route path="/leaderboards" element={<LeaderBoards />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
