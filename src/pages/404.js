import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Nie znaleziono takiej strony</h1>
    <p>
      Znajdujesz się na podstronie która nie istnieje na stronie www.bramgaz.pl
    </p>
  </Layout>
)

export default NotFoundPage
