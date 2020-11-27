const uri  = 'http://localhost:3333/veiculos'

function getVeiculos () {

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

getVeiculos()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(veiculos) {
	let output = ''
	let numero_de_itens = 1

	for (let veiculo of veiculos) {

		


		output += `
		<tr>
			<td><b>${adicionaZero(numero_de_itens)}</b></td>
			<td>${veiculo.marca}</td>
			<td>${veiculo.modelo}</td>
			<td>${veiculo.ano_fabricacao}</td>
			<td>${veiculo.categoria}</td>
			<td>${veiculo.portas}</td>
			<td>${veiculo.tipo_farol}</td>
			<td>${veiculo.cambio}</td>
			<td>${veiculo.ocupantes}</td>
			<td>${veiculo.num_chassi}</td>
			<td>${veiculo.num_placa}</td>
			<td>${veiculo.tipo_combustivel}</td>
			<td>${veiculo.tanque_tamanho}</td>
			<td>${veiculo.tanque_atual}</td>
			<td>${veiculo.quilometragem}</td>
		</tr>
		`
		numero_de_itens +=1
	}


	document.querySelector('tbody').innerHTML = output

}


