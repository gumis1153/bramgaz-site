import React, { Component } from "react"
import BramgazLogo from "../images/bramgaz-logo.png"
import "../styles/header.css"
import "../components/layout.css"

class Header extends Component {
  state = {
    mobileMenuOpen: false,
  }
  handleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }
  render() {
    return (
      <header>
        <div className="wrapper">
          <div onClick={this.handleMobileMenu} className="hamburgerContainer">
            <div></div>
            <div></div>
            <div></div>
            <span>Menu</span>
          </div>
          <nav className={this.state.mobileMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <a href="">Start</a>
              </li>
              <li>
                <a href="">O nas</a>
              </li>
              <li>
                <a href="">Oferta</a>
              </li>
              <li>
                <a href="">Realizacje</a>
              </li>
              <li>
                <a href="">Certyfikaty</a>
              </li>
              <li>
                <a href="">Kontakt</a>
              </li>
            </ul>
          </nav>
          <img src={BramgazLogo} alt="Logo firmy bramgaz" />
        </div>
      </header>
    )
  }
}

export default Header
