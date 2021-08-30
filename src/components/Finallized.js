import { Button } from 'bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Finallized = () => {
  return (
    <Container className="text-center mt-5">
      <h2 className="h1 fontTitle mb-4">YOUR CART IS EMPTY</h2>
      <Link to="/">
        <Button variant="outline-primary">Take me to buy!</Button>
      </Link>
    </Container>
  );
};

export default Finallized;
