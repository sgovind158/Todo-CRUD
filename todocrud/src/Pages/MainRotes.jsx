import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../Componetes/ReqAuth'
import Sidebar from '../Componetes/Sidebar'
import HomePage from './HomePage'
import Login from './Login'
import SignUp from './SignUp'

const MainRotes = () => {
  return (
   <Routes>

   <Route path='/'  element= {
   <ReqAuth>
    <Stack direction ="row">
    <Sidebar/>
   <HomePage/>

    </Stack>
   

   </ReqAuth>
   }/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<SignUp/>}/>

   </Routes>
  )
}

export default MainRotes
