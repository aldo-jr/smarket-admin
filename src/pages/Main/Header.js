import React from 'react';
import { connect } from 'react-redux';
import { toggleMobileNavVisibility } from '../../reducers/Layout';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl } from 'react-bootstrap';

const Header = ({
  showMobileMenu,
  toggleMobileNavVisibility
}) => (
    <Navbar fluid={true}>
      <Navbar.Header>
        <button type="button" className="navbar-toggle" data-toggle="collapse" onClick={toggleMobileNavVisibility}>
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
      </Navbar.Header>

      <Navbar.Collapse>


        <Navbar.Form pullLeft>
          <FormGroup>
            <span className="input-group-addon"><i className="fa fa-search"></i></span>
            <FormControl type="text" placeholder="Pesquisar" />
          </FormGroup>
        </Navbar.Form>
        <Nav pullRight>
          <NavItem>Sair</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

const mapDispatchToProp = dispatch => ({
  toggleMobileNavVisibility: () => dispatch(toggleMobileNavVisibility())
});

export default connect(null, mapDispatchToProp)(Header);