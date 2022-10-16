import React from "react";
import '../Stylings/Home.css'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


export default function Home()
{
    return(
        <div className="body">
            <h1 className="con">"Uthkala"</h1>
            <h6>( Event Management )</h6>
            <p>'We add all the things which can make your Event Successful'</p>
            <MDBCarousel showControls fade>
            
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={1}
                    src='https://wallpapercave.com/wp/wp7488228.jpg'
                    alt='img1'
                />
               
                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='https://technoscriptz.com/wp-content/uploads/2022/03/Corporate-Events.jpg'
                    alt='img2'
                />

                <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={3}
                    src='https://wallpapercave.com/wp/wp7488391.jpg'
                    alt='img3'
                />
            </MDBCarousel>
            <Home1></Home1>
            <h6>"The most Successfull event is the one, that achieves your goals and exceeds your expectations"</h6>
        </div>
    )
}

const Home1=()=>{
    return(
        <table >
            <thead>
                <h5>EVENTS</h5>
                  <Home2></Home2>  
                
            </thead>
        </table>
    )
}

const Home2=()=>{
    return(
        < >
        <ul type='none'>
        <li><Link style={{textDecoration: 'none',color:'aliceblue'}} to="/Birthday">Birthday Event</Link></li>
        <li><Link style={{textDecoration: 'none',color:'aliceblue'}} to="/Wedding">Wedding Event</Link></li>
        <li><Link style={{textDecoration: 'none',color:'aliceblue'}} to="/Corporate">Corporate Event</Link></li>
        <li><Link style={{textDecoration: 'none',color:'aliceblue'}} to="/Reception">Reception Event</Link></li>
        <li><Link style={{textDecoration: 'none',color:'aliceblue'}} to="/Music">Music Event</Link></li>
        </ul>
        </>
    )
}

