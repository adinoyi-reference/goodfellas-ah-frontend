import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../actions/authActions';

class Header extends Component {
  dropdown = () => {
    this.refs.myDropdown.classList.toggle('show');
  };

  navbarToggle = () => {
    this.refs.navbarTitle.classList.toggle('-responsive');
    if (this.refs.navbarToggler.className === 'navbar-wrapper') {
      this.refs.navbarToggler.className = 'navbar-wrapper-responsive';
    } else {
      this.refs.navbarToggler.className = 'navbar-wrapper';
    }
  }

  openSearchbar = () => {
    if (this.refs.searchbar.className === 'searchbar') {
      this.refs.searchbar.className = 'searchbar-responsive';
    } else {
      this.refs.searchbar.className = 'searchbar';
    }
  }

  render() {
    const { auth } = this.props;
    const { parentComponent } = this.props;
    const { signout: signoutUser } = this.props;
    return (
      <header>
        <nav className="navbar">
          <Link className="navbar-title navbar-brand" ref="navbarTitle" to="/">
            {parentComponent === 'landingpage' ? <h3 className="brand-name-white">Authors Haven</h3> : <h3 className="brand-name-dark">Authors Haven</h3>}
          </Link>

          {auth
            ? (
              <div className="header-user">
                <div className="header-user-search">
                  <input className="searchbar" ref="searchbar" type="search" />
                  <span onClick={this.openSearchbar}><img
                    src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541433375/Authors%20Haven/search-icon.png"
                    alt=""
                  />
                  </span>
                </div>
                <div className="header-user-images">
                  <div className="dropdown">
                    {parentComponent === 'landingpage' ? (
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541508547/Authors%20Haven/white_bell_icon.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="dropdown-toggle notification-image"
                        data-toggle="dropdown"
                        src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541606672/Authors%20Haven/black_bell_icon.png"
                        alt=""
                      />)}
                  </div>
                  <span className="notification-count">4</span>
                  <div onClick={this.dropdown} className="dropdown">
                    <img
                      className="dropdown-toggle author-image"
                      src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/john.jpg"
                      alt=""
                    />
                    <ul ref="myDropdown" className="dropdown-menu">
                      <li>
                        <Link to="/createArticle">New article</Link>
                      </li>
                      <li>
                        <Link to="/drafts">Drafts</Link>
                      </li>
                      <li>
                        <Link to="/myArticles">Your stories</Link>
                      </li>
                      <li>
                        <Link to="/stats">Stats</Link>
                      </li>
                      <li>
                        <Link to="/bookmark">Bookmarks</Link>
                      </li>
                      <li>
                        <Link to="/favourites">Favourites</Link>
                      </li>
                      <li>
                        <Link to="/user/profile">Profile</Link>
                      </li>
                      <li>
                        <Link onClick={signoutUser} to="/">Sign out</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )
            : (
              <div className="navbar-main-wrapper">
                <button
                  onClick={this.navbarToggle}
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                >
                  <span className="">
                    <img
                      className="menuIcon"
                      src="https://res.cloudinary.com/drmmqcxkc/image/upload/v1541426069/Authors%20Haven/icons8-menu.svg"
                      alt=""
                    />
                  </span>
                </button>
                <div className="navbar-wrapper" ref="navbarToggler">
                  <ul className="navbar-element">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <p>Explore</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <p>About Us</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        <p>Contact</p>
                      </Link>
                    </li>
                  </ul>

                  <ul className="navbar-element">
                    <li className="nav-item">
                      <Link className="nav-link" to="/auth/signin">
                        <p>Sign In</p>
                      </Link>
                    </li>
                    <p className="link-border">|</p>
                    <li className="nav-item">
                      <Link className="nav-link" to="/auth/signup">
                        <p>Sign Up</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
        </nav>
      </header>
    );
  }
}

function mapStatetoProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStatetoProps, { signout })(Header);
