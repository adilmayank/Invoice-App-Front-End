import logo from './logo.svg'
import './App.css'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import NavNavbar from './components/Navbar'
import CustomerInfo from './components/CustomerInfo'
import MainButtons from './components/MainButtons'
import ProductsInfo from './components/ProductsInfo'

function App() {
  return (
    <Container fluid className="p-0">
      <NavNavbar />
      <Container>
        <CustomerInfo />
        <ProductsInfo />
        <Row>
          <Col md={5}>Customer Info</Col>
          <Col md={7}>Customer Info</Col>
        </Row>
        <MainButtons />
      </Container>
    </Container>
  )
}

export default App
