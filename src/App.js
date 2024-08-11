import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SignUpPage from './Auth/SignUpPage';
import FirstPage from './pages/FirstPage';
import MainPage from './pages/MainPage';
import LoginPage from './Auth/LoginPage';
import BotPage from './pages/BotPage';
import RequireAuth from './Auth/RequireAuth'
import BotSelectionPage from './pages/BotSelectionPage';
import HistoryDetailPage from './pages/HistoryDetailPage';
import PricingPage from './pages/PricingPage';


function App() {
  return (
    <Routes>
        <Route path="/"  element={<FirstPage/>} />
          <Route path='/sign-up' element={<SignUpPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        {/* <Route element={<RequireAuth/>}> */}
          <Route path='/main' element={<MainPage/>}/>
          <Route path='/pricing' element={<PricingPage/>}/>
          <Route path='/select-bot' element={<BotSelectionPage/>}/>
          <Route path='/bot' element={<BotPage/>}/>
          <Route path='/history-detail' element={<HistoryDetailPage/>}/>
        {/* </Route> */}
    </Routes>
  );
}

export default App;
