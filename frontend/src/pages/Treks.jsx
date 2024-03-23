import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../styles/trek.css';
import SearchBar from './../shared/SearchBar';
import TrekCard from './../shared/TrekCard';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import CommonSection from '../shared/CommonSection';

const Treks = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [sortByPrice, setSortByPrice] = useState(false);
    const [priceSortDirection, setPriceSortDirection] = useState('asc');
    const [sortByRating, setSortByRating] = useState(false);
    const [ratingSortDirection, setRatingSortDirection] = useState('desc');

    const { data: treks, loading, error } = useFetch(
        `${BASE_URL}/treks?page=${page}&sortByPrice=${sortByPrice ? 'true' : 'false'}&priceSortDirection=${priceSortDirection}&sortByRating=${sortByRating ? 'true' : 'false'}&ratingSortDirection=${ratingSortDirection}`
    );

    const { data: trekCount } = useFetch(`${BASE_URL}/treks/search/getTrekCount`);

    useEffect(() => {
        const pages = Math.ceil(trekCount / 8); // backend count
        setPageCount(pages);
        window.scrollTo(0, 0);
    }, [page, trekCount, treks]);

    const handleSortByPrice = () => {
        setSortByPrice(!sortByPrice);
        // Toggle sorting direction
        setPriceSortDirection(priceSortDirection === 'asc' ? 'desc' : 'asc');
    };

    const handleSortByRating = () => {
        if (sortByRating) {
            // If already sorting by rating, reset sorting
            setSortByRating(false);
            setRatingSortDirection('desc'); // Reset rating sort direction to descending
        } else {
            // If not sorting by rating, enable sorting by rating
            setSortByRating(true);
            setRatingSortDirection('desc'); // Set rating sort direction to descending
        }
    };

    

    

    return (
        <>
            <CommonSection title={'All Treks'} />
            <section>
                <Container>
                    <Row className="align-items-center">
                        <Col md="6">
                            <SearchBar />
                        </Col>
                        <Col md="6" className="text-md-right mb-3">
    <Button className="sort-price-btn" color='primary' onClick={handleSortByPrice}>
        {sortByPrice ? 'Reset Sorting' : 'Sort by Price'}
    </Button>
    <Button className="sort-rating-btn" color='primary' onClick={handleSortByRating}>
        {sortByRating ? 'Reset Sorting' : 'Sort by Rating'}
    </Button>
</Col>

                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5 ">Loading.........</h4>}
                    {error && <h4 className="text-center pt-5 ">{error}</h4>}
                    {!loading && !error && (
                        <Row>
                            {treks?.map((trek) => (
                                <Col lg="3" md="6" sm="6" className="mb-4" key={trek.id}>
                                    <TrekCard trek={trek} />
                                </Col>
                            ))}
                            <Col lg="12">
                                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                    {[...Array(pageCount).keys()].map((number) => (
                                        <span
                                            key={number}
                                            onClick={() => setPage(number)}
                                            className={page === number ? 'active__page' : ''}
                                        >
                                            {number + 1}
                                        </span>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default Treks;
