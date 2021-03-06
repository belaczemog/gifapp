import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../Helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category])

    const {data:images, loading} = useFetchGifs(category);
    
  return (
      <>
      <h3 className='animate__animated animate__bounce'>{category}</h3>

      {loading && 'cargando...' }
    <div className='card-grid'>

            {
                images.map( (img) => {
                    return <GifGridItem 
                    key={img.id}
                    {...img} />
                })
            }
    
    </div>
    </>
  )
}
