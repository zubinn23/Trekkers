import React from 'react';
import '../styles/about.css'
import { Container,Row,Col } from 'reactstrap';  
import trek from '../assets/images/trekking.png'
import { Link } from 'react-router-dom'
const About = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
          <h1> Hello From <span
             className="highlight">Trekkers</span></h1>
             <p>
             Adventure with Trekkers into the wildness of 
             nature will ensure the most thrilling travel experience of your life. 
             With varied exciting packages and various amazing tourist spots, 
             we will make the travelers stay astounded. Traveling in the valley of world’s
              most charming spots will make your tour beyond your expectations.
             </p>
             <p>

             We bring you best treks where one can explore the scenic beauty of nature 
             & take away a piece of immortality. Our dedicated proficient trek experts 
             have an experience of more than 10 years. Our success is to fulfill the 
             expectations & enabling to give an unique & holistic experience. 
             You can even talk to them in order to get perfect guidance and more tips about 
             adventure treks.
             </p>
             </div>
             </Col>
             <Col lg="6">
              <div className="hero__img-box">
              <img src={trek} alt="" />
              </div>  
            </Col>
         
        </Row>
     </Container>
    </section> 
    <section>
    <Container className="container-team">
        <h4>Meet Our Team</h4>
        <h3> The Team</h3>
      
        <Row>
          <Col lg="4">
            <h2>Bhupendra Thapa</h2>
            <h3>Founder</h3>
           
            <p>Founded Trekkers with his buddies back in 2019, Currently a full 
               fledged traveller.</p>

                <div className="social__links d-flex align-items-center gap-4">
                  

                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-twitter-line"></i></Link>
                </span>

              </div>
               

          </Col>
          <Col lg="4">
            <h2>Nikesh Shrestha</h2>
           
            <h3>Manager</h3>
            
            <p>Takes care of all the public relations,
               travel consultations and facilitations
                regarding travel.</p>
                <div className="social__links d-flex align-items-center gap-4">
                  

                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-twitter-line"></i></Link>
                </span>

              </div>

          </Col>
          <Col lg="4">
            <h2>Subin Maharjan</h2>
         
            <h3>Photographer</h3>
            
            <p>
            One of the youngest member of Trekkers, one of the best 
            landscape photographers of Nepal.

            </p>
            <div className="social__links d-flex align-items-center gap-4">
                  

                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>

                <span>
                  <Link to='#'><i class="ri-twitter-line"></i></Link>
                </span>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
   
   </>  
};

export default About;
