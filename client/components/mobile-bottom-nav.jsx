import React from 'react';

export default class MobileBotNav extends React.Component {
  render() {
    return (
      <div className="row bot-nav p-0 m-0 position-fixed d-lg-block d-lg-none d-xl-block d-xl-none">
        <div className="col">
          <a href="#home">
            <i className="fa-solid fa-house" />
          </a>
        </div>
        <div className="col text-center">
          <button type="button" className="mobile-post-btn" onClick={this.props.openPost}>
            <i className="fa-solid fa-plus" />
          </button>
        </div>
        <div className="col mobile-search-btn">
          <button type="button" onClick={this.props.mobileSearchForm}>
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
    );
  }
}
