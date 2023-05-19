import  Carousel  from 'react-bootstrap/Carousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({end} ) => {
  return (
        <Carousel fade interval={1000}>
         {
           end.map((item,index)=>(
                <Carousel.Item key={item.image} id="banner"  keyboard={true}  >
                     <img 
                     id="bannerImage"
                     className="d-block w-100"
                     src={item.image}
                     alt={index}
                    />
                      <Carousel.Caption>
                        <h3>{item.name} </h3>
                        <p>{item.description} </p>
                        <p>{item.source}</p>
                        <u>Read more</u>
                      </Carousel.Caption>
                </Carousel.Item>
            ))
         } 
        </Carousel>
       );
 }

export default Banner