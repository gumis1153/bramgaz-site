import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/header.css"
import "../components/layout.css"
import { Link } from "react-scroll"

class Header extends Component {
  state = {
    mobileMenuOpen: false,
  }
  handleMobileMenu = () => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelectorAll(".desktop a").forEach(element => {
          element.style.color = "#00366F"
        })
        document.querySelector("header").classList.add("active")
      } else {
        document.querySelectorAll(".desktop a").forEach(element => {
          element.style.color = "#FFFFFF"
        })
        document.querySelector("header").classList.remove("active")
      }
    })
  }

  render() {
    const options = {
      activeClass: "activeButton",
      spy: true,
      smooth: true,
      offset: -80,
      duration: 600,
    }

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
            <ul>
              <li>
                <Link {...options} to="start">
                  Start{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link {...options} to="about">
                  O nas
                </Link>
              </li>
              <li>
                {" "}
                <Link {...options} to="offer">
                  Oferta
                </Link>
              </li>
              <li>
                <Link {...options} to="gallery">
                  Realizacje
                </Link>
              </li>
              <li>
                {" "}
                <Link {...options} to="certifications">
                  Certyfikaty
                </Link>
              </li>
              <li>
                <Link {...options} to="contact">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className="logo">
            <a href="/">
              <StaticQuery
                query={graphql`
                  {
                    bramgazApi {
                      logoes {
                        id
                        photo {
                          url
                        }
                      }
                    }
                  }
                `}
                render={({ bramgazApi: { logoes } }) =>
                  logoes.map(index => (
                    <img src={index.photo.url} alt={"Logo firmy Bramgaz"} />
                  ))
                }
              />
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
