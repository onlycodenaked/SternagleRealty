import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Testimonial } from '../types';

// Firebase imports commented out until needed for production
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../firebase/config';

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // In a real application, we would fetch from Firestore
        // For now, we'll use placeholder data
        const placeholderTestimonials: Testimonial[] = [
          {
            id: '1',
            name: 'Jane Doe',
            quote: 'Shannon made our home-buying process seamless! Her knowledge of the market and negotiation skills helped us secure our dream home in a competitive neighborhood. We couldn\'t be happier with our experience.',
            photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
          },
          {
            id: '2',
            name: 'John Smith',
            quote: 'As first-time home sellers, we were nervous about the process. Shannon guided us through every step, from staging to closing. Her marketing strategy brought in multiple offers, and we sold above asking price!',
            photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
          },
          {
            id: '3',
            name: 'Emily Johnson',
            quote: 'Shannon\'s attention to detail and responsiveness made all the difference. She listened to our needs and only showed us properties that matched our criteria, saving us time and stress. Highly recommend!',
            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
          },
          {
            id: '4',
            name: 'Michael Rodriguez',
            quote: 'Working with Shannon to find our investment property was a great experience. Her knowledge of rental markets and property values helped us make a sound investment decision. We\'ll definitely work with her again.',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
          },
          {
            id: '5',
            name: 'Sarah Wilson',
            quote: 'Shannon went above and beyond to help us relocate from out of state. She provided virtual tours, handled inspections when we couldn\'t be there, and made the entire process stress-free despite the distance.',
            photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
          }
        ];

        setTestimonials(placeholderTestimonials);
        setLoading(false);

        // This is how we would fetch from Firestore in a production environment
        // const testimonialsCollection = collection(db, 'testimonials');
        // const testimonialsSnapshot = await getDocs(testimonialsCollection);
        // const testimonialsList = testimonialsSnapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // })) as Testimonial[];
        // setTestimonials(testimonialsList);
        // setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="py-5">
      <Container>
        <h1 className="display-4 fw-bold text-center mb-2">Client Testimonials</h1>
        <p className="fs-5 text-center text-secondary mb-5">Hear what our clients have to say about their experience with Shannon</p>
        
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {testimonials.map((testimonial) => (
              <Col key={testimonial.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 testimonial-card">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      {testimonial.photo && (
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name} 
                          className="rounded-circle me-3 border border-2 border-white"
                          style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                        />
                      )}
                      <div>
                        <h3 className="fw-bold h5 mb-0">{testimonial.name}</h3>
                      </div>
                    </div>
                    <p className="fst-italic">"{testimonial.quote}"</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <div className="text-center mt-5">
          <Link to="/contact">
            <button className="btn-primary-custom">Ready to work with Shannon? Contact her today!</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsPage;
