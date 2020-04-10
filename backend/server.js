const express = require('express')
const nunjucks = require('nunjucks')

const videos = require("./data")

const server = express()

server.use(express.static('../public'))

server.set("view engine", "njk")

nunjucks.configure("../views", {
  express: server,
  autoescape: false,
})

server.get("/", (req, res) => {
  const about = {
    avatar_url: "https://avatars3.githubusercontent.com/u/6643122?s=460&v=4",
    name: "Mayk Brito",
    role: "Instrutor - Rocketseat",
    description: 'Programador Full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      { name: "Github", url: "https://github.com/maykbrito" },
      { name: "Twitter", url: "https://twitter.com/maykbrito" },
      { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/" },
    ]
  }
  
  return res.render("about", { about })
})

server.get("/portfolio", (req, res) => {
  return res.render("portfolio", { items: videos })
})

server.listen(5000, () => {
  console.log("server is running")
})