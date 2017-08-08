import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {DropdownButton} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import './Header.sass';

export default class Header extends React.Component {
  render() {
    const userMenu = () =>
      <DropdownButton title={this.props.user.firstName + ' ' + this.props.user.lastName} id="user-menu"
                      pullRight={true}>
        <MenuItem href="#" id="settings">Settings</MenuItem>
        <MenuItem divider id="separator"/>
        <MenuItem href="/logout" id="log-out">Log Out</MenuItem>
      </DropdownButton>;

    const userLogin = () =>
      <div>
        <DropdownButton title="Login" id="login-menu" pullRight={true}>
          <MenuItem href="/auth/facebook" bsStyle='primary' id="facebook">
            <span className="fa fa-facebook"></span> Facebook</MenuItem>
        </DropdownButton>
      </div>;

    return (
      <div className="container-fluid header">
        <a href="/" className="ci-logo">BuildIt</a>
        <ButtonToolbar className="menu">
          {this.props.user === null ? userLogin() : userMenu()}
        </ButtonToolbar>
      </div>
    );
  }
}
