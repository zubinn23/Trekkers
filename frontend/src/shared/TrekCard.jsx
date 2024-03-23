

import React from 'react'
import { Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';

import calculateAvgRating from '../utils/avgRating';


import './trek-card.css';
const TrekCard = ({trek}) => {

    const {_id,title,photo,district,price,featured,reviews} = trek;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

    return ( <div className="trek__card">
    <Card>
      <div className="trek__img">
        <img src={photo} alt=" " />
        {featured && <span>Featured</span>}
      </div>

      <CardBody>
        <div className="card__top d-flex align-items-center
        justify-content-between">
          <span className="trek__location d-flex align-items-center gap-1">
          <i class="ri-map-pin-line"></i> {district}
          </span>

          

          <span className="trek__rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i> {avgRating === 0 ? null : 
          avgRating} 
          {totalRating === 0 ? (
            'Not rated' 
            ):( 
            <span>({reviews.length})</span> 
          )}
          </span>
        </div>

          <h5 className="trek__title">
            <Link to={`/treks/${_id}`}>{title}
            </Link>
            </h5>

          <div className="card__bottom d-flex align-items-center 
          justify-content-between mt-3">
                <h5>${price} <span> /per person </span></h5>

                <button className="btn booking__btn">
                  <Link to={`/treks/${_id}`}>Book Now</Link>
                </button>
          </div>
      
    </CardBody>
    </Card>

    
    
    </div>
    )
}

export default TrekCard