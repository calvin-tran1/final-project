import React from 'react';
import Avatar from './avatar';
import AppContext from '../lib/app-context';

export default class MobileNavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      displayName: '',
      image: '',
      bio: ''
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    const req = {
      method: 'GET',
      headers: {
        'X-Access-Token': token
      }
    };

    fetch('/api/user', req)
      .then(res => res.json())
      .then(user => this.setState({
        username: user.username,
        displayName: user.displayName,
        image: user.image,
        bio: user.bio
      }));
  }

  render() {
    const { handleSignOut } = this.context;

    return (
      <div className={this.props.active}>
        <div className="mobile-nav-menu-head">
          <span className="mobile-nav-menu-title">Account info</span>
          <button className="mobile-x-btn" onClick={this.props.onClick}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="mobile-nav-menu-acc-info">
          <div className="mx-3 mt-3 mb-2">
            <Avatar
              imageUrl={this.state.image}
              name={this.state.username}
              width="40px"
              height="40px"
            />
          </div>
          <div className="mx-2 my-0">
            <span className="displayname-text color-white mx-2">
              {this.state.displayName}
            </span>
            <br />
            <span className="username-text">
              @{this.state.username}
            </span>
          </div>
        </div>
        <div className="mobile-nav-wrapper">
          <div className="mobile-profile-icon-wrapper mx-3 mt-4">
            <a href={`#${this.state.username}`}>
              <i className="fa-solid fa-user mobile-profile-icon" />
              <span className="mobile-profile-icon-text">Profile</span>
            </a>
          </div>
          <div className="mobile-sign-out mx-3 color-white" onClick={handleSignOut}>
            <span>Sign out</span>
          </div>
        </div>
      </div>
    );
  }
}

MobileNavMenu.contextType = AppContext;
