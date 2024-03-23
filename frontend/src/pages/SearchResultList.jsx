import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col, Button } from 'reactstrap';
import TrekCard from '../shared/TrekCard';

const SearchResultList = () => {
    const location = useLocation();
    const [data] = useState(location.state);

    // Assuming the district name is available in the first trek
    const districtName = data.length > 0 ? data[0].district : '';

    return (
        <>
            <CommonSection title={districtName} />
            <section>
                <Container>
                    <Row>
                        {data.length === 0 ? (
                            <div className='text-center'>
                                <h4>Sorry! No such Trek is found</h4>
                                <Button tag={Link} to='/treks' color='primary'>
                                    Go to treks
                                </Button>
                            </div>
                        ) : (
                            data?.map(trek => (
                                <Col lg='3' className='mb-4' key={trek._id}>
                                    <TrekCard trek={trek} />
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SearchResultList;
