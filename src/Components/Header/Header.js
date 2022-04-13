import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/')}>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);