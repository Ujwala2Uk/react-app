import React from 'react';
import logo from '../Assets/birth1.jpg';
import '../Stylings/Wedding.css';

function Birthday()
{
    return(
        <div className='body'>
        <h2>Birthday</h2>
        <BirthdaySimple1></BirthdaySimple1>
        <BirthdaySimple></BirthdaySimple>
        </div>

    ) 
}

function BirthdaySimple()
{
    return <img style={{height:400,width:700,marginLeft:300,marginBottom:100}} src = {logo}></img>
}

const BirthdaySimple1=() => 
{
    return <h6>"Some people look for a beautiful place. Others make a place beautiful.” </h6>
}

export default Birthday