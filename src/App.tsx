import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './screens';

/**
 * main component for the app
 */
const App : React.FC = () => {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
