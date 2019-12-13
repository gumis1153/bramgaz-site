window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelectorAll(".desktop a").forEach(element => {
      element.style.color = "#00366F"
      // console.log("tu nie ma się renderować")
    })
    document.querySelector("header").classList.add("active")
  } else {
    document.querySelectorAll(".desktop a").forEach(element => {
      element.style.color = "#FFFFFF"
    })
    document.querySelector("header").classList.remove("active")
  }
})
