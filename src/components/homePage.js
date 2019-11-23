import React from "react"
import "../styles/homePage.css"

const homePage = () => {
  return (
    <section className="homePage" id="homePage">
      <div className="bgcBlurr">
        <div className="wrapper">
          <div className="headerHeight"></div>
          <div className="homePageContent">
            <div className="blueRectangle"></div>
            <div className="yellowRectangle"></div>
            <div></div>
            <div>
              <h1>
                <span>B</span>ramy
              </h1>
            </div>
            <div>
              <h1>
                <span>O</span>kna
              </h1>
            </div>
            <div>
              <h1>
                <span>D</span>rzwi
              </h1>
            </div>
            <div>
              <p>To nasza specjalność</p>
            </div>
            <div>
              <button className="homePageButton">Czytaj więcej</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default homePage
