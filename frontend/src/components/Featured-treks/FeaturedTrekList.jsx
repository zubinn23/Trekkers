

import React from 'react'
import TrekCard from '../../shared/TrekCard'
import { Col } from 'reactstrap'

import useFetch from './../../hooks/useFetch'
import { BASE_URL } from './../../utils/config'


const FeaturedTrekList = () => {

  const { data: featuredTreks, loading, error} = useFetch(`${BASE_URL}/treks/search/getFeaturedTreks` )

   
  return (
  <>

    {
      loading && <h4> Loading......... </h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {
      !loading && !error && featuredTreks?.map(trek => (
        <Col lg='3' className='mb-4' key={trek._id}>
            <TrekCard trek={trek} />
        </Col>
    ))}
  </>
  )
}

export default FeaturedTrekList