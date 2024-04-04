import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{NavLink} from 'react-router-dom'
import { GlobalContext } from '../context';

const NavComponent = () => {
  const {search,setSearch,handleSubmit} = useContext(GlobalContext);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <NavLink to={"/"}><Navbar.Brand>RECIPE APP</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><NavLink to={"/"}>Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/recipe/:id"}>Details</NavLink></Nav.Link>
            <Nav.Link><NavLink to={"/favorites"}>Favorites</NavLink></Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e)=>{handleSubmit(e)}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button type='submit' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavComponent
