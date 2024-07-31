import { ChakraProvider } from '@chakra-ui/react'
import light from './theme/Light'
import Home from './pages/Home';
import './fonts.css'
import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
    <>
      <ChakraProvider theme={light}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App
