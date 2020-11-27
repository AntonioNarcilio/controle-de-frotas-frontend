const uri  = 'http://localhost:3333/multas'

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];


function getMultas () {

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

getMultas()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(multas) {
	let output = ''
	let numero_de_itens = 1

	for (let multa of multas) {

		// Editando data
		let data = new Date(`${multa.data_e_hora}`); 
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
			<td>${multa.local_endereco}</td>
			<td>${datahoraFormatada}</td>
			<td>${multa.tipo}</td>
			<td>${multa.modelo}</td>
			<td>${multa.num_placa}</td>
			<td>${multa.num_chassi}</td>
			<td>${multa.nome + ' ' + multa.sobrenome}</td>
			<td>${multa.cnh}</td>
		</tr>
		`
		numero_de_itens +=1
	}


	document.querySelector('tbody').innerHTML = output

}


