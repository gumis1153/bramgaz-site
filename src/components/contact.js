import React, { Component } from "react"

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
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      <section className="contact" id="contact">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1>Kontakt </h1>{" "}
          </div>
          <form method="post" action="#">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Imię i nazwisko"
            />
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Nr telefonu"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Treść wiadomości"
            ></textarea>
            <button className="submit" type="submit">
              Wyślij
            </button>
          </form>
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
        </div>
      </section>
    )
  }
}

export default Contact
