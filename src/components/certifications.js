import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/certifications.css"

import c1 from "../images/c1.jpg"
import c2 from "../images/c2.jpg"
import c3 from "../images/c3.jpg"
import c4 from "../images/c4.jpg"
import c5 from "../images/c5.jpg"
import c6 from "../images/c6.jpg"
import c7 from "../images/c7.jpg"
import c8 from "../images/c8.jpg"
import c9 from "../images/c9.jpg"
import c10 from "../images/c10.jpg"
import c11 from "../images/c11.jpg"

class Certifications extends Component {
  state = {}
  render() {
    const settings = {
      centerPadding: "60px",
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
    return (
      <section className="certifications" id="certifications">
        <div className="wrapper">
          <div className="sectionTitle">
            <h1>Certyfikaty </h1>{" "}
          </div>
          <p>
            Z przyjemnością poprawiamy swoje kwalifikację w dziedzinie sprzedaży
            i montażu bram, drzwi oraz okien. Doskonalimy się dążąc do perfekcji
            i zadowolenia naszych klientów przez zdobywanie kolejnych
            certyfikatów świadczących o wysokim poziomie naszych usług.
          </p>
          <div className="certificationsSlider">
            <Slider {...settings}>
              <div>
                <img
                  src={c1}
                  alt="Udział w warszatatach montażowych produktów marki Eclisse."
                />
              </div>
              <div>
                <img
                  src={c2}
                  alt="Innowacje w drzwiach zewnętrznych, trendy w drzwiach wewnętrznych i panelach, nowoczesne systemy drzwi chowanych w ścianę oraz klamki."
                />
              </div>
              <div>
                <img src={c3} alt="Sprzedawca kwalifikowany drzwi CAL." />
              </div>
              <div>
                <img
                  src={c4}
                  alt="Uział w warsztatach montażowych produktów marki Classen."
                />
              </div>
              <div>
                <img src={c5} alt="Oferta drzwi stalowych formy Wikęd." />
              </div>
              <div>
                <img
                  src={c6}
                  alt="Szkolenie informatyczne dot. programu do konstrucki i kalkulacji okien WH OKNA."
                />
              </div>
              <div>
                <img src={c7} alt="Certyfikat firmy godnej zaufania." />
              </div>
              <div>
                <img
                  src={c8}
                  alt="Certyfikat potwierdzający autoryzację firmy Bramgaz w montażu i serwisie bram garażowych, przemysłowych, napędów i sterowań do drzwi."
                />
              </div>
              <div>
                <img
                  src={c9}
                  alt="Zwycięstwo w konkursie sprzedażowym Zakłądu Stolarki Budowlanej CAL."
                />
              </div>
              <div>
                <img
                  src={c10}
                  alt="Zaawansowane szkolenie techniczne z zakresu programowania i instalowania produktów HOLDINGU BENINCA."
                />
              </div>
              <div>
                <img
                  src={c11}
                  alt="Technika montażu, obsługi klienta, prawa konsumenckiego i marketingu."
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}

export default Certifications
