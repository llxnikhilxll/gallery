import { Link, NavLink,useNavigate } from 'react-router-dom'


const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav className='w-full flex justify-center p-2 gap-5 text-xl font-medium'>
      <NavLink className={(e)=>e.isActive ? 'text-red-300':''} to='/Home'>Home</NavLink>
      <NavLink className={(e)=>e.isActive ? 'text-red-300':''} to='/create'>Create</NavLink>
      <NavLink className={(e) => e.isActive ? 'text-red-300' : ''} to='/Show'>Show</NavLink>
      <NavLink className={(e) => e.isActive ? 'text-red-300' : ''} to='/Library'>Library</NavLink>
    </nav>
  )
}

export default Nav