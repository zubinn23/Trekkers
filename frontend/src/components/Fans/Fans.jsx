
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.png'
import ava03 from '../../assets/images/ava-3.jpg'

const Fans = () => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:922,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },

            {
                breakpoint:576,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },

        ]
    }
  return (
  <Slider {...settings}>
    <div className="Reviews py-4 px-3">
        <p>
        Embarking on the Everest Three Pass Trek with TREKKERS was an exceptional experience. 
        The expertise of Mingmar Tamang, our guide, added a unique dimension to the journey.
        From captivating landscapes to the camaraderie within the group, every aspect was 
        unforgettable.
        TREKERS's meticulous planning and Mingmar's guidance made this adventure truly
        outstanding. Highly recommended.
        Warm regards, John
        </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>John Adam</h6>
                    <p>Customer</p>
                </div>
            </div>
    </div>

    <div className="Reviews py-4 px-3">
        <p>
        It was an amazing experience trekking the EBC route with my friend (whose lifelong dream
        was to trek EBC) and our wonderful guide Abita. 
        We connected well with our female guide and had many laughs together.It was such a pleasure
        to have a female guide. We also felt more comfortable sharing certain issues/details with 
        her and asking for advice. We received great care from her- she organized our accommodations,
        meals, and itinerary, and even took good care of us when we became ill.
        Our goal of reaching EBC was reached with good weather and beautiful views of the Himalayas.
        </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Kim Jenny</h6>
                    <p>Customer</p>
                </div>
            </div>
    </div>

    <div className="Reviews py-4 px-3">
        <p>
        I went on a solo trek for 17 days with TREKKERS. I was interested in a 
        trek not too busy/touristy like ABC or EBC can be, and was recommended by Himal,
        the owners, to go for the Langtang Valley, and Gosaikunda.
        I had the most amazing time and memories! You get to see so much nature, landscape,
        animals, mountains, and summits, meet actual locals, visit cheese farms, try local food…
        and have almost all weather possible from hot to cold to rain and snow on the way.
        My guide, Milan, was more than I could ask for! He is very caring, and reliable, takes care
        of everything, and makes sure your trek is smooth and enjoyable. It was a true and fun 
        adventure we had together! Thank you!
        </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Mark Ben</h6>
                    <p>Customer</p>
                </div>
            </div>
    </div>

    <div className="Reviews py-4 px-3">
        <p>
        It was an amazing experience trekking the EBC route with my friend (whose lifelong dream
        was to trek EBC) and our wonderful guide Abita. 
        We connected well with our female guide and had many laughs together.It was such a pleasure
        to have a female guide. We also felt more comfortable sharing certain issues/details with 
        her and asking for advice. We received great care from her- she organized our accommodations,
        meals, and itinerary, and even took good care of us when we became ill.
        Our goal of reaching EBC was reached with good weather and beautiful views of the Himalayas.
        </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Kim Jenny</h6>
                    <p>Customer</p>
                </div>
            </div>
    </div>

  </Slider>
  )
}

export default Fans