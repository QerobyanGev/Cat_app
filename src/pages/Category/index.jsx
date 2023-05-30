import { useDispatch, useSelector } from 'react-redux'
import { CardWrapper, ContentWrapper, LoadMoreBTN } from '../styled'
import getImages from '../../utils/getImages'

const Category = () => {
  const { images } = useSelector(store => store)
  const dispatch = useDispatch()

  const handleLoadMoreClick = () => {
    getImages({ pageNum: images.page }).then(res => dispatch({
      type: 'GETIMAGES',
      payload: res
    }))
  }

  return (
    <ContentWrapper>
      {images.data.map((image, index) => (
        <CardWrapper
          url={image.url}
          key={index}
        />
      ))}
      <LoadMoreBTN onClick={handleLoadMoreClick}>Load more</LoadMoreBTN>

    </ContentWrapper>
  )
}

export default Category