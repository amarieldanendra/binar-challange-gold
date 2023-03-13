import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasNavbar() {
  return (
    <>
      <Navbar expand="sm" className="mb-3">
        <Container fluid className="justify-content-end">
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            aria-labelledby="offcanvasNavbarLabel-expand-sm"
            placement="end"
          >
            <Offcanvas.Header closeButton className="pe-5">
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-sm">
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
                <Nav.Link href="#">Our Service</Nav.Link>
                <Nav.Link href="#">Why Us</Nav.Link>
                <Nav.Link href="#">Testimonial</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasNavbar;
