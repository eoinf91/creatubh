import React from 'react'
import { Link } from 'gatsby'
import logo from '../../img/logo.svg'
import facebook from '../../img/social/facebook.svg'
import instagram from '../../img/social/instagram.svg'
import "./navbar.styles.scss";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="creatubh" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/services">
                Services
              </Link>
              <Link className="navbar-item" to="/portfolio">
                Portfolio
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item cta" to="/contact">
                Get a quote
              </Link>
            </div>
          </div>
        </div>
        <div className="social">
          <a title="instagram" href="https://instagram.com">
            <img
              src={instagram}
              alt="Instagram"
            />
          </a>
          <a title="facebook" href="https://facebook.com">
            <img
              src={facebook}
              alt="Facebook"
            />
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar
