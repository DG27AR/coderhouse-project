import { Spinner, Container } from 'react-bootstrap';

const MyLoader = () => {
  return (
    <Container fluid className="spinner">
      <Spinner animation="border" variant="primary" />
    </Container>
  );
};

export default MyLoader;
