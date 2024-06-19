import React, { Suspense } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import { lazy } from 'react'
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Group=lazy(()=>import("./pages/Group"))
const Chat=lazy(()=>import("./pages/Chat"))
const NotFound=lazy(()=>import("./pages/NotFound"))

let user =true;


const App = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/group' element={<Group />}></Route>
        <Route path='/chat/:chatId' element={<Chat />}></Route>

        </Route>
        
        <Route path='/login' element={<ProtectRoute user={!user} redirect='/'>
          <Login />
        </ProtectRoute>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      </Suspense>
      
    </Router>
  )
}

export default App