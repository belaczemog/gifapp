import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';


const GifExpertApp = () =>{

    
    const [categories, setCategories] = useState([])

    // const handleAdd = () =>{
    //     setCategories([...categories,'HunterxHunter']);
    // }
    
    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>

       {/* <button onClick={handleAdd}>Agregar</button> */}

        <ol>
            {
                categories.map(category =>(

                    <GifGrid
                    key={category} 
                    category={category}
                    />
                    
                ))
            }
        </ol>
       
    </>
    )
}

export default GifExpertApp;

