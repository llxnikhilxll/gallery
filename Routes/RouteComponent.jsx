import { Route, Routes } from 'react-router-dom'
import Create from '../src/components/Create'
import Home from '../src/components/Home'
import Show from '../src/components/Show'
import Library from '../src/components/Library'
import Details from '../src/components/Details'


const RouteComponent = () => {
  return (
    <div>
          <Routes>
              <Route path='/create' element={<Create />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Show' element={<Show />} />
              <Route path='/Library' element={<Library />}>
                  <Route path='/Library/:id' element={<Details />} />
              </Route>
          </Routes>
    </div>
  )
}

export default RouteComponent