import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Spinner, Alert, Modal } from 'react-bootstrap';
import { LeadFormData } from '../types';

const ContactPage = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  
  // For testing purposes only - to be removed before going live
  const [tempFormData, setTempFormData] = useState<LeadFormData | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // For testing purposes only - to be removed before going live
  const handleVerificationResponse = async () => {
    setShowVerification(false);
    setIsSubmitting(true);
    
    try {
      // In a real application, we would save to Firestore
      // For now, we'll simulate a successful submission
      console.log('Form data submitted:', tempFormData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // This is how we would save to Firestore in a production environment
      // await addDoc(collection(db, 'leads'), {
      //   ...tempFormData,
      //   timestamp: serverTimestamp()
      // });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setTempFormData(null);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your information. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Store the form data temporarily
      setTempFormData({...formData});
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show verification dialog instead of submitting directly
      // This is for testing purposes only and should be removed before going live
      setShowVerification(true);
    } catch (error) {
      console.error('Error processing form:', error);
      setSubmitError('There was an error processing your information. Please try again later.');
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-5 bg-light">
      {/* Verification Modal - For testing purposes only, to be removed before going live */}
      <Modal 
        show={showVerification} 
        onHide={() => setShowVerification(false)}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>Verification Required</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <p className="mb-4">Wait, we first need to confirm that you are not a bitch. Shannon does not work with bitches.</p>
          <div className="d-flex justify-content-center gap-3">
            <Button 
              variant="success" 
              onClick={handleVerificationResponse}
              className="px-4"
            >
              No, I'm not a bitch
            </Button>
            <Button 
              variant="danger" 
              onClick={handleVerificationResponse}
              className="px-4"
            >
              Yes, I'm a bitch 😢
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <h1 className="display-4 fw-bold text-center mb-2">Contact Shannon</h1>
            <p className="fs-5 text-secondary mb-5 text-center">
              Get in touch to start your real estate journey
            </p>

            <Card className="shadow-sm overflow-hidden">
              <Row className="g-0">
                {/* Contact Information */}
                <Col md={4} className="contact-info-gradient text-white p-4 p-md-5">
                  <h2 className="fw-bold h3 mb-4">Contact Information</h2>
                  
                  <div className="mb-4">
                    <h3 className="fw-semibold h6 mb-2">Email</h3>
                    <p className="d-flex align-items-center">
                      <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      shannon@sternaglerealty.com
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="fw-semibold h6 mb-2">Phone</h3>
                    <p className="d-flex align-items-center">
                      <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (555) 123-4567
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="fw-semibold h6 mb-2">Office</h3>
                    <p className="d-flex align-items-start">
                      <svg className="me-2 mt-1" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>
                        123 Real Estate Blvd, Suite 100<br />
                        San Diego, CA 92101
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="fw-semibold h6 mb-2">Connect</h3>
                    <div className="d-flex gap-3">
                      <a href="#" className="text-white" aria-label="Facebook">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white" aria-label="Instagram">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </a>
                      <a href="#" className="text-white" aria-label="Twitter">
                        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Col>

                {/* Contact Form */}
                <Col md={8} className="p-4 p-md-5">
                  {submitSuccess ? (
                    <div className="text-center py-5">
                      <div className="text-success mb-4">
                        <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h2 className="fw-bold h3 mb-2">Thank You!</h2>
                      <p className="text-secondary mb-4">Shannon will contact you soon.</p>
                      <Button 
                        onClick={() => setSubmitSuccess(false)}
                        className="btn-primary-custom"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      <h2 className="fw-bold h3 mb-4">Get in Touch</h2>
                      
                      {submitError && (
                        <Alert variant="danger" className="mb-4">
                          {submitError}
                        </Alert>
                      )}
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-4">
                        <Form.Label>Message (Optional)</Form.Label>
                        <Form.Control
                          as="textarea"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                        />
                      </Form.Group>
                      
                      <Button
                        type="submit"
                        className="btn-primary-custom w-100"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="d-flex align-items-center justify-content-center">
                            <Spinner 
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              className="me-2"
                            />
                            Submitting...
                          </span>
                        ) : 'Get in Touch'}
                      </Button>
                    </Form>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
