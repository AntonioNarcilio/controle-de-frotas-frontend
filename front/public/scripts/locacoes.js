const uri  = 'http://localhost:3333/locacoes'

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];


function getLocacao () {

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

getLocacao()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(locacoes) {
	let output = ''
	let numero_de_itens = 1

	for (let locacao of locacoes) {

		// Editando data
		let data = new Date(`${locacao.data_e_hora}`); 
		let datahoraFormatada = (
			adicionaZero(data.getDate().toString()) + " "
			 + meses[(data.getMonth())] + " " 
			 + data.getFullYear() + " / " 
			 + adicionaZero(data.getUTCHours()) + ":" + adicionaZero(data.getUTCMinutes())
			 );
		// console.log(datahoraFormatada);

		output += `

		<tr>
			<td><b>${adicionaZero(numero_de_itens)}</b></td>
			<td>${locacao.status_locacao}</td>
			<td>${locacao.tanque_saida}</td>
			<td>${locacao.tanque_chegada}</td>
			<td>${locacao.km_saida}</td>
			<td>${locacao.km_chegada}</td>
			<td>${locacao.tipo_evento}</td>
			<td>${datahoraFormatada}</td>
			<td>${locacao.nome + ' ' + locacao.sobrenome}</td>
			<td>${locacao.motorista_id}</td>
		</tr>
		`
		numero_de_itens +=1
	}


	document.querySelector('tbody').innerHTML = output

}

