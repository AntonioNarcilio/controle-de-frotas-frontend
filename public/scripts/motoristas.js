const uri  = 'http://localhost:3333/motoristas'

const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];


function getMotorista () {

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

getMotorista()


function adicionaZero(numero){
	if (numero <= 9) 
			return "0" + numero;
	else
			return numero; 
}


function View(motoristas) {
	let output = ''
	let numero_de_itens = 1

	for (let motorista of motoristas) {

		// Editando data
		let data = new Date(`${motorista.data_venc_cnh}`); 
		let dataFormatada = (adicionaZero(data.getDate().toString()) + " " + meses[(data.getMonth())] + " " + data.getFullYear()) ;
		// console.log(dataFormatada);

		output += `
		<tr>
			<td><b>${adicionaZero(numero_de_itens)}</b></td>
			<td>${motorista.cnh}</td>
			<td>${motorista.tipo_cnh}</td>
			<td>${dataFormatada}</td>
			<td>${motorista.nome + ' ' + motorista.sobrenome}</td>
			<td>${motorista.dnome}</td>
		</tr>
		`
		numero_de_itens +=1
	}


	document.querySelector('tbody').innerHTML = output

}
