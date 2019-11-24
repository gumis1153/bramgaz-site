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
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelector("header").classList.add("active")
      } else {
        document.querySelector("header").classList.remove("active")
      }
    })
    return (
      <header className={`headerHeight`}>
        <div className="wrapper">
          <div
            onClick={this.handleMobileMenu}
            className={
              "hamburgerContainer" +
              (this.state.mobileMenuOpen ? " active" : "")
            }
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <nav className={this.state.mobileMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <a href="#start" onClick={this.handleMobileMenu}>
                  Start
                </a>
              </li>
              <li>
                <a href="#about" onClick={this.handleMobileMenu}>
                  O nas
                </a>
              </li>
              <li>
                <a href="#offer" onClick={this.handleMobileMenu}>
                  Oferta
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={this.handleMobileMenu}>
                  Realizacje
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={this.handleMobileMenu}>
                  Certyfikaty
                </a>
              </li>
              <li>
                <a href="#contact" onClick={this.handleMobileMenu}>
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
          <nav className="desktop">
            <button>Start</button>
            <button>O nas</button>
            <button>Oferta</button>
            <button>Realizacje</button>
            <button> Certyfikaty</button>
            <button>Kontakt</button>
          </nav>
          <div className="logo">
            <a href="#">
              <img src={BramgazLogo} alt="Logo firmy bramgaz" />
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
