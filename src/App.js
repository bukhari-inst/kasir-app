import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import { NavbarComponent, ListCategories, Hasil } from 'components';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="mt-2">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
