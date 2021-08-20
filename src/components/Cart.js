import React from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  return (
    <Container className="mt-2">
      <Table striped hover>
        <thead className="table-dark">
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>$</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>

            <td className="p-0 text-center align-middle">
              <Button className="rounded-0 border-0" variant="outline-primary">
                <FaTrashAlt />
              </Button>
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Otto</td>

            <td className="p-0 text-center align-middle">
              <Button className="rounded-0 border-0" variant="outline-primary">
                <FaTrashAlt />
              </Button>
            </td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>

            <td className="p-0 text-center align-middle">
              <Button className="rounded-0 border-0" variant="outline-primary">
                <FaTrashAlt />
              </Button>
            </td>
          </tr>
        </tbody>
        <tfoot className="table-dark">
          <tr>
            <td>Larry the Bird</td>
            <td>@twitter</td>
            <td>Otto</td>

            <td></td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default Cart;
