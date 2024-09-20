import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import BasePage from './pages/BasePage'
import Songs from './pages/Songs'
import Page404 from './pages/Page404'
import Music from './pages/Music'
import Participations from './pages/Participations'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute';


function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <BasePage /> }>
                    <Route index element={<Register />}/>
                    <Route path="/login" element={<Login />}/>

                    <Route element={<PrivateRoute roles={['user', 'admin']} />}>
                        <Route path='/home' element={ <Home /> }/>
                        <Route path="/about" element={ <About /> }/>
                        <Route path="/songs" element={ <Songs /> }/>
                        <Route path='/music' element={ <Music /> }/>
                        <Route path='/feat' element={ <Participations /> }/>
                    </Route>                                       


                    <Route path="*" element={ <Page404 /> }></Route>    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
