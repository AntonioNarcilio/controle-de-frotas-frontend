const express = require('express')
const app = express()
const routes = require('./routes')
// 📌 Utilizando template engine
const nunjucks = require("nunjucks")

const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0'

app.use(routes)

app.use(express.static("public")) 	
app.use(express.static('node_modules/materialize-css/dist'))

nunjucks.configure("src/views/", {
	// "ligando" nunjucks ao express
	express: app,
	noCache: true
})


app.listen(PORT, () =>{
	console.log(`Aplicação rodando na porta ${PORT}\n👉 http://${HOST}:${PORT}`)
})
