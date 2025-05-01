import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import { Listing } from '../types';

// Firebase imports commented out until needed for production
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config';

const ListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // In a real application, we would fetch from Firestore
        // For now, we'll use placeholder data
        const placeholderListings: Listing[] = [
          {
            id: '1',
            address: '123 Main St, San Diego, CA',
            price: 750000,
            beds: 3,
            baths: 2,
            sqft: 1500,
            photo: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            description: 'Beautiful single-family home in a quiet neighborhood with excellent schools. Features include a renovated kitchen, hardwood floors, and a spacious backyard.',
            features: ['Renovated Kitchen', 'Hardwood Floors', 'Spacious Backyard', 'Attached Garage']
          },
          {
            id: '2',
            address: '456 Ocean Ave, Los Angeles, CA',
            price: 550000,
            beds: 2,
            baths: 2,
            sqft: 1200,
            photo: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            description: 'Modern condo in the heart of downtown with stunning city views. Features include stainless steel appliances, quartz countertops, and a private balcony.',
            features: ['City Views', 'Stainless Steel Appliances', 'Private Balcony', 'Fitness Center']
          },
          {
            id: '3',
            address: '789 Park Blvd, Sacramento, CA',
            price: 650000,
            beds: 4,
            baths: 3,
            sqft: 2000,
            photo: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            description: 'Spacious family home near parks and shopping. Features include an open floor plan, updated bathrooms, and a large fenced yard.',
            features: ['Open Floor Plan', 'Updated Bathrooms', 'Fenced Yard', 'Near Parks']
          },
          {
            id: '4',
            address: '101 Mountain View Rd, San Francisco, CA',
            price: 950000,
            beds: 3,
            baths: 2.5,
            sqft: 1800,
            photo: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            description: 'Charming Victorian home with modern updates. Features include original hardwood floors, bay windows, and a newly renovated kitchen.',
            features: ['Victorian Architecture', 'Bay Windows', 'Renovated Kitchen', 'Period Details']
          },
          {
            id: '5',
            address: '222 Sunset Dr, San Jose, CA',
            price: 850000,
            beds: 4,
            baths: 3,
            sqft: 2200,
            photo: 'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            description: 'Contemporary home in a gated community with resort-style amenities. Features include high ceilings, a gourmet kitchen, and a three-car garage.',
            features: ['Gated Community', 'High Ceilings', 'Gourmet Kitchen', 'Three-Car Garage']
          }
        ];

        setListings(placeholderListings);
        setLoading(false);

        // This is how we would fetch from Firestore in a production environment
        // const listingsCollection = collection(db, 'current_listings');
        // const listingsSnapshot = await getDocs(listingsCollection);
        // const listingsList = listingsSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Listing[];
        // setListings(listingsList);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching listings:', error);
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="display-4 fw-bold text-center mb-2">Current Listings</h1>
        <p className="fs-5 text-secondary mb-5 text-center">
          Explore Shannon's available properties in California
        </p>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {listings.map((listing) => (
              <Col key={listing.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow">
                  <div className="position-relative">
                    <Card.Img 
                      variant="top"
                      src={listing.photo} 
                      alt={`Property at ${listing.address}`} 
                      style={{ height: '220px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 bg-success text-white px-3 py-1 m-2 rounded">
                      {formatPrice(listing.price)}
                    </div>
                  </div>
                  <Card.Body className="p-4">
                    <Card.Title className="fw-bold mb-2">{listing.address}</Card.Title>
                    <div className="d-flex justify-content-between text-secondary mb-3">
                      <span>{listing.beds} beds</span>
                      <span>{listing.baths} baths</span>
                      <span>{listing.sqft.toLocaleString()} sqft</span>
                    </div>
                    <Card.Text className="mb-3">{listing.description}</Card.Text>
                    <div className="mb-3">
                      <h5 className="fw-semibold mb-2 h6">Features:</h5>
                      <Row>
                        {listing.features?.map((feature, index) => (
                          <Col key={index} xs={6} className="mb-1">
                            <div className="d-flex align-items-center">
                              <svg width="16" height="16" className="me-1" style={{ color: 'var(--light-blue-1)' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                              </svg>
                              <span className="text-secondary small">{feature}</span>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <Button className="btn-primary-custom w-100">View Listing</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ListingsPage;
