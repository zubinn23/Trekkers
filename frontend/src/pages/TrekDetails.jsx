import React, { useContext, useEffect, useRef, useState } from 'react';
import '../styles/trekdetails.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import { authContext } from './../components/context/authContext';

const TrekDetails = () => {
    const { id } = useParams();
    const reviewmsgRef = useRef('');
    const [trekRating, setTrekRating] = useState(null);
    const { user } = useContext(authContext);

    // Fetch data from database
    const { data: trek, loading, error } = useFetch(`${BASE_URL}/treks/${id}`);

    const { title, photo, desc, distance, Difficulty, district, maxGroupSize, price, reviews, itinerary } = trek;

    const { totalRating, avgRating } = calculateAvgRating(reviews);

    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    const submitHandler = async (e) => {
        e.preventDefault();
        const reviewText = reviewmsgRef.current.value;

        try {
            if (!user || user === undefined || user === null) {
                alert('Please Sign In');
            }
            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: trekRating,
            };

            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj),
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            alert(result.message);
        } catch (err) {
            alert(err.message);
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [trek]);

    // Sort reviews based on rating
    const sortedReviews = reviews?.slice().sort((a, b) => b.rating - a.rating);

    // Place unrated reviews at the end
    const sortedAndUnratedReviews = sortedReviews?.concat(reviews?.filter((review) => review.rating === null));

    return (
        <>
            <section>
                <Container>
                    {loading && <h4 className="text-center pt-5">loading......... </h4>}
                    {error && <h4 className="text-center pt-5">{error} </h4>}
                    {!loading && !error && (
                        <Row>
                            <Col lg="8">
                                <div className="trek__content">
                                    <img src={photo} alt="" />
                                    <div className="trek__info">
                                        <h2>{title}</h2>

                                        <div className="d-flex align-items-center gap-5">
                                            <span className="trek__rating d-flex align-items-center gap-1">
                                                <i class="ri-star-fill" style={{ color: 'orange' }}></i>
                                                {avgRating === 0 ? null : avgRating}
                                                {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                                            </span>
                                            <span>
                                                <i class="ri-map-pin-fill"></i> {district}
                                            </span>
                                        </div>
                                        <div className="trek__extra-details">
                                            <span>
                                                <i class="ri-money-dollar-circle-fill"></i> ${price}/per person
                                                <i class="ri-pin-distance-line"></i> {distance} k/m
                                                <i class="ri-group-fill"></i> {maxGroupSize} people
                                                <i class="ri-ghost-fill"></i> {Difficulty} Difficulty
                                            </span>
                                        </div>
                                        <h5>Description</h5>
                                        <p>{desc}</p>
                                   

                                 <h5>Itinerary</h5>
                                {itinerary && itinerary.length > 0 ? (
                                    <ul className="itinerary-list">
                                        {itinerary.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>No itinerary available</p>
                                )}
                                 </div>

                                    <div className="trek__reviews mt-4">
                                        <Row>
                                            <Col>
                                                <h4>Reviews ({reviews?.length} reviews)</h4>
                                            </Col>
                                            <Col className="text-right">
                                            </Col>
                                        </Row>
                                        <Form onSubmit={submitHandler}>
                                            <div className="rating d-flex align-items-center gap-3 mb-4 ">
                                                <span onClick={() => setTrekRating(1)}>
                                                    1 <i class="ri-star-s-fill"></i>
                                                </span>
                                                <span onClick={() => setTrekRating(2)}>
                                                    2 <i class="ri-star-s-fill"></i>
                                                </span>
                                                <span onClick={() => setTrekRating(3)}>
                                                    3 <i class="ri-star-s-fill"></i>
                                                </span>
                                                <span onClick={() => setTrekRating(4)}>
                                                    4 <i class="ri-star-s-fill"></i>
                                                </span>
                                                <span onClick={() => setTrekRating(5)}>
                                                    5 <i class="ri-star-s-fill"></i>
                                                </span>
                                            </div>
                                            <div className="review__input">
                                                <input
                                                    type="text"
                                                    ref={reviewmsgRef}
                                                    placeholder="share your thoughts"
                                                    required
                                                />
                                                <button className="btn primary__btn text-white" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </Form>
                                        <ListGroup className="users__review">
                                            {sortedAndUnratedReviews?.map((review) => (
                                                <div className="review__item">
                                                    <img src={avatar} alt="" />

                                                    <div className="w100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>{review.username}</h5>
                                                                <p>
                                                                    {new Date().toLocaleDateString('en-US', options)}
                                                                </p>
                                                            </div>
                                                            <span className="d-flex align-items-center">
                                                                {review.rating} <i class="ri-star-s-fill"></i>
                                                            </span>
                                                        </div>
                                                        <h6>{review.reviewText}</h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </ListGroup>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4">
                                <Booking trek={trek} avgRating={avgRating} />
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default TrekDetails;

