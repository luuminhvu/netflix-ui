import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import TVShows from './pages/TvShows';
import Movies from './pages/Movies';
import UserLiked from './pages/UserLiked';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/player" element={<Player />} />
                <Route path="/tv" element={<TVShows />} />
                <Route path="/mylist" element={<UserLiked />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/" element={<Netflix />} />
            </Routes>
        </BrowserRouter>
    );
}
