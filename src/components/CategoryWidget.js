import { Nav, NavDropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = () => {
  return (
    <>
      <Nav className="d-inline-block text-light mx-2">
        <NavDropdown id="nav-dropdown-dark-example" title={<FaFilter />}>
          <LinkContainer to="/category/1">
            <NavDropdown.Item>Category 1</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/category/2">
            <NavDropdown.Item>Category 2</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </>
  );
};

export default CategoryWidget;
