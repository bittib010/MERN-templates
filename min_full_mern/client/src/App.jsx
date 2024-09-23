import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App(){
  return (
    <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
      </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}