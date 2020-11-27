const uri  = 'http://localhost:3333/solicitacoes'

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];


function getSolicitacoes () {

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

getSolicitacoes()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(solicitacoes) {
	let output = ''
	let numero_de_itens = 1

	for (let solicitacao of solicitacoes) {

		// Editando data
		let data = new Date(`${solicitacao.data_e_hora}`); 
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
			<td>${solicitacao.status}</td>
			<td>${solicitacao.tipo_evento}</td>
			<td>${datahoraFormatada}</td>
			<td>${solicitacao.local_endereco}</td>
			<td>${solicitacao.qtd_pessoas}</td>
			<td>${solicitacao.tempo_de_utilizacao}</td>
			<td>${solicitacao.modelo}</td>
			<td>${solicitacao.num_placa}</td>
			<td>${solicitacao.nome + ' ' + solicitacao.sobrenome}</td>
			<td>${solicitacao.cpf}</td>
			<td>${solicitacao.dnome}</td>
		</tr>
		`
		numero_de_itens +=1
	}


	document.querySelector('tbody').innerHTML = output

}


