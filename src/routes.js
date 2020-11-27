const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	return res.render('home/index.html',
	{title: 'Home'}
	)	
})

router.get('/funcionarios', (req, res) => {
	return res.render('funcionarios/index.html',
	{title: 'Funcionários'},
	)
})

router.get('/departamentos', (req, res) => {
	return res.render('departamentos/index.html',
	{title: 'Departamentos'}
	)
})

router.get('/veiculos', (req, res) => {
	return res.render('veiculos/index.html',
	{title: 'Veículos'}
	)
})

router.get('/motoristas', (req, res) => {
	return res.render('motoristas/index.html',
	{title: 'Motoristas'}
	)
})

router.get('/manutencoes', (req, res) => {
	return res.render('manutencoes/index.html',
	{title: 'Manutenções'}
	)
})

router.get('/multas', (req, res) => {
	return res.render('multas/index.html',
	{title: 'Multas'}
	)
})

router.get('/solicitacoes', (req, res) => {
	return res.render('solicitacoes/index.html',
	{title: 'Solicitações'}
	)
})

router.get('/locacoes', (req, res) => {
	return res.render('locacoes/index.html',
	{title: 'locações evento'}
	)
})

module.exports = router