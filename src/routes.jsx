import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import BasePage from './pages/BasePage'
import Songs from './pages/Songs'
import Page404 from './pages/Page404'
import Music from './pages/Music'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <BasePage /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/about" element={ <About /> }></Route>
                    <Route path="/songs" element={ <Songs /> }></Route>
                    <Route path='/music' element={ <Music /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
