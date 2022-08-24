import React from 'react';
import Avatar from './avatar';
// import DesktopSearchbar from './search-bar';
import AppContext from '../lib/app-context';

export default class MobileTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      displayName: '',
      image: '',
      bio: '',
      active: false
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

  renderNavComponent() {
    const { route } = this.context;

    if (route.path === 'home') {
      return <button type="button" className="mobile-nav-btn" onClick={this.props.onClick}>
                <Avatar
                  imageUrl={this.state.image}
                  name="test"
                  width="33px"
                  height="33px"
                />
              </button>;
    }
    if (route.path === `${this.state.username}`) {
      return <button type="button" className="mobile-back-btn">
              <a href="#home">
                <i className="fa-solid fa-arrow-left" />
              </a>
              </button>;
    }
  }

  renderHeading() {
    const { route } = this.context;

    if (route.path === 'home') {
      return <p className="mobile-nav-title py-1">Home</p>;
    }
    if (route.path === `${this.state.username}`) {
      return <p className="mobile-nav-title py-1">{this.state.displayName}</p>;
    }
  }

  render() {
    return (
      <div className="row top-nav p-0 m-0 position-fixed d-lg-block d-lg-none d-xl-block d-xl-none">
        <div className="col">
          {this.renderNavComponent()}
          {this.renderHeading()}
        </div>
      </div>
    );
  }
}

MobileTopNav.contextType = AppContext;
