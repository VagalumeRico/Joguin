function jogar() {
	var opcao = document.querySelector('input[name="opcao"]:checked').value;
	if (opcao === "verdade") {
		var perguntas = [
			"Qual é o seu maior medo?",
			"Qual é o seu sonho mais louco?",
			"Qual é a coisa mais estranha que você já comeu?",
			"Qual é o seu maior arrependimento?",
			"Qual é o seu maior segredo?"
		];
		var pergunta = perguntas[Math.floor(Math.random() * perguntas.length)];
		document.getElementById("pergunta").innerHTML = pergunta;
		document.getElementById("resposta").innerHTML = "";
	} else if (opcao === "desafio") {
		var desafios = [
			"Fique em pé em uma perna só por 30 segundos",
			"Faça uma dança engraçada",
			"Imite um animal",
			"Fale com um sotaque estrangeiro",
			"Conte uma piada"
		];
		var desafio = desafios[Math.floor(Math.random() * desafios.length)];
		document.getElementById("pergunta").innerHTML = desafio;
		document.getElementById("resposta").innerHTML = "";
	}
}

document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById("pergunta").innerHTML = "Selecione uma opção para começar";
});
