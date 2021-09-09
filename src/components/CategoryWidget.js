import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = props => {
  return (
    <Dropdown alignRight className="d-inline-block ms-1">
      <Dropdown.Toggle className="text-light px-2 border-0" variant="outline-primary" size="md" id="dropdown-basic">
        <span className="fw-bold fs-6">
          Categories
          {/* <FaFilter /> */}
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item key="all" className="text-uppercase">
          <LinkContainer to="/">
            <small>All Products</small>
          </LinkContainer>
        </Dropdown.Item>
        {props.categories.map(category => {
          return (
            <Dropdown.Item className="text-uppercase">
              <LinkContainer key={category.id} to={`/category/${category.title}`}>
                <small>{category.title}</small>
              </LinkContainer>
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryWidget;
