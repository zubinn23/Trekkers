import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TrekCard from './../shared/TrekCard';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Price = () => {
    const [treks, setTreks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/treks?sortByPrice=true&priceSortDirection=desc`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setTreks(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {treks.map((trek) => (
                    <Col lg="3" md="6" sm="6" className="mb-4" key={trek.id}>
                        <TrekCard trek={trek} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Price;
