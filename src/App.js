import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Manage } from './components/Manage';
import { Nav } from './components/Nav';

function App() {
   return   <>
                <h1>Hello world!</h1>
                <Nav />
                <Routes>
                    <Route path="manage" element={<Manage />} />
                    <Route path="*" element={<Home />}/>
                </Routes>
            </>
    
}

export default App