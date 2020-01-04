import React from "react"
import "../styles/footer.css"

const year = () => {
  const date = new Date()
  const year = date.getFullYear()
  return year
}

const Footer = () => {
  return (
    <>
      <footer>
        <p>{year()} | Designed and developed by: piotrjakubowski.pl</p>
      </footer>
    </>
  )
}

export default Footer
