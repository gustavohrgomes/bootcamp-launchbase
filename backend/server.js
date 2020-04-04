const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('../public'))

server.set("view engine", "njk")

nunjucks.configure("../views", {
  express: server
})

server.get("/", (request, response) => {
  return response.render("about")
})

server.get("/portfolio", (request, response) => {
  return response.render("portfolio")
})

server.listen(5000, () => {
  console.log("server is running")
})