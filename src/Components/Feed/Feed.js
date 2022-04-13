import React from 'react';
import './feed.css';
const Feed = ({title,image,price}) =>{
    return(
        <div className='div-feed'>
                            <img src={image} alt=''/>

            <div style={{padding:'10px 5px',fontWeight:'bold'}}>{title}</div>
            <div className='price_prod' style={{padding:'10px 5px',fontWeight:'bold'}}>{price}</div>

            <div style={{width:'100%',height:'auto'}}>
            </div>
        </div>
    )
}

export default Feed;