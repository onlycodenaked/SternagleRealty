import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Listing } from '../types';

// Firebase imports commented out until needed for production
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config';

const SoldPage = () => {
  const [soldListings, setSoldListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSoldListings = async () => {
      try {
        // In a real application, we would fetch from Firestore
        // For now, we'll use placeholder data
        const placeholderSoldListings: Listing[] = [
          {
            id: '1',
            address: '123 Sunset Blvd, San Diego, CA',
            price: 780000,
            beds: 3,
            baths: 2,
            sqft: 1600,
            photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            soldDate: '2025-03-15'
          },
          {
            id: '2',
            address: '456 Palm Ave, Los Angeles, CA',
            price: 620000,
            beds: 2,
            baths: 2,
            sqft: 1300,
            photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            soldDate: '2025-02-28'
          },
          {
            id: '3',
            address: '789 Oak St, Sacramento, CA',
            price: 540000,
            beds: 3,
            baths: 2,
            sqft: 1800,
            photo: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            soldDate: '2025-02-10'
          },
          {
            id: '4',
            address: '101 Golden Gate Way, San Francisco, CA',
            price: 1250000,
            beds: 3,
            baths: 2.5,
            sqft: 1900,
            photo: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            soldDate: '2025-01-20'
          },
          {
            id: '5',
            address: '222 Valley View Dr, San Jose, CA',
            price: 920000,
            beds: 4,
            baths: 3,
            sqft: 2400,
            photo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            soldDate: '2025-01-05'
          }
        ];

        setSoldListings(placeholderSoldListings);
        setLoading(false);

        // This is how we would fetch from Firestore in a production environment
        // const soldListingsCollection = collection(db, 'sold_listings');
        // const soldListingsSnapshot = await getDocs(soldListingsCollection);
        // const soldListingsList = soldListingsSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Listing[];
        // setSoldListings(soldListingsList);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching sold listings:', error);
        setLoading(false);
      }
    };

    fetchSoldListings();
  }, []);

  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="display-4 fw-bold text-center mb-2">Sold Properties</h1>
        <p className="fs-5 text-secondary mb-5 text-center">
          Properties successfully sold by Shannon Sternagle
        </p>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {soldListings.map((listing) => (
              <Col key={listing.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top"
                      src={listing.photo} 
                      alt={`Property at ${listing.address}`} 
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0" style={{ backgroundColor: 'var(--light-blue-1)', color: 'white', padding: '0.25rem 0.75rem', margin: '0.5rem', borderRadius: '0.25rem' }}>
                      Sold: {formatPrice(listing.price)}
                    </div>
                    {listing.soldDate && (
                      <div className="position-absolute bottom-0 start-0 bg-dark bg-opacity-75 text-white px-3 py-1 m-2 rounded">
                        Sold: {formatDate(listing.soldDate)}
                      </div>
                    )}
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold mb-2">{listing.address}</Card.Title>
                    <div className="d-flex justify-content-between text-secondary mb-3">
                      <span>{listing.beds} beds</span>
                      <span>{listing.baths} baths</span>
                      <span>{listing.sqft.toLocaleString()} sqft</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <div className="text-center mt-5">
          <Link to="/contact">
            <button className="btn-primary-custom">Interested in selling? Contact Shannon!</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SoldPage;
