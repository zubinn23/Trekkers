import React, { useRef } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from './../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef('');
    const navigate = useNavigate();

    const searchHandler = async () => {
        const location = locationRef.current.value;

       

        if (location==='' ) {
                    return alert('This field is required!!')
                }

        const res = await fetch(`${BASE_URL}/treks/search/getTrekBySearch?district=${location}`);

        if (!res.ok) {
            alert('Something went wrong');
            return;
        }

        const result = await res.json();

        navigate(`/treks/search?district=${location}`, { state: result.data });
    };

    return (
        <Col lg='12'>
            <div className="search__bar">
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span>
                            <i className="ri-map-pin-line"></i>
                        </span>
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Find Your Destination" ref={locationRef} />
                        </div>
                    </FormGroup>

                    
                    <span className="search__icon" type="submit" onClick={searchHandler}>
                        <i className="ri-search-2-line"></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;
