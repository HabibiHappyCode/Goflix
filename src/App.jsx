import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './navigations/Navigation'
import Home from './Routes/home/Home'
import Show from './Routes/shows/Show'
import Movies from './Routes/movies/Movies'
import NewsPopular from './Routes/news_popular/NewsPopular'

function App() {

  return (
    <div >
      <Navigation />

      {/* routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shows' element={<Show />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/news_popular' element={<NewsPopular />} />
      </Routes>
    </div>
  )
}

export default App
