import React, { Component } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/certifications.css"

import c1 from "../static/certifications/c1.jpg"
import c2 from "../static/certifications/c2.jpg"
import c3 from "../static/certifications/c3.jpg"
import c4 from "../static/certifications/c4.jpg"
import c5 from "../static/certifications/c5.jpg"
import c6 from "../static/certifications/c6.jpg"
import c7 from "../static/certifications/c7.jpg"
import c8 from "../static/certifications/c8.jpg"
import c9 from "../static/certifications/c9.jpg"
import c10 from "../static/certifications/c10.jpg"
import c11 from "../static/certifications/c11.jpg"

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

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
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
                <img src={c1} alt="" />
              </div>
              <div>
                <img src={c2} alt="" />
              </div>
              <div>
                <img src={c3} alt="" />
              </div>
              <div>
                <img src={c4} alt="" />
              </div>
              <div>
                <img src={c5} alt="" />
              </div>
              <div>
                <img src={c6} alt="" />
              </div>
              <div>
                <img src={c7} alt="" />
              </div>
              <div>
                <img src={c8} alt="" />
              </div>
              <div>
                <img src={c9} alt="" />
              </div>
              <div>
                <img src={c10} alt="" />
              </div>
              <div>
                <img src={c11} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    )
  }
}

export default Certifications
