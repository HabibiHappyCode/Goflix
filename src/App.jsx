import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './navigations/Navigation'
import Home from './Routes/home/Home'
import Show from './Routes/shows/Show'
import Movies from './Routes/movies/Movies'
import NewsPopular from './Routes/news_popular/NewsPopular'
import AuthLandingPage from './Routes/authsPages/AuthPages'
import SignUp from './Routes/authsForm/SignUp'
import SignIn from './Routes/authsForm/SignIn'
import useAuthStore from './store/authContext'
import SideBar from './Routes/dashboard/SideBar'
import Profile from './Routes/dashboard/dashpages/Profile'
import Settings from './Routes/dashboard/dashpages/Settings'
import Notification from './Routes/dashboard/dashpages/Notification'
import { TogggleContextProvider } from './store/toggleContext'

function App() {

  const { isLoggedIn } = useAuthStore();

  const { pathname } = useLocation();



  return (
    <div className='relative' >
      {/* navigations */}
      {(!isLoggedIn && !pathname.includes('/dashboard')) && <Routes>
        <Route path='/' element={<AuthLandingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>}

      {(isLoggedIn && !pathname.includes('/dashboard')) && <Navigation />}

      {(isLoggedIn && !pathname.includes('/dashboard')) && <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<Show />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/news_popular' element={<NewsPopular />} />

      </Routes>}

      <TogggleContextProvider>
        {(isLoggedIn && pathname.includes('/dashboard')) && <div className='flex w-full flex-start'>
          <SideBar />
          <Routes>
            <Route path='/dashboard/profile' element={<Profile />} />
            <Route path='/dashboard/settings' element={<Settings />} />
            <Route path='/dashboard/notification' element={<Notification />} />
          </Routes>
        </div>}
      </TogggleContextProvider>


    </div>
  )
}

export default App
