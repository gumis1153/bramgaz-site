import React from "react"
import "../styles/certifications.css"

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <div className="wrapper">
        <div className="sectionTitle">
          <h1>Certyfikaty </h1>{" "}
        </div>
        <p>
          Z przyjemnością poprawiamy swoje kwalifikację w dziedzinie sprzedaży i
          montażu bram, drzwi oraz okien. Doskonalimy się dążąc do perfekcji i
          zadowolenia naszych klientów przez zdobywanie kolejnych certyfikatów
          świadczących o wysokim poziomie naszych usług.
        </p>
        <div className="certificationsSlider"></div>
      </div>
    </section>
  )
}

export default Certifications
