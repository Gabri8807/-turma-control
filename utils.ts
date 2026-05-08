function limparTela(){
	console.clear()
}

function linha(simbolo:string = "=") {
	console.log(simbolo.repeat(process.stdout.columns))
}

function titulo(texto:string) {
	const largura = process.stdout.columns	

const textoCentralizado = texto.padStart(
	(largura - texto.length) / 2
).padEnd(largura)


limparTela()
linha()
console.log(textoCentralizado)
linha()
}

export {limparTela,
       	linha,
       	titulo

}
