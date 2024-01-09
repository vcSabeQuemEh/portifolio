// variaveis
var soma;

var contaClique1 = 0;
var contador1= 0;

var contaClique2= 0;
var contador2= 0;

var contaClique3= 0;
var contador3= 0;



function respostaCerta1(){
	opcao1.style.background = "green";
	opcao2.style.background = "red";
	opcao3.style.background = "red";
	

	if (contador1<1) {
		area1.style.background = "green";
		contaClique1= contaClique1 + 1;
	}

	contador1=1;
}

function respostaErrada1(){
	opcao2.style.background= "red";
	opcao1.style.background = "green";
	opcao3.style.background = "red";

	if (contador1<1) {
		area1.style.background = "red";
	}

	contador1=1;
	
}

function respostaCerta2(){
	opcao5.style.background = "green";
	opcao4.style.background = "red";
	opcao6.style.background = "red";
	

	if (contador2<1) {
		area2.style.background = "green";
		contaClique2= contaClique2 + 1;
	}

	contador2=1;

}

function respostaErrada2(){
	opcao6.style.background= "red";
	opcao5.style.background = "green";
	opcao4.style.background = "red";

	if (contador2 < 1) {
		area2.style.background = "red";
	}

	contador2+=1;
}

function respostaCerta3(){
	opcao9.style.background = "green";
	opcao7.style.background = "red";
	opcao8.style.background = "red";
	

	if (contador3<1) {
		area3.style.background = "green";
		contaClique3= contaClique3 + 1;
	}

	contador3+=1;
}

function respostaErrada3(){
	opcao8.style.background= "red";
	opcao9.style.background = "green";
	opcao7.style.background = "red";

	 if (contador3<1) {
		area3.style.background = "red";
	}
	contador3+=1;
}

function exibeAcertos(){
	soma = contaClique1 + contaClique2 + contaClique3;
	document.getElementById('acertos').innerHTML = soma; 
}