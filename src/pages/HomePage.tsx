import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-5">
        <Container>
          <Row className="align-items-center">
            {/* Hero Content */}
            <Col md={6} className="order-md-1 order-2 mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Welcome to Shannon Sternagle Real Estate
              </h1>
              <p className="fs-5 mb-3">
                Your Trusted Partner in California Homeownership
              </p>
              <p className="mb-4 text-secondary">
                Shannon is a dedicated realtor with years of experience helping clients find their dream homes in California. 
                With a deep understanding of the local market and a commitment to personalized service, 
                Shannon ensures that every client's real estate journey is smooth and successful.
              </p>
              <Link to="/contact">
                <Button className="btn-primary-custom">Contact Shannon Today</Button>
              </Link>
            </Col>

            {/* Hero Image */}
            <Col md={6} className="order-md-2 order-1 text-center">
              <img 
                src="https://i.imgur.com/3MUxDwb.jpg" 
                alt="Shannon Sternagle, Realtor" 
                className="rounded-circle shadow border border-4 border-white"
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Featured Listings Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Featured Listings</h2>
          
          <Row>
            {/* Featured Listing 1 */}
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                    alt="Home in San Diego"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">Cozy Home in San Diego</Card.Title>
                  <p className="text-success fw-bold">$750,000</p>
                  <p className="text-secondary mb-3">3 beds • 2 baths • 1,500 sqft</p>
                  <Link to="/listings" className="text-decoration-none" style={{ color: 'var(--light-blue-1)' }}>View Details</Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Featured Listing 2 */}
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Modest Condo in Los Angeles"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Charming Condo in Los Angeles</Card.Title>
                  <p className="text-success fw-bold">$550,000</p>
                  <p className="text-secondary mb-3">2 beds • 2 baths • 1,200 sqft</p>
                  <Link to="/listings" className="text-decoration-none" style={{ color: 'var(--light-blue-1)' }}>View Details</Link>
                </Card.Body>
              </Card>
            </Col>

            {/* Featured Listing 3 */}
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Img 
                  variant="top" 
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Family Home in Sacramento"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Family Home in Sacramento</Card.Title>
                  <p className="text-success fw-bold">$650,000</p>
                  <p className="text-secondary mb-3">4 beds • 3 baths • 2,000 sqft</p>
                  <Link to="/listings" className="text-decoration-none" style={{ color: 'var(--light-blue-1)' }}>View Details</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Link to="/listings">
              <Button className="btn-secondary-custom">View All Listings</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Shannon Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4 fw-bold">Why Choose Shannon</h2>
          
          <Row>
            {/* Reason 1 */}
            <Col md={4} className="mb-4 text-center">
              <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px', backgroundColor: 'var(--light-green-1)' }}>
                <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="fw-bold h5 mb-2">Local Expertise</h3>
              <p className="text-secondary">
                Deep knowledge of California's diverse real estate markets, from coastal properties to urban condos.
              </p>
            </Col>

            {/* Reason 2 */}
            <Col md={4} className="mb-4 text-center">
              <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px', backgroundColor: 'var(--light-blue-1)' }}>
                <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="fw-bold h5 mb-2">Personalized Service</h3>
              <p className="text-secondary">
                Tailored approach to each client's unique needs, ensuring a stress-free buying or selling experience.
              </p>
            </Col>

            {/* Reason 3 */}
            <Col md={4} className="mb-4 text-center">
              <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" 
                   style={{ width: '80px', height: '80px', backgroundColor: 'var(--light-green-1)' }}>
                <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="fw-bold h5 mb-2">Proven Results</h3>
              <p className="text-secondary">
                Track record of successful transactions, with satisfied clients and competitive property values.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial Preview Section */}
      <section className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-4 fw-bold">What Clients Say</h2>
          
          <div className="testimonial-card p-4 mx-auto" style={{ maxWidth: '800px' }}>
            <div className="d-flex align-items-center mb-3">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80" 
                alt="Jane Doe" 
                className="rounded-circle me-3"
                style={{ width: '64px', height: '64px', objectFit: 'cover' }}
              />
              <div>
                <h3 className="fw-bold h5 mb-0">Jane Doe</h3>
                <p className="text-secondary mb-0">Home Buyer</p>
              </div>
            </div>
            <p className="fst-italic mb-3">
              "Shannon made our home-buying process seamless! Her knowledge of the market and negotiation skills helped us secure our dream home in a competitive neighborhood. We couldn't be happier with our experience."
            </p>
            <div className="text-end">
              <Link to="/testimonials" className="text-decoration-none" style={{ color: 'var(--light-blue-1)' }}>
                Read More Testimonials
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-white">
        <Container className="text-center">
          <h2 className="fw-bold mb-3">Ready to Find Your Dream Home?</h2>
          <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Contact Shannon today to start your real estate journey with a trusted partner by your side.
          </p>
          <Link to="/contact">
            <Button variant="light" className="fw-bold" style={{ color: 'var(--light-blue-1)' }}>
              Get Started
            </Button>
          </Link>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
