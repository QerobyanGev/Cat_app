import { useDispatch, useSelector } from 'react-redux'
import { SidebarButton, SidebarWrapper, MinimizedSideBar } from './styled'
import getImages from '../../utils/getImages'
import { useNavigate } from 'react-router'

const Sidebar = () => {

  const { images, categories } = useSelector(store => store)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const chosenCategoryID = JSON.parse(localStorage.getItem('chosenCategory'))

  const handleCategoryClick = category => {
    localStorage.setItem('chosenCategory', category.id)
    getImages({ pageNum: images.page, categoryId: category.id }).then(res => dispatch({
      type: 'CHANGECATEGORY',
      payload: res
    }))
    navigate(`/categories/${category.id}`)
  }

  const handleCategoryReset = () => {
    localStorage.removeItem('chosenCategory')
    getImages({}).then(res => dispatch({
      type: 'CHANGECATEGORY',
      payload: res
    }))
    navigate('/')
  }

  return (
    <>
      <SidebarWrapper>
        {categories.map((category, index) => (
          <SidebarButton SidebarButton key={index}
            isSelected={(chosenCategoryID === category.id) ? 1 : 0}
            onClick={() => handleCategoryClick(category)}>
            {category.name.toUpperCase()}
          </SidebarButton>
        ))}
        <br />
        <SidebarButton onClick={handleCategoryReset}>RESET</SidebarButton>
      </SidebarWrapper >
      <MinimizedSideBar>...</MinimizedSideBar>
    </>
  )
}

export default Sidebar