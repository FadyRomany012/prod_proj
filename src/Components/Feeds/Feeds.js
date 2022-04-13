import React from 'react';
import Feed from '../Feed/Feed';

class Feeds extends React.Component{
    state={
        feeds:null
    }

    async componentDidMount(){
        const resp = await fetch('https://fakestoreapi.com/products?limit=10')
        const feeds = await resp.json()
        this.setState({feeds});
        console.countReset('resp');
console.log(resp);
    }

    render(){

        const {feeds} = this.state
        return(

            <div className='Container_prod' style={{width:'100%',display:'flex',flexDirection:'column',padding:'0 10px',flexDirection:'row-reverse' }}>
                {
                    feeds &&
                    feeds.map(({...f}) =><Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }
}

export default Feeds;
