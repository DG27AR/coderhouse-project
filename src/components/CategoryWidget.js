import { Dropdown } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryWidget = props => {
  return (
    <Dropdown className="d-inline-block text-light mx-2">
      <Dropdown.Toggle className="rounded-0 border-0 text-light" variant="outline-dark" id="dropdown-basic">
        <span>
          <FaFilter className="me-1" />
        </span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.categories.map(category => {
          return (
            <LinkContainer key={category.id} to={`/category/${category.title}`}>
              <Dropdown.Item className="text-uppercase">
                <small>{category.title}</small>
              </Dropdown.Item>
            </LinkContainer>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryWidget;
