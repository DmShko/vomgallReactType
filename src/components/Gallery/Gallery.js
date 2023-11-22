import { useSelector } from 'react-redux'
import ga from './Gallery.module.scss'
import '../../vomgallStore/gallerySlice'

const Gallery = () => {

  const selectorUserArt = useSelector(state => state.gallery);

  console.log(selectorUserArt);

  return (
    <div className={ga.comtainer}>
        

        <div>
            {/* <button type='button'>{selectorUserArt[0].arts.lirics.name}</button>
            <button type='button'>{selectorUserArt[0].music.name}</button>
            <button type='button'>{selectorUserArt[0].drawing.name}</button> */}
        </div>
        
        <div>
          <div>
              <button type='button'></button>
              <button type='button'></button>
              <button type='button'></button>
          </div>
        </div>

    </div>
  )
}

export default Gallery