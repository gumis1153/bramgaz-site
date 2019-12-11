import React, { Component } from "react"
import pdf from "../files/RODO.pdf"

import "../styles/contact.css"

const mapStyle = {
  width: "100%",
  height: "100%",
  frameborder: "0",
  border: 0,
  marginBottom: "10px",
  allowfullscreen: "",
}

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    checkboxCheck: false,
    nameError: "",
    emailError: "",
    messageError: "",
    checkboxError: "",
    isValid: false,
  }

  validate = () => {
    let nameError = ""
    let emailError = ""
    let messageError = ""
    let checkboxError = ""

    if (this.state.name.length <= 2) {
      nameError = "Wprowadź poprawne imię i nazwisko."
    } else nameError = ""

    if (nameError) {
      this.setState({ nameError })
    }

    if (this.state.email.length === 0) {
      emailError = "Wprowadź poprawny adres email."
    } else emailError = ""

    if (emailError) {
      this.setState({ emailError })
    }

    if (this.state.message.length <= 5) {
      messageError = "Wprowadź treść wiadomości."
    } else messageError = ""

    if (messageError) {
      this.setState({ messageError })
    }

    if (!this.state.checkboxCheck) {
      checkboxError =
        "Aby wysłać wiadomość musisz zaakceptować regulamin polityki prywatności firmy Bramgaz."
    } else checkboxError = ""

    if (checkboxError) {
      this.setState({ checkboxError })
    }

    if (
      nameError === "" &&
      emailError === "" &&
      messageError === "" &&
      checkboxError === ""
    ) {
      this.setState({
        isValid: true,
      })
      document.getElementById("contactForm").submit()
    }
    // else {
    //   this.setState({
    //     isValid: false,
    //   })
    // }
  }

  handleSubmit = e => {
    this.setState({
      nameError: "",
      emailError: "",
      messageError: "",
      checkboxError: "",
    })
    e.preventDefault()
    this.validate()
    console.log(this.validate)
  }

  handleInputName = e => {
    this.setState({
      name: e.target.value,
    })
  }

  handleInputEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }

  handleInputPhone = e => {
    this.setState({
      phone: e.target.value,
    })
  }

  handleInputMessage = e => {
    this.setState({
      message: e.target.value,
    })
  }

  handleCheckbox = () => {
    this.setState({
      checkboxCheck: !this.state.checkboxCheck,
    })
  }

  render() {
    return (
      <section className="contact" id="contact">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1>Kontakt </h1>{" "}
          </div>

          <div className="contactInfo">
            <div className="contactInfoSection">
              <div className="contactInfoSectionTitle">
                <h3>Lokalizacja</h3>
              </div>
              <p>Bramgaz "Tadeusz Jakubowski"</p>
              <p>ul. Chociszewskiego 37a</p>
              <p>64-100 Leszno</p>
            </div>
            <div className="contactInfoSection">
              <div className="contactInfoSectionTitle">
                <h3>Kontakt</h3>
              </div>
              <p>
                Tel. <a href="tel:655296109">(65) 529 61 09</a>
              </p>
              <p>
                E-mail:<a href="mailto:biuro@bramgaz.pl">biuro@bramgaz.pl</a>
              </p>
            </div>
            <div className="contactInfoSection">
              <div className="contactInfoSectionTitle">
                <h3>Godziny otwarcia</h3>
              </div>
              <p>Poniedziałek - Piątek: 8:00 - 16:00</p>
              <p>Sobota: 9:00 - 13:00</p>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Mapa pokazująca położenie firmy Bramgaz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.493724587304!2d16.571716415980497!3d51.833678294614934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705983164b7832f%3A0x915e6c8d4d14cbde!2sBRAMGAZ.%20Bramy.%20Drzwi.%20Nap%C4%99dy.%20Ogrodzenia.%20Okna.!5e0!3m2!1spl!2spl!4v1574522959321!5m2!1spl!2spl"
              style={mapStyle}
            ></iframe>
          </div>
          <form
            id="contactForm"
            onSubmit={this.handleSubmit}
            method="post"
            action="https://formspree.io/jakubowski656@gmail.com"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Imię i nazwisko"
              onChange={this.handleInputName}
            />

            <input
              type="email"
              name="_replyto"
              id="email"
              placeholder="E-mail"
              onChange={this.handleInputEmail}
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Nr telefonu"
              onChange={this.handleInputPhone}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Treść wiadomości"
              onChange={this.handleInputMessage}
            ></textarea>
            <div className="errors">
              {this.state.nameError ? (
                <p className="nameError error">{this.state.nameError}</p>
              ) : null}
              {this.state.emailError ? (
                <p className="emailError error">{this.state.emailError}</p>
              ) : null}
              {this.state.phoneError ? (
                <p className="phoneError error">{this.state.phoneError}</p>
              ) : null}
              {this.state.messageError ? (
                <p className="messageError error">{this.state.messageError}</p>
              ) : null}
              {this.state.checkboxError ? (
                <p className="checkboxError error">
                  {this.state.checkboxError}
                </p>
              ) : null}
            </div>
            <div className="checkbox">
              <input
                onChange={this.handleCheckbox}
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                Oświadczam, że zapoznałam/em się z{" "}
                <a href={pdf}>Regulaminem polityki prywatnosci(RODO)</a> firmy
                BRAMGAZ i akceptuję jego warunki.
              </label>
            </div>
            <div className="submit">
              <button className="submit" type="submit">
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact
