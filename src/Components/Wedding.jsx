import React from 'react';
import logo from '../Assets/wedding1.jpg';
import '../Stylings/Wedding.css';

class Wedding extends React.Component{
    render(){
        return (
            <div className='body'>
                <h2>Wedding</h2>
                <h6>"Your vision. Our innovation: Event solutions"</h6>
                <img style={{height:400,width:700,marginLeft:300,marginBottom:100}} src = {logo}></img>
            </div>
            
        )
    }
}

export default Wedding