// variaveis
var soma;

var contaClique1 = 0;
var contador1 = 0;

var contaClique2 = 0;
var contador2 = 0;

var contaClique3 = 0;
var contador3 = 0;

var contaClique4 = 0;
var contador4 = 0;

var contaClique5 = 0;
var contador5 = 0;



function respostaCerta1(){
	opcao1.style.background = "#A5FF8E";
	opcao2.style.background = "#FF8989";
	opcao3.style.background = "#FF8989";
	

	if (contador1<1) {
		area1.style.background = "#A5FF8E";
		contaClique1 = contaClique1 + 1;
	}

	contador1 = 1;
}

function respostaErrada1(){
	opcao2.style.background= "#FF8989";
	opcao1.style.background = "#A5FF8E";
	opcao3.style.background = "#FF8989";

	if (contador1<1) {
		area1.style.background = "#FF8989";
	}

	contador1 = 1;
	
}

function respostaCerta2(){
	opcao5.style.background = "#A5FF8E";
	opcao4.style.background = "#FF8989";
	opcao6.style.background = "#FF8989";
	

	if (contador2<1) {
		area2.style.background = "#A5FF8E";
		contaClique2 = contaClique2 + 1;
	}

	contador2 += 1;

}

function respostaErrada2(){
	opcao6.style.background= "#FF8989";
	opcao5.style.background = "#A5FF8E";
	opcao4.style.background = "#FF8989";

	if (contador2 < 1) {
		area2.style.background = "#FF8989";
	}

	contador2=1;
}

function respostaCerta3(){
	opcao9.style.background = "#A5FF8E";
	opcao7.style.background = "#FF8989";
	opcao8.style.background = "#FF8989";
	

	if (contador3 < 1) {
		area3.style.background = "#A5FF8E";
		contaClique3= contaClique3 + 1;
	}

	contador3 +=1 ;
}

function respostaErrada3(){
	opcao8.style.background= "#FF8989";
	opcao9.style.background = "#A5FF8E";
	opcao7.style.background = "#FF8989";

	 if (contador3<1) {
		area3.style.background = "#FF8989";
	}
	contador3 += 1;
}

function respostaCerta4(){
	opcao10.style.background = "#FF8989";
	opcao11.style.background = "#A5FF8E";
	opcao12.style.background = "#FF8989";
	

	if (contador4<1) {
		area4.style.background = "#A5FF8E";
		contaClique4 = contaClique4 + 1;
	}

	contador4 += 1;
}

function respostaErrada4(){
	opcao10.style.background= "#FF8989";
	opcao11.style.background = "#A5FF8E";
	opcao12.style.background = "#FF8989";

	 if (contador4<1) {
		area4.style.background = "#FF8989";
	}
	contador4 += 1;
}

function respostaCerta5(){
	opcao13.style.background = "#A5FF8E";
	opcao14.style.background = "#FF8989";
	opcao15.style.background = "#FF8989";
	

	if (contador5<1) {
		area5.style.background = "#A5FF8E";
		contaClique5 = contaClique5 + 1;
	}

	contador5 += 1;
}

function respostaErrada5(){
	opcao14.style.background = "#FF8989";
	opcao13.style.background = "#A5FF8E";
	opcao15.style.background = "#FF8989";

	if (contador5<1) {
		area5.style.background = "#FF8989";
	}

	contador5 = 1;
	
}

function exibeAcertos(){
	soma = contaClique1 + contaClique2 + contaClique3 + contaClique4 + contaClique5;
	document.getElementById('acertos').innerHTML = soma; 
}