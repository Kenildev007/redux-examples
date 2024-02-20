import React from 'react'
import Users from './components/Users'
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <nav className='py-5 flex m-5 gap-10 justify-center'>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/products">Products</Link>
      </nav>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App;