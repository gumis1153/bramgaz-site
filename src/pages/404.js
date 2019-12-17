import React from "react"
import SEO from "../components/seo"
import "../styles/404.css"
import logo from "../images/bramgaz-logo.png"

const NotFoundPage = () => (
  <section className="error">
    <SEO title="Nie znaleziono strony" />
    <img src={logo} alt="Logotyp firmy Bramgaz" />

    <div className="wrapper">
      <h1>Nie znaleziono takiej strony</h1>
      <p>
        Znajdujesz się na podstronie która nie istnieje na stronie
        www.bramgaz.pl
      </p>

      <div className="return">
        <a href="/">Wróć do strony bramgaz.pl</a>
      </div>
    </div>
  </section>
)

export default NotFoundPage
