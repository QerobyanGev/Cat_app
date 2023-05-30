import { useEffect } from 'react'
import getAllCategories from './utils/getAllCategories'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './layouts/sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Category, Home } from './pages'
import getImages from './utils/getImages'


const App = () => {

  const { categories, images } = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllCategories().then(res => dispatch({
      type: 'GETALLCATEGORIES',
      payload: res
    })).then(result => localStorage.setItem('categories', JSON.stringify(result.payload)))
    if (!images.data.length) {
      getImages({}).then(res => dispatch({
        type: 'GETIMAGES',
        payload: res
      }))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('images', JSON.stringify(categories))
    localStorage.setItem('images', JSON.stringify(images))
  }, [categories, images])

  return (
    <div className='app'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/categories/:id' element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App