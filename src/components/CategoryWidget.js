import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = props => {
  return (
    <Dropdown className="d-inline-block text-light mx-2" align="end">
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        <span>
          <FaFilter className="me-1" />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.categories.map(category => {
          return (
            <LinkContainer key={category} to={`/category/${category}`}>
              <Dropdown.Item className="text-uppercase">
                <small>{category}</small>
              </Dropdown.Item>
            </LinkContainer>
          );
        })}
        {/* <LinkContainer to="/category/electronics">
          <Dropdown.Item>Electronics</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/category/jewelery">
          <Dropdown.Item>Jewelery</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/category/electronics">
          <Dropdown.Item>Electronics</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/category/electronics">
          <Dropdown.Item>Electronics</Dropdown.Item>
        </LinkContainer>
        <LinkContainer to="/category/electronics">
          <Dropdown.Item>Electronics</Dropdown.Item>
        </LinkContainer> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryWidget;
