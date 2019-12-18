import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import "../styles/header.css"
import "../components/layout.css"
import { Link } from "react-scroll"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
                <OutboundLink href="#start" onClick={this.handleMobileMenu}>
                  Start
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="#about" onClick={this.handleMobileMenu}>
                  O nas
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="#offer" onClick={this.handleMobileMenu}>
                  Oferta
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="#gallery" onClick={this.handleMobileMenu}>
                  Realizacje
                </OutboundLink>
              </li>
              <li>
                <OutboundLink
                  href="#certifications"
                  onClick={this.handleMobileMenu}
                >
                  Certyfikaty
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href="#contact" onClick={this.handleMobileMenu}>
                  Kontakt
                </OutboundLink>
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
