
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import AboutUs from './pages/aboutUs';
import PostList from './pages/postList';


//layouts
import DefaultLayout from './layouts/DefaultLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/AboutUs" Component={AboutUs} />
          <Route path="/PostList" Component={PostList} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;