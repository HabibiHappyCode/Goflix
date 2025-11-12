import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './navigations/Navigation'
import Home from './Routes/home/Home'
import Show from './Routes/shows/Show'
import Movies from './Routes/movies/Movies'
import NewsPopular from './Routes/news_popular/NewsPopular'
import AuthLandingPage from './Routes/authsPages/AuthPages'
import SignUp from './Routes/authsForm/SignUp'
import SignIn from './Routes/authsForm/SignIn'
import useAuthStore from './store/authContext'

function App() {

  const { isLoggedIn } = useAuthStore()

  return (
    <div className='relative' >
      {/* navigations */}
      {isLoggedIn && <Navigation />}

      {/* routes */}
      {
        isLoggedIn ? (<Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows' element={<Show />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/news_popular' element={<NewsPopular />} />
        </Routes>) : (
          <Routes>
            <Route path='/' element={<AuthLandingPage />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />
          </Routes>
        )
      }


    </div>
  )
}

export default App
