import React from 'react'
import '../styles/home.css';
import { Container,Row,Col } from 'reactstrap';  
import heroImg from '../assets/images/img01.png'
import heroImg02 from '../assets/images/img02.jpg'
import heroVideo  from '../assets/images/flag-video.mp4'
import flag from './../assets/images/flag.jpg'
import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTrekList from '../components/Featured-treks/FeaturedTrekList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Fans from "../components/Fans/Fans";

export const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center ">
              <Subtitle subtitle={'Things to Know Before Trekking '}/>
              <img src={flag} alt="" />
            </div>
            <h1> TREKKING IS NOT ESCAPISM, IT'S <span
             className="highlight">REALISM</span></h1>
             <p>
             Trekking is the outdoor pursuit of walking for an extended period of time. 
             It's a type of traveling done with the intention of discovering and enjoying 
             the scenery. 
             </p>
             <p>

             Since Nepal is home to the Himalayas, trekking is quite popular here
             with both domestic and foreign tourists. The majority of well-known 
             trekking destinations provide breathtaking views of the Himalaya. 
             Most people choose to trek in the mountainous areas. 
             Here, you can view the majority of the trekking region and further information
             on trekking in Nepal for both domestic and international visitors.  
             </p>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>

        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">Our Services</h5>
          <h2 className="services__title"  >We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__trek-title ">Our Featured Treks</h2>
          </Col>
          <FeaturedTrekList/>
        </Row>
      </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                 Our Customers Trek Gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Honest Reviews'} />
              <h2 className='Fans__title'> What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Fans/>
            </Col>
          </Row>
        </Container>
      </section>
    


  </>
}

export default Home
