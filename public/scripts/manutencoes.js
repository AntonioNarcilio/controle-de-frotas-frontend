const uri  = 'https://controle-de-frotas-api.herokuapp.com/manutencoes'

function getManutencoes () {

	axios
	.get(`${uri}`)
	.then((res) => {
			// console.log('Data =>', res.data)
			const data = res.data
			View(data)
	})
	.catch((err) => {
			console.warn(err);
	})

}

getManutencoes()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(manutencoes) {
	let output = ''
	let numero_de_itens = 1

	for (let manutencao of manutencoes) {

		output += `
		<tr>
			<td><b>${adicionaZero(numero_de_itens)}</b></td>
			<td>${manutencao.tipo}</td>
			<td>${manutencao.quilometragem}</td>
			<td>${manutencao.causa}</td>
			<td>${manutencao.observacao}</td>
			<td>${manutencao.nome + ' ' + manutencao.sobrenome}</td>
			<td>${manutencao.cnh}</td>
			<td>${manutencao.modelo}</td>
			<td>${manutencao.num_placa}</td>
			<td>${manutencao.nome_peca}</td>
			<td>${manutencao.garantia_meses}</td>
		</tr>
		`
		numero_de_itens +=1
	}

	document.querySelector('tbody').innerHTML = output

}
