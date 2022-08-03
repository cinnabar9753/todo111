import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DoneList from './component/DoneList';
import Todo from './component/Todo';
import Layout from './layout/Layout';
import About from './pages/About';
import WrongPage from './pages/WrongPage';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout></Layout>}>
                <Route path='/' element={<Todo></Todo>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/done' element={<DoneList></DoneList>}></Route>
            </Route>
            <Route path='/*' element={<WrongPage></WrongPage>}></Route>
        </Routes>
        </BrowserRouter>
    );
}

export default App;
