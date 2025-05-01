import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner, Button } from 'react-bootstrap';
import { Resource } from '../types';

const ResourceArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      if (!id) return;

      try {
        // In a real application, we would fetch from Firestore
        // For now, we'll use placeholder data
        const placeholderResources: Record<string, Resource> = {
          'equity': {
            id: 'equity',
            title: 'How to Use Your Home\'s Equity',
            summary: 'Learn how to leverage your home\'s equity for financial goals like home improvements, debt consolidation, or funding education.',
            content: `<h2>Understanding Home Equity</h2>
            <p>Home equity is the difference between what your home is worth and what you owe on your mortgage. As you pay down your mortgage and as property values increase, your equity grows.</p>
            <h2>Ways to Use Home Equity</h2>
            <ul>
              <li><strong>Home Improvements:</strong> Renovations can increase your home's value and improve your quality of life.</li>
              <li><strong>Debt Consolidation:</strong> Pay off high-interest debt with a lower-interest home equity loan.</li>
              <li><strong>Education Expenses:</strong> Fund college education for yourself or family members.</li>
              <li><strong>Emergency Fund:</strong> Create a financial safety net for unexpected expenses.</li>
            </ul>
            <h2>Options for Accessing Equity</h2>
            <p>There are several ways to tap into your home's equity:</p>
            <ul>
              <li><strong>Home Equity Loan:</strong> Borrow a lump sum with fixed interest rates.</li>
              <li><strong>Home Equity Line of Credit (HELOC):</strong> Access funds as needed with variable interest rates.</li>
              <li><strong>Cash-Out Refinance:</strong> Replace your existing mortgage with a new, larger one and take the difference in cash.</li>
            </ul>
            <h2>Considerations Before Using Home Equity</h2>
            <p>Before tapping into your home's equity, consider:</p>
            <ul>
              <li>Your home is collateral for the loan, putting it at risk if you can't make payments.</li>
              <li>Interest rates and terms vary, so shop around for the best option.</li>
              <li>Consider the tax implications (consult with a tax professional).</li>
              <li>Have a clear plan for how you'll use the funds.</li>
            </ul>`,
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
          },
          'maintenance': {
            id: 'maintenance',
            title: 'Regular Maintenance That Should Be Performed On Your Home',
            summary: 'A comprehensive guide to seasonal home maintenance tasks that will protect your investment and prevent costly repairs.',
            content: `<h2>Seasonal Home Maintenance Checklist</h2>
            <h3>Spring Maintenance</h3>
            <ul>
              <li>Inspect roof for winter damage</li>
              <li>Clean gutters and downspouts</li>
              <li>Check exterior for paint damage or wood rot</li>
              <li>Service air conditioning system</li>
              <li>Inspect and clean dryer vent</li>
              <li>Check for leaks around windows and doors</li>
            </ul>
            <h3>Summer Maintenance</h3>
            <ul>
              <li>Check irrigation systems</li>
              <li>Inspect deck or patio for damage</li>
              <li>Clean outdoor furniture</li>
              <li>Check for insect infestations</li>
              <li>Clean refrigerator coils</li>
              <li>Test smoke and carbon monoxide detectors</li>
            </ul>
            <h3>Fall Maintenance</h3>
            <ul>
              <li>Clean gutters after leaves fall</li>
              <li>Service heating system</li>
              <li>Seal gaps and cracks</li>
              <li>Drain and store garden hoses</li>
              <li>Inspect chimney and fireplace</li>
              <li>Winterize outdoor faucets</li>
            </ul>
            <h3>Winter Maintenance</h3>
            <ul>
              <li>Check attic insulation</li>
              <li>Inspect for ice dams on roof</li>
              <li>Test sump pump</li>
              <li>Check for drafts around windows and doors</li>
              <li>Clean drains in sinks, tubs, and showers</li>
              <li>Inspect basement for water leaks</li>
            </ul>
            <h2>Monthly Maintenance Tasks</h2>
            <ul>
              <li>Replace HVAC filters</li>
              <li>Clean range hood filters</li>
              <li>Check water softener salt levels</li>
              <li>Inspect fire extinguishers</li>
            </ul>`,
            image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
          },
          'credit': {
            id: 'credit',
            title: 'Why Credit Matters',
            summary: 'Understand how your credit score impacts your ability to buy a home and get favorable mortgage terms.',
            content: `<h2>The Importance of Credit in Real Estate</h2>
            <p>Your credit score is one of the most important factors lenders consider when you apply for a mortgage. A good credit score can save you thousands of dollars over the life of your loan.</p>
            <h2>How Credit Scores Affect Mortgages</h2>
            <ul>
              <li><strong>Interest Rates:</strong> Higher credit scores typically qualify for lower interest rates.</li>
              <li><strong>Loan Approval:</strong> Some loan programs have minimum credit score requirements.</li>
              <li><strong>Down Payment:</strong> Better credit may allow for lower down payment options.</li>
              <li><strong>PMI (Private Mortgage Insurance):</strong> Your credit score affects your PMI premiums if your down payment is less than 20%.</li>
            </ul>
            <h2>Improving Your Credit Score</h2>
            <p>If you're planning to buy a home, start working on your credit score well in advance:</p>
            <ul>
              <li>Pay all bills on time</li>
              <li>Reduce credit card balances (aim for less than 30% of available credit)</li>
              <li>Don't open new credit accounts</li>
              <li>Don't close old credit accounts</li>
              <li>Check your credit report for errors</li>
              <li>Address any collections or past-due accounts</li>
            </ul>
            <h2>Understanding Credit Reports</h2>
            <p>You're entitled to a free credit report from each of the three major credit bureaus (Equifax, Experian, and TransUnion) once per year. Review these reports carefully and dispute any inaccuracies.</p>
            <h2>Credit Score Ranges</h2>
            <ul>
              <li><strong>Excellent:</strong> 750+</li>
              <li><strong>Good:</strong> 700-749</li>
              <li><strong>Fair:</strong> 650-699</li>
              <li><strong>Poor:</strong> 600-649</li>
              <li><strong>Bad:</strong> Below 600</li>
            </ul>`,
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
          },
          'first-time-buyer': {
            id: 'first-time-buyer',
            title: 'First-Time Home Buyer Tips',
            summary: 'Essential advice and guidance for navigating the home buying process for the first time.',
            content: `<h2>Preparing for Your First Home Purchase</h2>
            <h3>Before You Start Looking</h3>
            <ul>
              <li><strong>Check your credit:</strong> Review your credit report and address any issues.</li>
              <li><strong>Determine your budget:</strong> Calculate how much house you can afford based on your income, debt, and savings.</li>
              <li><strong>Save for a down payment:</strong> Aim for at least 3-20% of the purchase price, depending on the loan type.</li>
              <li><strong>Get pre-approved:</strong> This shows sellers you're serious and gives you a clear budget.</li>
              <li><strong>Research first-time buyer programs:</strong> Many states and the federal government offer assistance programs.</li>
            </ul>
            <h3>During the Home Search</h3>
            <ul>
              <li><strong>Make a needs vs. wants list:</strong> Distinguish between must-haves and nice-to-haves.</li>
              <li><strong>Consider future needs:</strong> Think about how long you plan to stay and how your needs might change.</li>
              <li><strong>Research neighborhoods:</strong> Look at schools, crime rates, amenities, and commute times.</li>
              <li><strong>Attend open houses:</strong> Visit multiple properties to get a feel for what's available.</li>
              <li><strong>Work with a buyer's agent:</strong> Their expertise can be invaluable, and the seller typically pays their commission.</li>
            </ul>
            <h3>Making an Offer and Closing</h3>
            <ul>
              <li><strong>Get a home inspection:</strong> This can reveal hidden issues before you commit.</li>
              <li><strong>Understand closing costs:</strong> These typically range from 2-5% of the loan amount.</li>
              <li><strong>Review all documents carefully:</strong> Don't hesitate to ask questions about anything you don't understand.</li>
              <li><strong>Conduct a final walkthrough:</strong> Verify the home's condition hasn't changed before closing.</li>
              <li><strong>Prepare for moving:</strong> Budget for moving expenses and any immediate home improvements.</li>
            </ul>
            <h3>Common First-Time Buyer Mistakes to Avoid</h3>
            <ul>
              <li>Skipping pre-approval</li>
              <li>Exceeding your budget</li>
              <li>Draining your savings for the down payment</li>
              <li>Overlooking additional costs of homeownership</li>
              <li>Making major purchases before closing</li>
              <li>Rushing the decision</li>
            </ul>`,
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
          }
        };

        if (id && placeholderResources[id]) {
          setResource(placeholderResources[id]);
        }
        setLoading(false);

        // This is how we would fetch from Firestore in a production environment
        // if (id) {
        //   const resourceDoc = doc(db, 'resources', id);
        //   const resourceSnapshot = await getDoc(resourceDoc);
        //   if (resourceSnapshot.exists()) {
        //     setResource({ id: resourceSnapshot.id, ...resourceSnapshot.data() } as Resource);
        //   }
        //   setLoading(false);
        // }
      } catch (error) {
        console.error('Error fetching resource:', error);
        setLoading(false);
      }
    };

    fetchResource();
  }, [id]);

  if (loading) {
    return (
      <div className="py-5 bg-light">
        <Container className="text-center">
          <Spinner animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="py-5 bg-light">
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-3">Resource Not Found</h1>
          <p className="fs-5 text-secondary mb-4">
            Sorry, the resource you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/resources">
            <Button className="btn-primary-custom">Back to Resources</Button>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            {/* Breadcrumb */}
            <div className="mb-4">
              <Link to="/resources" className="text-decoration-none" style={{ color: 'var(--light-blue-1)' }}>
                &larr; Back to Resources
              </Link>
            </div>

            {/* Article Header */}
            <Card className="shadow-sm mb-4 overflow-hidden">
              <div style={{ maxHeight: '300px', overflow: 'hidden' }}>
                <Card.Img 
                  variant="top"
                  src={resource.image} 
                  alt={resource.title} 
                  style={{ objectFit: 'cover', width: '100%' }}
                />
              </div>
              <Card.Body className="p-4">
                <h1 className="fw-bold h2 mb-2">{resource.title}</h1>
                <p className="fs-5 text-secondary mb-0">{resource.summary}</p>
              </Card.Body>
            </Card>

            {/* Article Content */}
            <Card className="shadow-sm p-4 mb-5">
              <Card.Body>
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: resource.content }}
                />
              </Card.Body>
            </Card>

            {/* CTA */}
            <div className="mt-5 text-center mb-3">
              <h3 className="fw-bold h4 mb-3">Have Questions About Your Real Estate Journey?</h3>
              <Link to="/contact">
                <Button className="btn-primary-custom">Contact Shannon Today</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResourceArticlePage;
