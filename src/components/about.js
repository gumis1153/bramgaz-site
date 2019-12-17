import React from "react"
import "../styles/about.css"
import photo from "../images/about_img.jpg"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <div className="sectionTitle">
          <h1>O nas</h1>
        </div>
        <div className="subtitle">
          <h2>Kilka słów o naszej firmie</h2>
        </div>
        <article>
          <p>
            Firma BRAMGAZ zajmuje się działalnością usługową od 1997 roku.
            Dostarczamy produkty i usługi na rynek krajowy i zagraniczny.
            Współpracujemy z wieloma producentami towarów w kraju i za granicą
            Polski o sprawdzonej marce i uznanej renomie, wysokiej ich jakości.
          </p>
          <p>
            Prowadzimy sprzedaż naszych produktów wraz z usługą montażową ,
            poprzez własne ekipy montażowe. W ostatnim czasie wprowadzamy do
            obrotu produkty do budownictwa energooszczędnego i pasywnego.
            Szanując naszych klientów, poświęcamy nasz czas starając się im
            służyć naszą fachową i kompleksową obsługą i wiedzą. Klienci
            indywidualni doceniają nasze wieloletnie doświadczenie, fachowość
            oraz pełną dbałość o nasze usługi. Natomiast inwestorzy przemysłowi
            korzystają z bogatego doświadczenia naszych realizacji w obiektach
            przemysłowych, ceniąc nasze rady i pomoc w doborze oferowanych
            produktów.
          </p>
          <p>
            Zapraszamy Państwa do zapoznania się z pełną ofertą poprzez wizytę w
            biurze BRAMGAZ lub na naszej stronie internetowej.
          </p>
        </article>
        <div className="aboutPhoto">
          <h1>Ponad 20 lat doświadczenia</h1>
          <img src={photo} alt="Zdjęcia bramy garażowej formy Hormann" />
        </div>
      </div>
    </section>
  )
}

export default About
