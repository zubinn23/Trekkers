import React from 'react'
import { ServiceCard } from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: " Measure the weather of your trek destination.",
    },

    {
        imgUrl: guideImg,
        title: "Best Trek Guide",
        desc: " We provide you with the best guide possible.",
    },

    {
        imgUrl: customImg,
        title: "Customization",
        desc: "Here you can customize your treks.",
    },
]

const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index) => (
    <Col lg="3" md='6'  sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
        </Col>
  ))}
  </>
}

export default ServiceList