import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Layout from './components/common/Layout';
import Dashboard from "./pages/dashboard/Dashboard";
import Groups from './pages/Groups';
import Login from './components/auth/Login';
import FindPartners from './pages/FindPartners'
import Message from './pages/Message'
import Register from './components/auth/Register'
import ProtectedRoute from './components/common/ProtectedRoute'
import ConversationPage from './pages/ConversationPage'
function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route element={<Layout/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/groups' element={<Groups/>}/>
      <Route path='/messages' element={<Message/>}/>
      <Route path='/find-partners' element={<FindPartners/>}/>
      <Route path='/coversations' element={<ConversationPage/>}/>
      <Route path='/chat/:userId'  element={<ConversationPage/>}/>
      </Route>
      </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
